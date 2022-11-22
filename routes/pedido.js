let express = require('express')
let router = express.Router();

const pedidoController = require('../controllers/pedidoController')

router.get('/', pedidoController.pedido)

module.exports = router;