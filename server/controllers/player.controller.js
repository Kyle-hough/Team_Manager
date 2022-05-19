const { Player } = require("./../models/player.model")

//get all 
module.exports.allPlayers = (req, res) => {
    Player.find()
        .then(players => res.json(players))
        .catch(err => res.status(400).json(err))
}

//create a new player
module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(newPlayer => res.json(newPlayer))
        .catch(err => res.status(400).json(err))
}

//get one player
module.exports.onePlayer = (req, res) => {
    Player.findOne({ _id: req.params.id })
        .then(player => res.json(player))
        .catch(err => res.status(400).json(err))
}

//update one player
module.exports.updatePlayer = (req, res) =>{
    Player.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {new:true, runValidators:true}
    )
        .then(updatedPlayer=>res.json(updatedPlayer))
        .catch(err=>res.status(400).json(err))
    }

//delete
module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
}