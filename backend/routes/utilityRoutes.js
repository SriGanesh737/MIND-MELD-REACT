const router = require('express').Router();
const utilitycontroller = require('../controllers/utilitycontroller');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.post("/contact",authMiddleware,utilitycontroller.contact_us)
router.get("/queries",authMiddleware,roleMiddleware(["admin"]),utilitycontroller.all_queries) //only admin can view contactus queries.
router.put("/query/:id",authMiddleware,utilitycontroller.postquery)

module.exports = router;