const {Router}= require('express');
const { me, addAdmin, loginAdmin } = require('../controllers/AdminController');
const {authenticateToken}= require('../middleware/auth')

const router = Router()


router.post('/register',addAdmin)
router.post('/login', loginAdmin)
router.get('/me',authenticateToken, me)




module.exports =router;