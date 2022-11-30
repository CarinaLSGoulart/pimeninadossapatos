const db = require('../database/models');
const Endereco = db.Endereco;

const enderecoController = {
    list: (req, res) => {
        Endereco.findAll()
        .then(enderecos => {
            res.status(200).json(enderecos)
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }
}

module.exports = enderecoController;