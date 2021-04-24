const express = require('express');
const router = express.Router();
const dao = require('../dao/author_dao')

router
    .get('/', async (req, res) => {
        const authors = await dao.findAllAuthors()
        res.json(authors)
    })
    .post('/', async (req, res) => {
        const author = await dao.createAuthor(req.body.data)
        res.json(author)
    })
    .get('/:id', async (req, res) => {
        const author = await dao.findAuthorById(parseInt(req.params.id))
        if(author === null) {
            res.status(404)
        }
        res.json(author)
    })
    .patch("/:id", async (req, res) => {
        const author = await dao.findAuthorById(parseInt(req.params.id))
        if(author != null) {
            await dao.updateAuthor(parseInt(req.params.id), req.body.data)
        } else {
            res.status(401)
        }
        res.json(author) 
    })
    .delete("/:id", async (req, res) => {
        const author = await dao.findAuthorById(parseInt(req.params.id))
        if(author != null) {
            await dao.deleteAuthor(parseInt(req.params.id));
        } else {
            res.status(401)
        }
        res.json(author) 
    })

module.exports = router;


