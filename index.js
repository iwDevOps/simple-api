// simple-api/index.js
// A very basic Node.js Express server

const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 3000;

// Use CORS to allow requests from the frontend
app.use(cors());

// A simple data source
const data = {
  message: "Hello from the simple API!",
  timestamp: new Date().toISOString(),
  project: "Git Best Practices Demo"
};

// API endpoint to get the data
app.get('/api/data', (req, res) => {
  console.log('Request received for /api/data');
  res.json(data);
});

// A simple root endpoint
app.get('/', (req, res) => {
    res.send('API is running. Visit /api/data to get some data.');
});


app.listen(port, () => {
  console.log(`Simple API listening at http://localhost:${port}`);
});
