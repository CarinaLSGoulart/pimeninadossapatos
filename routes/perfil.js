let express = require('express')
let router = express.Router();

const perfilController = require('../controllers/perfil')

router.get('/',perfilController.perfil)

module.exports = router;