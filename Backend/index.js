require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const  book  = require('./models/Book'); 
const b = require('./routes/booksRoute')
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.static('../frontend'));
app.get("*",(req,res)=>{
    res.sendFile("../frontend/index.html")
}
app.use('/books',b);
app.listen(PORT);

mongoose.connect('mongodb://database:27017/Books')
    .then(() => {
        console.log("Connected Successfully");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err.message);
        process.exit(1);
    });
