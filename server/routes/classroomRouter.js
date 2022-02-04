const {Router}= require('express');
const { getClassrooms, addClassroom, removeClassroom, uptClassroom, getOneClassroom, getClassroomsWithParent } = require('../controllers/ClassroomController');


const router = Router()

router.get('/getAll',getClassrooms)
router.get('/getAllWithParent',getClassroomsWithParent)
router.get('/getOne/:id',getOneClassroom)
router.post('/add', addClassroom)
router.delete('/delete/:id',removeClassroom)
router.patch('/update/:id',uptClassroom)



module.exports =router;