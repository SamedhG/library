const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function createBook(book) {
    return await prisma.book.create({ data: book })
}

async function findAllBooks() {
    return await prisma.book.findMany()
}

async function findBookById(id) {
    return await prisma.book.findUnique({ where: {id: id} })
}

async function updateBook(id, book) {
    return await prisma.book.update({ where: { 
        id: id
    }, data: book })
}

async function deleteBook(id) {
    return await prisma.book.delete({ where : { id: id }})
}

module.exports = { findAllBooks, findBookById, updateBook, deleteBook, createBook }
