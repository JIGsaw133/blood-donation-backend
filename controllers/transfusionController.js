const transfusionModel = require('../models/transfusionModel');

const getTransfusions = async (req, res) => {
    try {
        const transfusions = await transfusionModel.getAllTransfusions();
        res.status(200).json(transfusions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving transfusions' });
    }
};

const addTransfusion = async (req, res) => {
    try {
        const transfusionId = await transfusionModel.addTransfusion(req.body);
        res.status(201).json({ message: 'Transfusion added', transfusionId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding transfusion' });
    }
};

module.exports = { getTransfusions, addTransfusion };
