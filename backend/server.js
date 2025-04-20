// In your server.js (or app.js)
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

 app.use(cors({
  origin: 'http://localhost:5173',  
  credentials: true
}));
app.use(express.json());

// Routes
const WaitlistRoutes = require('./routes/WaitlistRoutes');
app.use('/api/waitlist', WaitlistRoutes);

 app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 10s
  socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
})
.then(() => console.log('MongoDB Connected'))
.catch(err => {
  console.error('MongoDB Connection Error:', err);
  process.exit(1); // Exit process on connection failure
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});