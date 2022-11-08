let express = require('express')
let router = express.Router();

const politicasController = require('../controllers/politicasController')

router.get('/',politicasController.politicas)

module.exports = router;