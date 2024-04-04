const book = require('../models/Book');
const mongoose = require('mongoose');
module.exports = {
    getAllBooks : async(req,res) => {
        const books = await book.find();
        res.json({Books : books});
    },
    getOneBook : async(req,res) =>{
        const bookId = req.params.id;
   try{
    const FetchedBook = await book.findById(bookId);
    if(!FetchedBook) res.status(401).send("No book found!")
    res.json({Book_Details : FetchedBook});
   } catch(error){
    res.status(500).json({error : "Internal server error !"});
   }
    },
    updateOneBook : async(req,res) => {
        const bookId = req.params.id;
    if(!req.body.title || !req.body.publishYear || !req.body.author) res.status(401).send("No book found !");
    const FetchedBook = {title : req.body.title,author : req.body.author,publishYear : req.body.publishYear}
    try{
        await book.findByIdAndUpdate(bookId,FetchedBook);
    }
    catch(err){
        res.send(err);
    }
    },
    addOneBook : async(req,res) =>{
        const title = req.body.title;   
        const author = req.body.author;
        const pub = req.body.publishYear;
    
        try {
            const newBook = new book({ title, author, publishYear: pub });
            await newBook.save(); 
            res.json({ Book: newBook });
        } catch (error) {
            console.error("Error saving book to the database:", error.message);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    deleteOneBook : async(req,res) => {
        const bookId = req.params.id;
        try {
            const FetchedBook = await book.findByIdAndDelete(bookId);
            res.json({ Deleted_Book: FetchedBook });
        } catch (error) {
            console.error("Error deleting book from the database:", error.message);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}