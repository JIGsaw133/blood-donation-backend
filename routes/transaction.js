const express = require('express');
const { fulfillRequest } = require('../controllers/transactionController');
const router = express.Router();

router.post('/fulfill-request', fulfillRequest);

module.exports = router;
