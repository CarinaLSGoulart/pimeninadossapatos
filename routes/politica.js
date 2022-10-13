let express = require('express')
let router = express.Router();

const politicaController = require('../controllers/politica')

router.get('/',politicaController.politica)

module.exports = router;