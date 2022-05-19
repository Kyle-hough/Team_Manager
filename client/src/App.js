import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CreateForm from "./components/CreateForm";
import Main from "./views/Main"
import Status1 from "./views/Status1"
import Status2 from "./views/Status2"
import Status3 from "./views/Status3"
import Update from "./views/Update"

function App() {
  return (
      <BrowserRouter >
        <Link to="/">Manage Players</Link> |
        <Link to="/players/status1"> Manage Player Status</Link>

        <Routes>
          <Route path="" element={<Main />}></Route>
          <Route path="/players/create" element={<CreateForm />}></Route>
          <Route path="/players/status1" element={<Status1 />}></Route>
          <Route path="/players/status2" element={<Status2 />}></Route>
          <Route path="/players/status3" element={<Status3 />}></Route>
          <Route path="/players/:id/edit" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
