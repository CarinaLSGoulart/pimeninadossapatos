let express = require('express')
let router = express.Router();

const usuarioController = require('../controllers/usuarioController')

router.get('/cadastro', usuarioController.cadastro)

module.exports = router;