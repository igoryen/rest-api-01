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
router.get('/:id', getSubscriber, (req, res) => {
    res.json(res.subscriber);
});

// a route for creating one
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel,
    })
    try {
        const newSubscriber = await subscriber.save();
        res.status(201).json(newSubscriber);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// a route for updating one
router.patch('/:id', getSubscriber, (req, res) => {

});

// a route for deleting one
router.delete('/:id', getSubscriber, (req, res) => {

});

// middle-ware to make code DRY
async function getSubscriber(req, res, next) {
    let subscriber;
    try {
        subscriber = await Subscriber.findById(req.params.id);
        if(subscriber == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.subscriber = subscriber;
    next();
}

module.exports = router;