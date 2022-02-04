const {Router}= require('express');
const { loginStudent } = require('../controllers/StudentController');
const { me, addAdmin, loginAdmin, logoutAdmin } = require('../controllers/AdminController');
const { meStudent} = require('../controllers/StudentController');

const {authenticateToken}= require('../middleware/auth')

const router = Router()


router.post('/register',addAdmin)
router.post('/login', loginAdmin)
router.post('/login/student', loginStudent)
router.post('/logout', logoutAdmin)
router.get('/me',authenticateToken, me)
router.get('/meStudent',authenticateToken, meStudent)





module.exports =router;