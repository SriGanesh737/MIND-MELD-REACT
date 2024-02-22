const router = require("express").Router();
const authController = require("../controllers/authController");
const { resumeUpload } = require("../middleware/fileHandleMiddleware");
const upload = require("../utility/multer");
const csrf=require('csurf')
const crsfProtection=csrf({
    cookie: true
});
 
router.use(crsfProtection)

router.post("/login", authController.login_post);
router.post("/register",upload.single("resume"),resumeUpload, authController.register_post);
router.get('/csrf-token', authController.getCSRFToken)
module.exports = router;
