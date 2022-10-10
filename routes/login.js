let express = require('express')
let router = express.Router();

const loginController = require('../controllers/login')

router.get('/',loginController.login)

module.exports = router;