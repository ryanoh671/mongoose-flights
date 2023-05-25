const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// All mounted to root

router.get('/flights/:id/tickets/new', ticketsCtrl.new);


router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;