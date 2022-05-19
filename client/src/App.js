import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CreateForm from "./components/CreateForm";
import Main from "./views/Main"
import Status from "./views/Status"
import Update from "./views/Update"

function App() {
  return (
      <BrowserRouter >
        <Link to="/">Manage Players</Link> |
        <Link to="/players/status"> Manage Player Status</Link>

        <Routes>
          <Route path="" element={<Main />}></Route>
          <Route path="/players/create" element={<CreateForm />}></Route>
          <Route path="/players/status" element={<Status />}></Route>
          <Route path="/players/:id/edit" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
