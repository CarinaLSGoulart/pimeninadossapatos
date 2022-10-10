let express = require('express')
let router = express.Router();

const pedidoController = require('../controllers/pedidos')

router.get('/',pedidoController.pedidos)

module.exports = router;