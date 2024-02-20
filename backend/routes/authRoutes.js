const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/login", authController.login_post);
router.post("/register", authController.register_post);
router.post("/googleSignIn", authController.googleSignIn_post);
router.get("/checkEmail/:email", authController.checkEmail_get);
router.delete("/:expertid", authController.remove_Expert); // restrict to admin.
router.put("/:expertid/updateblocked", authController.updateblockedstate); //restrict to admin.
router.post("/forgotpassword", authController.forgotpassword);
router.post("/passwordchange", authController.changepassword);
module.exports = router;
