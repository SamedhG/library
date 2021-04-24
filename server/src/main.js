const { PrismaClient } = require('@prisma/client')
const express = require('express')

const prisma = new PrismaClient()
const app = express()

const memberController = require('./controllers/member_controller');
const authorController = require('./controllers/author_controller');
const bookController = require('./controllers/book_controller');

app.use(express.json())
app.use('/member', memberController)
app.use('/author', authorController)
app.use('/book', bookController)

// ... your REST API routes will go here
//
//
//app.get('/members', async (req, res) => {
//  const members = await prisma.member.findMany()
//  res.json(members)
//})



app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)
