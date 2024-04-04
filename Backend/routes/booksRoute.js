const express = require('express');
const books = require('../controllers/books');
const router = express.Router();

router.get('/',books.getAllBooks);
router.get('/:id',books.getOneBook);
router.put('/:id',books.updateOneBook);
router.post('/add',books.addOneBook);
router.delete('/:id',books.deleteOneBook);

module.exports = router;
