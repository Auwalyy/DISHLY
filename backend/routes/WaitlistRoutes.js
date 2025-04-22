const express = require('express');
const router = express.Router();
const waitlistController = require('../controllers/WaitlistController');

router.post('/', waitlistController.addToWaitlist);

module.exports = router;