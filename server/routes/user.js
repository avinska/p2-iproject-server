const { UserController } = require('../controllers/userController');
const { authenticate } = require('../middlewares/authenticate');
const router = require('express').Router();

router.post('/register', UserController.register)
router.post('/login', UserController.login)
// router.use(authenticate)
router.post('/premium', authenticate, UserController.payment)
router.patch('/premium', authenticate, UserController.updateStatus) 
// router.patch('/premium/:id', UserController.updateStatus)

module.exports = router;
