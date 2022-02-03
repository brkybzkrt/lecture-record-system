const {Router}= require('express');
const { addLectureRecord, getLectureRecords,getAllLecturesOfStudent } = require('../controllers/LectureRecordController');




const router = Router()



router.post('/add', addLectureRecord)
router.get('/getAll', getLectureRecords)
router.get('/getLecturesById/:id',getAllLecturesOfStudent)




module.exports =router;