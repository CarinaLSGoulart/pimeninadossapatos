const path = require('path')

const promocoesController = {
    promocoes: (req, res) => {
        res.render('promocoes')
    }
}

module.exports = promocoesController;