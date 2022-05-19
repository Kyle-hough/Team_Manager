import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const CreateForm = () => {
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        setName("")
        axios.post(`http://localhost:8000/api/players`, { name, position })
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
        <div>
            <h1>Add Player</h1>
            <Link to={`/`}>Home</Link>
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
                <button type="submit">Create a new player</button>
            </form>
            {
                errors.map((err, i) => (
                    <p key={i} style={{ color: "red" }}> {err} </p>
                ))
            }
        </div>
    )
}

export default CreateForm