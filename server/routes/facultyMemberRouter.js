const {Router}= require('express');
const { getFacultyMembers, addFacultyMember, removeFacultyMember, uptFacultyMember } = require('../controllers/FacultyMemberController');


const router = Router()


router.get('/getAll',getFacultyMembers)
router.post('/add', addFacultyMember)
router.delete('/delete/:id',removeFacultyMember)
router.patch('/update/:id',uptFacultyMember)


module.exports =router;