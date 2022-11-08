const path = require('path')

const homeController = {
    home: (req, res) => {
        res.render('home')
    }
}

module.exports = homeController;         