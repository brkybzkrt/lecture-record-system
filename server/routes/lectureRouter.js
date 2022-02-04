const {Router}= require('express');
const { getLectures, addLecture, removeLecture, uptLecture, getOneLecture } = require('../controllers/LectureController');


const router = Router()

router.get('/getAll',getLectures)
router.get('/getOne/:id',getOneLecture)
router.post('/add',addLecture)
router.delete('/delete/:id',removeLecture)
router.patch('/update/:id',uptLecture)


module.exports =router;