let express = require('express')
let router = express.Router();
const {check} = require('express-validator')

const usuarioController = require('../controllers/usuarioControlller')

router.get('/',usuarioController.login)
router.get('/perfil',usuarioController.perfil)
router.post('/', check('email').isEmpty().withMessage('Email não pode ser vazio'),
                        check('password').isEmpty().withMessage('Senha não pode ser vazia'),
    usuarioController.logar)

module.exports = router;