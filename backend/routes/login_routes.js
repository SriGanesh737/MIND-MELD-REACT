const router = require("express").Router();
const authController = require("../controllers/authController");
const { resumeUpload } = require("../middleware/fileHandleMiddleware");
const upload = require("../utility/multer");
const csrf=require('csurf')
const crsfProtection=csrf({
    cookie: true
});
 
// router.use(crsfProtection)

/**
 * @swagger
 * /log/login:
 *   post:
 *     summary: Login
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       403:
 *         description: Invalid credentials
 *       500:
 *         description: Logging in failed
 */


router.post("/login", authController.login_post);
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - pswd
 *         - fname
 *         - lastname
 *         - registeras
 *         - phno
 *       properties:
 *         email:
 *           type: string
 *           description: Email of the user
 *         pswd:
 *           type: string
 *           description: Password of the user
 *         fname:
 *           type: string
 *           description: First name of the user
 *         lastname:
 *           type: string
 *           description: Last name of the user
 *         registeras:
 *           type: string
 *           description: Type of registration (user or expert)
 *         phno:
 *           type: string
 *           description: Phone number of the user
 */









router.post("/register",upload.single("resume"),resumeUpload, authController.register_post);
router.get('/csrf-token', authController.getCSRFToken)
module.exports = router;
