const router = require('express').Router();
const articlesController = require('../controllers/articlesController');

router.get('/:articleId',articlesController.article_get_byId);

router.get('/topic/:topic/page/:page',articlesController.articles_get_byTopicAndPage);


module.exports = router;