const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const articlesRoutes = require('./routes/articlesRoutes');
const userRoutes = require('./routes/userRoutes');
const queriesRoutes = require('./routes/queriesRoutes');

const utilityRoutes=require('./routes/utilityRoutes')

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

app.use('/auth',authRoutes);
app.use('/articles',articlesRoutes);
app.use('/user',userRoutes)
app.use('/queries',queriesRoutes);

app.use('/utility',utilityRoutes)


module.exports = app