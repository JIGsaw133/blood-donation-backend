const transactionModel = require('../models/transactionModel');

const fulfillRequest = async (req, res) => {
    const { requestId, bloodType, quantity } = req.body;

    try {
        const result = await transactionModel.processHealthcareRequest(requestId, bloodType, quantity);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
};

module.exports = { fulfillRequest };
