const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function createAuthor(author) {
    return await prisma.author.create({ data: author })
}

async function findAllAuthors() {
    return await prisma.author.findMany()
}

async function findAuthorById(id) {
    return await prisma.author.findUnique({ where: {id: id} })
}

async function updateAuthor(id, author) {
    return await prisma.author.update({ where: { 
        id: id
    }, data: author })
}

async function deleteAuthor(id) {
    return await prisma.author.delete({ where : { id: id }})
}

module.exports = { findAllAuthors, findAuthorById, updateAuthor, deleteAuthor, createAuthor }
