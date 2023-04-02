const express = require('express')
const router = express.Router()
const { showAllMicro, newMicro, deleteMicro, updateMicro, createMicro, editMicro, seedMicro, showMicro } = require('../controllers/microController')




router.get('/', showAllMicro)

router.get('/seed', seedMicro)

router.get('/new', newMicro)

router.delete('/:id', deleteMicro)

router.put('/:id', updateMicro)

router.post('/,', createMicro)

router.get('/:id/edit', editMicro)


router.get('/:id', showMicro)



module.exports = router 
