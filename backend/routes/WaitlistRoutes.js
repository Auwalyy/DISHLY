const express = require('express');
const router = express.Router();
const waitlistController = require('../controllers/WaitlistController');

// POST /api/waitlist - Add email to waitlist
router.post('/', waitlistController.addToWaitlist);

module.exports = router;