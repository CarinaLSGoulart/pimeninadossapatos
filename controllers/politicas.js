const path = require('path')

const politicasController = {
    politicas: (req, res) => {
        res.render('politicas')
    }
}

module.exports = politicasController;