const {Router}= require('express');
const { getFacultyMembers, addFacultyMember, removeFacultyMember, uptFacultyMember,getOneFacultyMember } = require('../controllers/FacultyMemberController');


const router = Router()


router.get('/getAll',getFacultyMembers)
router.get('/getOne/:id',getOneFacultyMember)
router.post('/add', addFacultyMember)
router.delete('/delete/:id',removeFacultyMember)
router.patch('/update/:id',uptFacultyMember)


module.exports =router;