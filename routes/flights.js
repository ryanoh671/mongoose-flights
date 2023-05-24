var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flight');

// GET 
router.get('/', flightsCtrl.index);

router.get('/new', flightsCtrl.new);

router.post('/', flightsCtrl.create);

// GET /flights/:id
router.get('/:id', flightsCtrl.show);





module.exports = router;
