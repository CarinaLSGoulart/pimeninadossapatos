const path = require('path')

const produtosController = {
    produtos: (req, res) => {
        res.render('produtos')
    }
}

module.exports = produtosController;