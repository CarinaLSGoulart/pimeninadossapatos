let express = require('express')
let router = express.Router();

const promocoesController = require('../controllers/promocoes')

router.get('/', promocoesController.promocoes)

module.exports = router;