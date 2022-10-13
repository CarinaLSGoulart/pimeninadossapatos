const path = require('path')

const pedidosController = {
    pedidos: (req, res) => {
        res.render('pedidos')
    }
}

module.exports = pedidosController;