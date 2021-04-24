const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function createMember(member) {
    return await prisma.member.create({ data: member })
}

async function findAllMembers() {
    return await prisma.member.findMany()
}

async function findMemberById(id) {
    return await prisma.member.findUnique({ where: {id: id} })
}

async function updateMember(id, member) {
    return await prisma.member.update({ where: { 
        id: id
    }, data: member })
}

async function deleteMember(id) {
    return await prisma.member.delete({ where : { id: id }})
}

module.exports = { findAllMembers, findMemberById, updateMember, deleteMember, createMember }
