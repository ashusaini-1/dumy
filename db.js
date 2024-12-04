const mongoose = require('mongoose');
const env = require('dotenv')

env.config();

const DB_URI = 'mongodb+srv://ashusaini17354:xe87u0rkugDd0icf@cluster0.gvncl.mongodb.net/';


const connectDatabase = () => {
    mongoose.connect(DB_URI).then(console.log('MongoDB Connected to server')).catch((err) => {
        console.log("Error in mongoDB connection : " + err)
    });
};

module.exports = connectDatabase;