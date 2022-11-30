const db = require('../database/models');
const Pedido = db.Pedido;

const pedidoController = {
    list: (req, res) => {
        Pedido.findAll()
        .then(pedidos => {
            res.status(200).json(pedidos)
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }
}

module.exports = pedidoController;