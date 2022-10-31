const path = require('path')

const productController = {
    product: (req, res) => {
        res.render('product')
    }
}

module.exports = productController;