const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const userRoutes = require('./userRoutes');
app.use('/users', userRoutes);

///////////////////* mongoDB connection *//////////////////

const uri = process.env.DATABASE_URI;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  }
  catch(error){
    console.error(error);
  }
}  

connect();

////////////////////////////* *///////////////////////////

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
