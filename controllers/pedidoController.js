const path = require('path')

const pedidoController = {
    pedido: (req, res) => {
        res.render('pedido')
    }
}

module.exports = pedidoController;