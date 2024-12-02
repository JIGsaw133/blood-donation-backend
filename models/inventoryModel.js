const pool = require('./db');

// Fetch all blood inventory records
const getAllInventory = async () => {
    const [rows] = await pool.query('SELECT * FROM Blood_Inventory');
    return rows;
};

// Add a new blood inventory record
const addInventory = async (inventory) => {
    const { Blood_Type, Quantity, Storage_Location, Expiry_Date, Donor_ID } = inventory;
    const [result] = await pool.query(
        `INSERT INTO Blood_Inventory (Blood_Type, Quantity, Storage_Location, Expiry_Date, Donor_ID) 
         VALUES (?, ?, ?, ?, ?)`,
        [Blood_Type, Quantity, Storage_Location, Expiry_Date, Donor_ID]
    );
    return result.insertId;
};

module.exports = { getAllInventory, addInventory };
