const pool = require('./db');

// Fetch all healthcare requests
const getAllRequests = async () => {
    const [rows] = await pool.query('SELECT * FROM Healthcare_Request');
    return rows;
};

// Fetch a single request by ID
const getRequestById = async (requestId) => {
    const [rows] = await pool.query('SELECT * FROM Healthcare_Request WHERE Request_ID = ?', [requestId]);
    return rows[0];
};

// Add a new healthcare request
const addRequest = async (request) => {
    const { Blood_Type, Quantity, Requester_Name, Requester_Contact, Urgency_Level, Status } = request;
    const [result] = await pool.query(
        `INSERT INTO Healthcare_Request (Blood_Type, Quantity, Requester_Name, Requester_Contact, Urgency_Level, Status) 
         VALUES (?, ?, ?, ?, ?, ?)`,
        [Blood_Type, Quantity, Requester_Name, Requester_Contact, Urgency_Level, Status]
    );
    return result.insertId;
};

// Update a healthcare request
const updateRequest = async (requestId, request) => {
    const { Blood_Type, Quantity, Requester_Name, Requester_Contact, Urgency_Level, Status } = request;
    await pool.query(
        `UPDATE Healthcare_Request SET Blood_Type = ?, Quantity = ?, Requester_Name = ?, Requester_Contact = ?, Urgency_Level = ?, Status = ?
         WHERE Request_ID = ?`,
        [Blood_Type, Quantity, Requester_Name, Requester_Contact, Urgency_Level, Status, requestId]
    );
};

// Delete a healthcare request
const deleteRequest = async (requestId) => {
    await pool.query('DELETE FROM Healthcare_Request WHERE Request_ID = ?', [requestId]);
};

module.exports = { getAllRequests, getRequestById, addRequest, updateRequest, deleteRequest };
