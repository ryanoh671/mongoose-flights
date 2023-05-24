const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// Post /flights/:id/arrivals (create arrival for a flight)
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;