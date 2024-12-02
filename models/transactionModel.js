const pool = require('./db');

const processHealthcareRequest = async (requestId, bloodType, quantity) => {
    const connection = await pool.getConnection(); // Get a database connection
    try {
        await connection.beginTransaction(); // Start the transaction

        // Check if enough blood is available in the inventory
        const [inventory] = await connection.query(
            `SELECT * FROM Blood_Inventory WHERE Blood_Type = ? AND Quantity >= ? LIMIT 1`,
            [bloodType, quantity]
        );

        if (inventory.length === 0) {
            throw new Error('Insufficient blood stock for the request');
        }

        const inventoryId = inventory[0].Blood_ID;
        const updatedQuantity = inventory[0].Quantity - quantity;

        // Deduct the required quantity from the inventory
        await connection.query(
            `UPDATE Blood_Inventory SET Quantity = ? WHERE Blood_ID = ?`,
            [updatedQuantity, inventoryId]
        );

        // Update the healthcare request status to "Fulfilled"
        await connection.query(
            `UPDATE Healthcare_Request SET Status = 'Fulfilled' WHERE Request_ID = ?`,
            [requestId]
        );

        await connection.commit(); // Commit the transaction
        return { message: 'Healthcare request processed successfully' };
    } catch (error) {
        await connection.rollback(); // Rollback the transaction on error
        throw error;
    } finally {
        connection.release(); // Release the connection
    }
};

module.exports = { processHealthcareRequest };
