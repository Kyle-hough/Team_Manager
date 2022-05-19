const PlayerController = require("./../controllers/player.controller")

module.exports = (app) => {
    app.get("/api/players", PlayerController.allPlayers)
    app.post("/api/players", PlayerController.createPlayer)
    app.get("/api/players/:id", PlayerController.onePlayer)
    app.put("/api/players/:id", PlayerController.updatePlayer)
    app.delete("/api/players/:id", PlayerController.deletePlayer)
}