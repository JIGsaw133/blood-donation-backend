const donationModel = require('../models/donationModel');

const getDonations = async (req, res) => {
    try {
        const donations = await donationModel.getAllDonations();
        res.status(200).json(donations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving donations' });
    }
};

const addDonation = async (req, res) => {
    try {
        const donationId = await donationModel.addDonation(req.body);
        res.status(201).json({ message: 'Donation added', donationId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding donation' });
    }
};

module.exports = { getDonations, addDonation };
