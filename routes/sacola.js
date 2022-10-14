let express = require('express')
let router = express.Router();

const sacolaController = require('../controllers/sacola')

router.get('/', sacolaController.sacola)

module.exports = router;