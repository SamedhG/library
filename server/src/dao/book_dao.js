const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function createBook(book) {
    return await prisma.book.create({ data: {
        title: book.title,
        author: { connect: { id: book.authorId } }
    }, include: { author: true }})
}

async function findAllBooks() {
    return await prisma.book.findMany({include: {author: true}})
}

async function findBookById(id) {
    return await prisma.book.findUnique({ where: {id: id}, include: {author: true}})
}

async function updateBook(id, book) {
    return await prisma.book.update(
    { 
        where: { id: id },
        data: { title: book.title, author: { connect: { id: book.authorId } } },
        include: { author: true }
    })
}

async function deleteBook(id) {
    return await prisma.book.delete({ where : { id: id }})
}

module.exports = { findAllBooks, findBookById, updateBook, deleteBook, createBook }
