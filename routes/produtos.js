let express = require('express')
let router = express.Router();

const produtosController = require('../controllers/produtos')

router.get('/', produtosController.produtos)

module.exports = router;