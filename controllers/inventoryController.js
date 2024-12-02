const inventoryModel = require('../models/inventoryModel');

// Get all blood inventory
const getInventory = async (req, res) => {
    try {
        const inventory = await inventoryModel.getAllInventory();
        res.status(200).json(inventory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving inventory' });
    }
};

// Add new blood inventory
const addInventory = async (req, res) => {
    try {
        const inventoryId = await inventoryModel.addInventory(req.body);
        res.status(201).json({ message: 'Inventory added', inventoryId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding inventory' });
    }
};

module.exports = { getInventory, addInventory };
