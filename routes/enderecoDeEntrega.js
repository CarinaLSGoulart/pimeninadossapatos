let express = require('express')
let router = express.Router();

const enderecodeentregaController = require('../controllers/enderecoDeEntregaController')

router.get('/', enderecodeentregaController.enderecodeentrega)

module.exports = router;