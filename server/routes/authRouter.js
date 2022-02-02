const {Router}= require('express');
const { me, addAdmin, loginAdmin, logoutAdmin } = require('../controllers/AdminController');
const {authenticateToken}= require('../middleware/auth')

const router = Router()


router.post('/register',addAdmin)
router.post('/login', loginAdmin)
router.post('/logout', logoutAdmin)
router.get('/me',authenticateToken, me)




module.exports =router;