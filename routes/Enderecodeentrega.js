let express = require('express')
let router = express.Router();

const EnderecodeentregaController = require('../controllers/Enderecodeentrega')

router.get('/', EnderecodeentregaController.Enderecodeentrega)

module.exports = router;