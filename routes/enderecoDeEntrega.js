let express = require('express')
let router = express.Router();

const enderecodeentregaController = require('../controllers/enderecoDeEntrega')

router.get('/', enderecodeentregaController.enderecodeentrega)

module.exports = router;