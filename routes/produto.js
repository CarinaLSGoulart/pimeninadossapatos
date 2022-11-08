let express = require('express')
let router = express.Router();

const produtoController = require('../controllers/produtoController')

router.get('/', produtoController.produto)
router.get('/feminino', produtoController.feminino)

module.exports = router;