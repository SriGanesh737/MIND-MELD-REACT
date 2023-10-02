const router = require('express').Router();
const authController = require('../controllers/authController');


router.post('/login',authController.login_post);
router.post('/register',authController.register_post);
router.get('/checkEmail/:email',authController.checkEmail_get);

module.exports = router;