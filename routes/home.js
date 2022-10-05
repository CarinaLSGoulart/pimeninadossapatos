let express = require('express')
let router = express.Router();

const homeController = require('../controllers/home')

router.get('/',homeController.index)

module.exports = router;