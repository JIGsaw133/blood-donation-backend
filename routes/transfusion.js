const express = require('express');
const { getTransfusions, addTransfusion } = require('../controllers/transfusionController');
const router = express.Router();

router.get('/', getTransfusions);
router.post('/', addTransfusion);

module.exports = router;
