const router = require('express').Router();
const authController = require('../controllers/authController');


router.post('/login',authController.login_post);
router.post('/register',authController.register_post);
router.get('/checkEmail/:email',authController.checkEmail_get);
router.delete('/:expertid',authController.remove_Expert)
router.put('/:expertid/updateblocked',authController.updateblockedstate)

module.exports = router;