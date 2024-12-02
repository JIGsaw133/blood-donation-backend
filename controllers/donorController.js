const donorModel = require('../models/donorModel');

// Get all donors
const getDonors = async (req, res) => {
    try {
        const donors = await donorModel.getAllDonors();
        res.status(200).json(donors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving donors' });
    }
};

// Add a new donor
const addDonor = async (req, res) => {
    try {
        const donorId = await donorModel.addDonor(req.body);
        res.status(201).json({ message: 'Donor added', donorId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding donor' });
    }
};

module.exports = { getDonors, addDonor };
