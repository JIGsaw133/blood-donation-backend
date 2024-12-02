const pool = require('./db');

const getAllTransfusions = async () => {
    const [rows] = await pool.query('SELECT * FROM Transfusion');
    return rows;
};

const addTransfusion = async (transfusion) => {
    const { Blood_ID, Recipient_Name, Recipient_Contact, Date, Quantity } = transfusion;
    const [result] = await pool.query(
        `INSERT INTO Transfusion (Blood_ID, Recipient_Name, Recipient_Contact, Date, Quantity) 
         VALUES (?, ?, ?, ?, ?)`,
        [Blood_ID, Recipient_Name, Recipient_Contact, Date, Quantity]
    );
    return result.insertId;
};

module.exports = { getAllTransfusions, addTransfusion };
