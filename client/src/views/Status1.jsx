import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Status1 = () => {
    const [players, setPlayers] = useState([])
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/players`)
            .then(response => {
                setPlayers(response.data)
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }, [refresh])

    const updateStatus1 = (id, status1) => {
        axios.put(`http://localhost:8000/api/players/${id}`, { status1 })
            .then(response => {
                setRefresh(!refresh)
            })

            .catch(err => console.log(err))
    }



    return (
        <div>
            <h1>Player Status - Game 1</h1>
            <Link to="/players/status1"> Game 1</Link> |
            <Link to="/players/status2"> Game 2</Link> |
            <Link to="/players/status3"> Game 3</Link> 

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player, i) => (
                            <tr key={i}>
                                <td>{player.name}</td>
                                {player.status1 === 'playing'?
                                    <button style={{ backgroundColor: "green"}}>Playing</button>:
                                    <button onClick={() => updateStatus1(player._id, 'playing')}>Playing</button>
                                }
                                {player.status1 === 'not playing'?
                                <button style={{backgroundColor: "red"}}>Not Playing</button>:
                                <button onClick={() => updateStatus1(player._id, 'not playing')}>Not Playing</button>
                                }
                                {player.status1 === 'undecided'?
                                <button style ={{ backgroundColor: 'yellow'}}>Undecided</button>:
                                <button onClick={() => updateStatus1(player._id, 'undecided')}>Undecided</button>
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Status1