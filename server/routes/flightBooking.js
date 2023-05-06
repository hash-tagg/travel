const express = require('express');
const router = express.Router();
const FlightBooking = require('../models/flightBooking');

// Get all flight bookings for a user
router.get('/', async (req, res) => {
  try {
    const { userId } = req.query;
    const bookings = await FlightBooking.find({ user: userId }).populate('flight user');
    res.json({ success: true, data: bookings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Get a single flight booking
router.get('/:id', async (req, res) => {
  try {
    const booking = await FlightBooking.findById(req.params.id).populate('flight user');
    if (!booking) {
      return res.status(404).json({ success: false, error: 'Booking not found' });
    }
    res.json({ success: true, data: booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Update a flight booking
router.put('/:id', async (req, res) => {
  try {
    const { passengers, totalPrice } = req.body;
    const booking = await FlightBooking.findByIdAndUpdate(
      req.params.id,
      { passengers, totalPrice },
      { new: true }
    ).populate('flight user');
    if (!booking) {
      return res.status(404).json({ success: false, error: 'Booking not found' });
    }
    res.json({ success: true, data: booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Delete a flight booking
router.delete('/:id', async (req, res) => {
  try {
    const booking = await FlightBooking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ success: false, error: 'Booking not found' });
    }
    res.json({ success: true, data: {} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});





module.exports = router;
