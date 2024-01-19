const router = require('express').Router();
const queriesController = require('../controllers/queriesController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.get('/',authMiddleware,queriesController.faq_get);
router.post('/filters',authMiddleware,queriesController.faq_filters_post);
router.post('/',authMiddleware,queriesController.faq_post);
router.post('/answer',authMiddleware,roleMiddleware(["expert","admin"]),queriesController.faq_answer_post); //only expert and admin can answer.
router.post('/email',authMiddleware,roleMiddleware(["admin"]),queriesController.email_members) //only admin can email members.

module.exports = router;