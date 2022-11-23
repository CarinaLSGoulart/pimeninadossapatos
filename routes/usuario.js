let express = require('express')
let router = express.Router();
const {check} = require('express-validator')

const usuarioController = require('../controllers/usuarioController')
const validacoes = [
    check('email')
    .isEmpty().withMessage('Email não pode ser vazio').bail()
    .isEmail().withMessage('Deve informar um email válido!').bail(),
    check('password')
    .isEmpty().withMessage('Senha não pode ser vazia').bail()
    .isStrongPassword().withMessage('Deve ser uma senha forte.').bail(),
    check('confpassword')
    .isEmpty().withMessage('Confirmação de senha não pode estar vazia').bail()
    .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('A senha deve ser igual.')
        }
        return true;}),    
]

router.get('/', usuarioController.login)
router.get('/perfil', usuarioController.perfil)
router.get('/cadastro', usuarioController.cadastro)
router.post('/login', validacoes, usuarioController.logar)

module.exports = router;