const express = require('express');
const {
    getRequests,
    getRequest,
    addRequest,
    updateRequest,
    deleteRequest,
} = require('../controllers/healthcareRequestController');
const router = express.Router();

router.get('/', getRequests);          // Get all requests
router.get('/:id', getRequest);        // Get a specific request by ID
router.post('/', addRequest);          // Add a new request
router.put('/:id', updateRequest);     // Update a request
router.delete('/:id', deleteRequest);  // Delete a request

module.exports = router;
