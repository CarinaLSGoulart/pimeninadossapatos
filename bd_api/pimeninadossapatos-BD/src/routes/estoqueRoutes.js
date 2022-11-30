const express = require('express');
const router = express.Router();

const estoqueController = require('../controllers/estoqueController')

router.get('/', estoqueController.list)

module.exports = router;