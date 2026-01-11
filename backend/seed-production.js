// SEED PRODUCTION DATABASE
// Run this to add sample data to your deployed MongoDB Atlas database

require('dotenv').config();
const mongoose = require('mongoose');

// Your MongoDB Atlas connection string
const MONGO_URI = 'mongodb+srv://easylearn_admin:66NIa13WOnq7kxWo@cluster0.6ajngsv.mongodb.net/peer-learning?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB Atlas
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB Atlas!');
        console.log('🌱 Now running seed.js...\n');

        // Run the seed script
        require('./seed.js');
    })
    .catch(err => {
        console.error('❌ MongoDB connection error:', err);
        process.exit(1);
    });
