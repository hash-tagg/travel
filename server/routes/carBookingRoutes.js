const express = require('express');
const router = express.Router();
const CarBooking = require('../models/carsBooking');
// Get all car bookings
router.get('/', async (req, res) => {
    try {
      const carBookings = await CarBooking.find();
      res.json(carBookings);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Get a specific car booking by ID
  router.get('/:id', async (req, res) => {
    try {
      const carBooking = await CarBooking.findById(req.params.id);
      if (!carBooking) return res.status(404).json({ message: 'Car booking not found' });
      res.json(carBooking);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Add a new car booking
  router.post('/', async (req, res) => {
    const carBooking = new CarBooking(req.body);
    // console.log(req.body);
    // console.log(carBooking);
    // console.log(hello);
  
    try {
      const newCarBooking = await carBooking.save();
      res.status(201).json(newCarBooking);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
  });
  
  // Update a car booking by ID
  router.put('/:id', async (req, res) => {
    try {
      const carBooking = await CarBooking.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!carBooking) return res.status(404).json({ message: 'Car booking not found' });
      res.json(carBooking);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Delete a car booking by ID
  router.delete('/:id', async (req, res) => {
    try {
      const carBooking = await CarBooking.findByIdAndDelete(req.params.id);
      if (!carBooking) return res.status(404).json({ message: 'Car booking not found' });
      res.json({ message: 'Car booking deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  module.exports = router;
  