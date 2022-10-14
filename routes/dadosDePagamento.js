let express = require('express')
let router = express.Router();

const dadosdepagamentoController = require('../controllers/dadosDePagamento')

router.get('/', dadosdepagamentoController.dadosDePagamento)

module.exports = router;