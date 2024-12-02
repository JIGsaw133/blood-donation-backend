const eventModel = require('../models/eventModel');

// Get all events
const getEvents = async (req, res) => {
    try {
        const events = await eventModel.getAllEvents();
        res.status(200).json(events);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving events' });
    }
};

// Get a specific event by ID
const getEvent = async (req, res) => {
    try {
        const event = await eventModel.getEventById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving event' });
    }
};

// Add a new event
const addEvent = async (req, res) => {
    try {
        const eventId = await eventModel.addEvent(req.body);
        res.status(201).json({ message: 'Event added', eventId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding event' });
    }
};

// Update an event
const updateEvent = async (req, res) => {
    try {
        await eventModel.updateEvent(req.params.id, req.body);
        res.status(200).json({ message: 'Event updated' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating event' });
    }
};

// Delete an event
const deleteEvent = async (req, res) => {
    try {
        await eventModel.deleteEvent(req.params.id);
        res.status(200).json({ message: 'Event deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting event' });
    }
};

module.exports = { getEvents, getEvent, addEvent, updateEvent, deleteEvent };
