const requestModel = require('../models/healthcareRequestModel');

// Get all healthcare requests
const getRequests = async (req, res) => {
    try {
        const requests = await requestModel.getAllRequests();
        res.status(200).json(requests);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving requests' });
    }
};

// Get a specific request by ID
const getRequest = async (req, res) => {
    try {
        const request = await requestModel.getRequestById(req.params.id);
        if (!request) {
            return res.status(404).json({ message: 'Request not found' });
        }
        res.status(200).json(request);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving request' });
    }
};

// Add a new healthcare request
const addRequest = async (req, res) => {
    try {
        const requestId = await requestModel.addRequest(req.body);
        res.status(201).json({ message: 'Request added', requestId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding request' });
    }
};

// Update a healthcare request
const updateRequest = async (req, res) => {
    try {
        await requestModel.updateRequest(req.params.id, req.body);
        res.status(200).json({ message: 'Request updated' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating request' });
    }
};

// Delete a healthcare request
const deleteRequest = async (req, res) => {
    try {
        await requestModel.deleteRequest(req.params.id);
        res.status(200).json({ message: 'Request deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting request' });
    }
};

module.exports = { getRequests, getRequest, addRequest, updateRequest, deleteRequest };
