const express = require('express');
const {
    getEvents,
    getEvent,
    addEvent,
    updateEvent,
    deleteEvent,
} = require('../controllers/eventController');
const router = express.Router();

router.get('/', getEvents);          // Get all events
router.get('/:id', getEvent);        // Get a specific event by ID
router.post('/', addEvent);          // Add a new event
router.put('/:id', updateEvent);     // Update an event
router.delete('/:id', deleteEvent);  // Delete an event

module.exports = router;
