const express = require('express');
const { getInventory, addInventory } = require('../controllers/inventoryController');
const router = express.Router();

router.get('/', getInventory);
router.post('/', addInventory);

module.exports = router;
