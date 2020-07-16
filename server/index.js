const express = require('express');
const connectDB = require('../database/db');
const path = require('path');

const app = express();

// Connect database
connectDB();

// init Midlleware
app.use(express.json({ extended: false }));

// app.get('/api', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('../routes/api/users'));
app.use('/api/auth', require('../routes/api/auth'));
app.use('/api/courses', require('../routes/api/courses'));

// Serve static assests in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
