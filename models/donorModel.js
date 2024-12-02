const pool = require('./db');

// Fetch all donors
const getAllDonors = async () => {
    const [rows] = await pool.query('SELECT * FROM Donor');
    return rows;
};

// Add a new donor
const addDonor = async (donor) => {
    const { Name, Age, Gender, Blood_Type, Contact_Info, Last_Donation_Date, Medical_History, Eligibility_Status } = donor;
    const [result] = await pool.query(
        `INSERT INTO Donor (Name, Age, Gender, Blood_Type, Contact_Info, Last_Donation_Date, Medical_History, Eligibility_Status) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [Name, Age, Gender, Blood_Type, Contact_Info, Last_Donation_Date, Medical_History, Eligibility_Status]
    );
    return result.insertId;
};

module.exports = { getAllDonors, addDonor };
