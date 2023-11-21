const router = require('express').Router();
const articlesController = require('../controllers/articlesController');

router.get('/:articleId',articlesController.article_get_byId);

router.get('/topic/:topic/page/:page',articlesController.articles_get_byTopicAndPage);

router.get('/',articlesController.articles_get)

router.delete('/:articleid',articlesController.deleteArticle)

router.post("/filter",articlesController.filterHandler)

module.exports = router;