let express = require('express')
let router = express.Router();

const dadosdepagamentoController = require('../controllers/dadosdepagamento')

router.get('/', dadosdepagamentoController.dadosdepagamento)

module.exports = router;