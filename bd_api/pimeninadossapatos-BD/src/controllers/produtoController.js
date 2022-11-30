const db = require('../database/models');
const Produto = db.Produto;

const produtoController = {
    list: (req, res) => {
        Produto.findAll()
        .then(produtos => {
            res.status(200).json(produtos)
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }
}

module.exports = produtoController;