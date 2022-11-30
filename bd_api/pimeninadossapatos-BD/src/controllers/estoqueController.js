const db = require('../database/models');
const Estoque = db.Estoque;

const estoqueController = {
    list: (req, res) => {
        Estoque.findAll()
        .then(estoques => {
            res.status(200).json(estoques)
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }
}

module.exports = estoqueController;