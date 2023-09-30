const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');


app.use(express.json());
app.use(cors());

app.use('/auth',authRoutes);



module.exports = app