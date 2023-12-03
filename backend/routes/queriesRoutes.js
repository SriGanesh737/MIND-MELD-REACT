const router = require('express').Router();
const queriesController = require('../controllers/queriesController');

router.get('/',queriesController.faq_get);
router.post('/filters',queriesController.faq_filters_post);
router.post('/',queriesController.faq_post);
router.post('/answer',queriesController.faq_answer_post);
router.post('/email',queriesController.email_members)

module.exports = router;