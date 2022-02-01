const {Router}= require('express');
const { getStudents, addStudent, removeStudent, uptStudent } = require('../controllers/StudentController');
const { authenticateToken } = require('../middleware/auth');



const router = Router()

router.get('/getAll',getStudents)
router.post('/add', addStudent)
router.delete('/delete/:id',removeStudent)
router.patch('/update/:id',uptStudent)


module.exports =router;