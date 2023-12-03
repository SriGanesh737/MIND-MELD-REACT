const router = require('express').Router();
const utilitycontroller = require('../controllers/utilitycontroller');
router.post("/contact",utilitycontroller.contact_us)
router.get("/queries",utilitycontroller.all_queries)
router.put("/query/:id",utilitycontroller.postquery)

module.exports = router;