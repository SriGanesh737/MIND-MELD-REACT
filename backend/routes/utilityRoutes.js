const router = require('express').Router();
const utilitycontroller = require('../controllers/utilitycontroller');
router.post("/contact",utilitycontroller.contact_us)


module.exports = router;