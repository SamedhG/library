const express = require('express');
const router = express.Router();
const dao = require('../dao/member_dao')

router
    .get('/', async (req, res) => {
        const members = await dao.findAllMembers()
        res.json(members)
    })
    .post('/', async (req, res) => {
        const member = await dao.createMember(req.body.data)
        res.json(member)
    })
    .get('/:id', async (req, res) => {
        const member = await dao.findMemberById(parseInt(req.params.id))
        if(member === null) {
            res.status(404)
        }
        res.json(member)
    })
    .patch("/:id", async (req, res) => {
        const member = await dao.findMemberById(parseInt(req.params.id))
        if(member != null) {
            await dao.updateMember(parseInt(req.params.id), req.body.data)
        } else {
            res.status(401)
        }
        res.json(member) 
    })
    .delete("/:id", async (req, res) => {
        const member = await dao.findMemberById(parseInt(req.params.id))
        if(member != null) {
            await dao.deleteMember(parseInt(req.params.id));
        } else {
            res.status(401)
        }
        res.json(member) 
    })

module.exports = router;


