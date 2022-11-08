const path = require('path')
const {validationResult} = require('express-validator')
const fs = require('fs')

const usersFilePath = path.join(__dirname, '../database/usuarios.json')
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))

const usuarioController = {
    login: (req, res) => {
        res.render('login')
    },
    perfil: (req, res) => {
        res.render('perfil')
    },
    cadastro: (req,res) => {
        res.render('cadastro')
    },
    logar: (req, res) => {
        let errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.render('login', {errors: errors.errors})
        }

        let user = users.find(usr => usr.email == req.body.email)        
        if (user){
            req.session.userLogged = user.email;
            res.redirect('/')
        }
    }

}

module.exports = usuarioController;     