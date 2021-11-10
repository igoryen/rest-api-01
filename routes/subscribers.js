const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');


// a route for getting all
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    } catch (err) {
        res.status(500).json({ message:err.message });
    }
});

// a route for getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id);
});

// a route for creating one
router.post('/', (req, res) => {

});

// a route for updating one
router.patch('/:id', (req, res) => {

});

// a route for deleting one
router.delete('/:id', (req, res) => {

});

module.exports = router;