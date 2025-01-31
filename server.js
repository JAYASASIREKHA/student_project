const express = require('express');
const connectDB = require('./configs/db');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect Database
connectDB();

// Routes
app.use('/students', require('./routes/student'));

app.listen(port, () => console.log(`Server running on port ${port}`));
