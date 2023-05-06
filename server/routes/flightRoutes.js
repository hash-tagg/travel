const express = require('express');
const router = express.Router();
const Flight = require('../models/Flight');

// Middleware function to get a flight by ID
async function getFlight(req, res, next) {
  try {
    const flight = await Flight.findById(req.params.id);
    if (flight == null) {
      return res.status(404).json({ message: 'Flight not found' });
    }
    res.flight = flight;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

// Get all flights
router.get('/', async (req, res) => {
  const { departureCity, arrivalCity, departureDate, returnDate } = req.query;

  const filters = {};

  if (departureCity) {
    filters.departureCity = departureCity;
  }

  if (arrivalCity) {
    filters.arrivalCity = arrivalCity;
  }

  if (departureDate) {
    filters.departureDate = departureDate;
  }

  if (returnDate) {
    filters.returnDate = returnDate;
  }

  try {
    const flights = await Flight.find(filters);
    res.json(flights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Get a single flight by ID
router.get('/:id', getFlight, (req, res) => {
  res.json(res.flight);
});

// Create a new flight
router.post('/', async (req, res) => {
  const flight = new Flight(req.body);

  try {
    const newFlight = await flight.save();
    res.status(201).json(newFlight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a flight by ID
router.patch('/:id', getFlight, async (req, res) => {
  if (req.body.flightNumber != null) {
    res.flight.flightNumber = req.body.flightNumber;
  }
  if (req.body.airline != null) {
    res.flight.airline = req.body.airline;
  }
  if (req.body.departureAirport != null) {
    res.flight.departureAirport = req.body.departureAirport;
  }
  if (req.body.departureCity != null) {
    res.flight.departureCity = req.body.departureCity;
  }
  if (req.body.departureCountry != null) {
    res.flight.departureCountry = req.body.departureCountry;
  }
  if (req.body.departureDate != null) {
    res.flight.departureDate = req.body.departureDate;
  }
  if (req.body.arrivalAirport != null) {
    res.flight.arrivalAirport = req.body.arrivalAirport;
  }
  if (req.body.arrivalCity != null) {
    res.flight.arrivalCity = req.body.arrivalCity;
  }
  if (req.body.arrivalCountry != null) {
    res.flight.arrivalCountry = req.body.arrivalCountry;
  }
  if (req.body.arrivalDate != null) {
    res.flight.arrivalDate = req.body.arrivalDate;
  }
  if (req.body.price != null) {
    res.flight.price = req.body.price;
  }

  try {
    const updatedFlight = await res.flight.save();
    res.json(updatedFlight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a flight by ID
router.delete('/:id', getFlight, async (req, res) => {
  try {
    await res.flight.remove();
    res.json({ message: 'Flight deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
