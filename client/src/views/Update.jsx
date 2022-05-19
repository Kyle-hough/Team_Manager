import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const Update = () => {
    const [name, setName] = useState()
    const [position, setPosition] = useState()
    const navigate = useNavigate()
    const { id } = useParams()
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/players/${id}`)
            .then(response => {
                const player = response.data
                console.log(player)
                setName(player.name)
                setPosition(player.position)
            })
            .catch(err => console.log(err))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/players/${id}`, { name, position })
            .then(response => navigate('/'))
            .catch(err => {
                const errArr = []
                const errResData = err.response.data.errors
                console.log(errResData)
                for (const key in errResData) {
                    errArr.push(errResData[key]["message"])
                }
                setErrors(errArr)
            })
    }

    return (
        <div><h1>Edit Player</h1>
            <Link to="/">Home</Link>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={name}
                        onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label>Perferred Position</label>
                    <input type="text" name="position" value={position}
                        onChange={e => setPosition(e.target.value)} />
                </div>
                <button type="submit">Update a player</button>
            </form>
            {
                errors.map((err, i) => (
                    <p key={i} style={{ color: "red" }}> {err} </p>
                ))
            }
        </div>
    )
}

export default Update