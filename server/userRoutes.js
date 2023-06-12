const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

////////// Define user schema ////////

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  password: String,
  favoriteList: [{
    adult: Boolean,
    backdrop_path: String,
    belongs_to_collection: {
      id: Number,
      name: String,
      poster_path: String,
      backdrop_path: String,
},
    budget: Number,
    credits: {
      id: Number,
      cast: Array,
      crew: Array,
    },
    genres: [{
      id: Number,
      name: String,
    }],
    homepage: String,
    id: Number,
    imdb_id: String,
    original_language: String,
    original_title: String,
    overview: String,
    popularity: Number,
    poster_path: String,
    production_companies: [{
      id: Number,
      name: String,
    }],
    production_countries: [{
      iso_3166_1: String,
      name: String,
    }],
    release_date: Date,
    revenue: Number,
    runtime: Number,
    spoken_languages: [{
      iso_639_1: String,
      name: String,
    }],
    status: String,
    tagline: String,
    title: String,
    video: Boolean,
    videos: {
      results: Array,
    },
    vote_average: Number,
    vote_count: Number,
  }],
});


// Create user model
const User = mongoose.model('User', userSchema);


// Get Request - Check if user exists in the database
router.get('/auth', async (req, res) => {
    const { email, password } = req.query;
  
    try {
      const user = await User.findOne({ email });
  
      if (user) {
        if (user.password === password) {
          res.json({ success: true, message: 'Authentication successful' });
        } else {
          res.json({ success: false, message: 'Incorrect password for the account with that email address. Please try again' });
        }
      } else {
        res.json({ success: false, message: "Sorry, we can't find an account with this email address. Please try again or create a new account" });
      }
    } catch (error) {
      console.error('Error authenticating user:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
  
  // POST Request - Add User to database
  router.post('/', async (req, res) => {
    const { name, phone, email, password } = req.body;
  
    try {
      const userExist = await User.findOne({ email });
  
      if (userExist) {
        res.json({ success: false, message: 'User already exists' });
        return;
      }
  
      const newUser = new User({
        name,
        phone,
        email,
        password,
        favoriteList: [],
      });
  
      await newUser.save();
      res.json({ success: true, message: 'User created successfully' });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
  
  // Add or Remove Movie from user's favorites
  router.post('/favorites', async (req, res) => {
    const { email, movie, action } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (user) {
        const movieIndex = user.favoriteList.findIndex((favoriteMovie) => favoriteMovie.id === movie.id);
        if (action === 'add') {
          if (movieIndex === -1) {
            user.favoriteList.push(movie);
            await user.save();
            res.json({ success: true, message: 'Movie added to favorites successfully' });
          } else {
            res.json({ success: false, message: 'Movie already exists in favorites' });
          }
        } else if (action === 'remove') {
          if (movieIndex !== -1) {
            user.favoriteList.splice(movieIndex, 1);
            await user.save();
            res.json({ success: true, message: 'Movie removed from favorites successfully' });
          } else {
            res.json({ success: false, message: 'Movie not found in favorites' });
          }
        } else {
          res.status(400).json({ success: false, message: 'Invalid action' });
        }
      } else {
        res.status(404).json({ success: false, message: 'User not found' });
      }
    } catch (error) {
      console.error('Error updating user favorites:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
  
  // GET Request - get all favorite movies of specific user
  router.get('/favorites', async (req, res) => {
    const { email } = req.query;
  
    try {
      const user = await User.findOne({ email }).populate('favoriteList');
      
      if (user) {
        res.json({ success: true, favorites: user.favoriteList });
      } else {
        res.status(404).json({ success: false, message: 'User not found' });
      }
    } catch (error) {
      console.error('Error retrieving user favorites:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });

  module.exports = router;