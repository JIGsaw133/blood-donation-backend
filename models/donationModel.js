const pool = require('./db');

const getAllDonations = async () => {
    const [rows] = await pool.query('SELECT * FROM Donation');
    return rows;
};

const addDonation = async (donation) => {
    const { Donor_ID, Blood_Type, Quantity, Date } = donation;
    const [result] = await pool.query(
        `INSERT INTO Donation (Donor_ID, Blood_Type, Quantity, Date) 
         VALUES (?, ?, ?, ?)`,
        [Donor_ID, Blood_Type, Quantity, Date]
    );
    return result.insertId;
};

module.exports = { getAllDonations, addDonation };
