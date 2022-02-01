const {Router}= require('express');
const { getClassrooms, addClassroom, removeClassroom, uptClassroom } = require('../controllers/ClassroomController');


const router = Router()

router.get('/getAll',getClassrooms)
router.post('/add', addClassroom)
router.delete('/delete/:id',removeClassroom)
router.patch('/update/:id',uptClassroom)



module.exports =router;