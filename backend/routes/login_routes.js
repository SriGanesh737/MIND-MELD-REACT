const router = require("express").Router();
const authController = require("../controllers/authController");

const csrf=require('csurf')
const crsfProtection=csrf({
    cookie: true
});
 
router.use(crsfProtection)

router.post("/login", authController.login_post);
router.post("/register", authController.register_post);
router.get('/csrf-token', authController.getCSRFToken)
module.exports = router;
