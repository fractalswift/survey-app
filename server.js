const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to DB:
connectDB();

app.get('/', (req, res) => res.send('API running'));

// Middleware

app.use(express.json({ extended: false }));

// Routes

app.use('/api/surveys', require('./routes/api/surveys'));

PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
