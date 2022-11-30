const db = require('../database/models');
const Perfil = db.Perfil;

const perfilController = {
    list: (req, res) => {
        Perfil.findAll()
        .then(perfil => {
            res.status(200).json(perfil)
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }
}

module.exports = perfilController;