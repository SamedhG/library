const express = require('express');
const router = express.Router();
const dao = require('../dao/book_dao')

router
    .get('/', async (req, res) => {
        const books = await dao.findAllBooks()
        res.json(books)
    })
    .post('/', async (req, res) => {
        const book = await dao.createBook(req.body.data)
        res.json(book)
    })
    .get('/:id', async (req, res) => {
        const book = await dao.findBookById(parseInt(req.params.id))
        if(book === null) {
            res.status(404)
        }
        res.json(book)
    })
    .patch("/:id", async (req, res) => {
        const book = await dao.findBookById(parseInt(req.params.id))
        if(book != null) {
            await dao.updateBook(parseInt(req.params.id), req.body.data)
        } else {
            res.status(401)
        }
        res.json(book) 
    })
    .delete("/:id", async (req, res) => {
        const book = await dao.findBookById(parseInt(req.params.id))
        if(book != null) {
            await dao.deleteBook(parseInt(req.params.id));
        } else {
            res.status(401)
        }
        res.json(book) 
    })

module.exports = router;


