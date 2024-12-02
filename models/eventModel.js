const pool = require('./db');

// Fetch all events
const getAllEvents = async () => {
    const [rows] = await pool.query('SELECT * FROM Event');
    return rows;
};

// Fetch a single event by ID
const getEventById = async (eventId) => {
    const [rows] = await pool.query('SELECT * FROM Event WHERE Event_ID = ?', [eventId]);
    return rows[0];
};

// Add a new event
const addEvent = async (event) => {
    const { Event_Name, Date, Location, Organizer, Participant_Count } = event;
    const [result] = await pool.query(
        `INSERT INTO Event (Event_Name, Date, Location, Organizer, Participant_Count) 
         VALUES (?, ?, ?, ?, ?)`,
        [Event_Name, Date, Location, Organizer, Participant_Count]
    );
    return result.insertId;
};

// Update an event
const updateEvent = async (eventId, event) => {
    const { Event_Name, Date, Location, Organizer, Participant_Count } = event;
    await pool.query(
        `UPDATE Event SET Event_Name = ?, Date = ?, Location = ?, Organizer = ?, Participant_Count = ?
         WHERE Event_ID = ?`,
        [Event_Name, Date, Location, Organizer, Participant_Count, eventId]
    );
};

// Delete an event
const deleteEvent = async (eventId) => {
    await pool.query('DELETE FROM Event WHERE Event_ID = ?', [eventId]);
};

module.exports = { getAllEvents, getEventById, addEvent, updateEvent, deleteEvent };
