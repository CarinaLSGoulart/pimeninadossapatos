let express = require('express')
let router = express.Router();

const sacolaController = require('../controllers/sacolaController')

router.get('/', sacolaController.sacola)

module.exports = router;