let express = require('express')
let router = express.Router();

const femininoController = require('../controllers/feminino')

router.get('/', femininoController.feminino)

module.exports = router;