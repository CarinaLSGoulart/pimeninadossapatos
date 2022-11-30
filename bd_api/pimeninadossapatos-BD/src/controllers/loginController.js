const db = require('../database/models');
const Login = db.Login;

const loginController = {
    list: (req, res) => {
        Login.findAll()
        .then(login => {
            res.status(200).json(login)
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }
}

module.exports = loginController;