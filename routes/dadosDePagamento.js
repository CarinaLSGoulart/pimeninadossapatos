let express = require('express')
let router = express.Router();

const dadosdepagamentoController = require('../controllers/dadosDePagamentoController')

router.get('/', dadosdepagamentoController.dadosDePagamento)

module.exports = router;