const router = require("express").Router();
const authController = require("../controllers/authController");
const upload = require("../utility/multer");
const { resumeUpload } = require("../middleware/fileHandleMiddleware");

router.post("/login", authController.login_post);
router.post("/register",upload.single('resume'),resumeUpload,authController.register_post);
router.post("/googleSignIn", authController.googleSignIn_post);
router.get("/checkEmail/:email", authController.checkEmail_get);
router.delete("/:expertid", authController.remove_Expert); // restrict to admin.
router.put("/:expertid/updateblocked", authController.updateblockedstate); //restrict to admin.
router.post("/forgotpassword", authController.forgotpassword);
router.post("/passwordchange", authController.changepassword);
module.exports = router;
