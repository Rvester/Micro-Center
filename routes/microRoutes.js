const express = require('express')
const router = express.Router()
const { showAllMicro, newMicro, deleteMicro, updateMicro, createMicro, editMicro, seedMicro, showMicro } = require('../controllers/microController')




router.get('/index', showAllMicro)

router.get('/new', newMicro)

router.delete('/:id', deleteMicro)

router.put('/:id', updateMicro)

router.post('/,', createMicro)

router.get('/:id/edit', editMicro)

router.get('/seed', seedMicro)

router.get('/:id', showMicro)



module.exports = router 
