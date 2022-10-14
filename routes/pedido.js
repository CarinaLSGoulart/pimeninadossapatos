let express = require('express')
let router = express.Router();

const pedidoController = require('../controllers/pedido')

router.get('/',pedidoController.pedido)

module.exports = router;