const express = require('express');
const AreaClienteController = require('../controllers/AreaClienteController');

const router = express.Router();

router.get('/areacliente', AreaClienteController.showAreaClientePage);


module.exports = router;