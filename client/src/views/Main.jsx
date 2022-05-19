import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Main = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/players`)
            .then(response => {
                setPlayers(response.data)
                console.log(response.data)
            })
            .catch(err => console.log(err))
    })

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/players/${deleteId}`)
            .then(response => {
                const filteredList = players.filter((player, i) => player._id !== deleteId)
                setPlayers(filteredList)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>List</h1>
            <Link to="/players/create">Create a player</Link>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Perferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player, i) => (
                            <tr key={i}>
                                <td><Link to={`/players/${player._id}/edit`}>{player.name}</Link></td>
                                <td>{player.position}</td>
                                <td><button onClick={() => handleDelete(player._id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main