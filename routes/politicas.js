let express = require('express')
let router = express.Router();

const politicasController = require('../controllers/politicas')

router.get('/',politicasController.politicas)

module.exports = router;