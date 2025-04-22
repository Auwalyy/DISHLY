const Waitlist = require('../models/Waitlist');

exports.addToWaitlist = async (req, res) => {
  try {
    const { email } = req.body;

     if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Check for existing email
    const existing = await Waitlist.findOne({ email });
    if (existing) {
      return res.status(200).json({ 
        status: 'exists',
        message: 'You\'re already on our waitlist!' 
      });
    }

    // Create new entry
    await Waitlist.create({ email });

    res.status(201).json({ 
      status: 'success',
      message: 'Thanks for joining our waitlist!' 
    });
    
  } catch (err) {
    console.error('Error adding to waitlist:', err);
    res.status(500).json({ 
      status: 'error',
      message: 'Something went wrong. Please try again.' 
    });
  }
};