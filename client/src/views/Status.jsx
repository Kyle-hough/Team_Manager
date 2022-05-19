import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

const Status = () => {
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

    const updateStatus = (id, status,) => {
        axios.put(`http://localhost:8000/api/players/${id}`, { status })
            .then(response => {
                setRefresh(!refresh)
            })

            .catch(err => console.log(err))
    }



    return (
        <div>
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
                                {player.status === 'playing'?
                                    <button style={{ backgroundColor: "green"}}>Playing</button>:
                                    <button onClick={() => updateStatus(player._id, 'playing')}>Playing</button>
                                }
                                {player.status === 'not playing'?
                                <button style={{backgroundColor: "red"}}>Not Playing</button>:
                                <button onClick={() => updateStatus(player._id, 'not playing')}>Not Playing</button>
                                }
                                {player.status === 'undecided'?
                                <button style ={{ backgroundColor: 'yellow'}}>Undecided</button>:
                                <button onClick={() => updateStatus(player._id, 'undecided')}>Undecided</button>
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Status