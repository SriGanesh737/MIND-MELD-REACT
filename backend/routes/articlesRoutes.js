const router = require('express').Router();
const articlesController = require('../controllers/articlesController');

router.get('/:articleId',articlesController.article_get_byId);

router.get('/topic/:topic/page/:page',articlesController.articles_get_byTopicAndPage);

router.get('/',articlesController.articles_get)

router.delete('/:articleid',articlesController.deleteArticle)

router.post("/filter",articlesController.filterHandler)

router.post('/',articlesController.article_post)

router.get('/comments/:articleId',articlesController.getComments)

router.post('/comments/:articleId',articlesController.postComment)

router.delete('/comments/:commentId',articlesController.deleteComment)

router.post('/liked/:articleid',articlesController.liked)
router.post('/disliked/:articleid',articlesController.disliked)
module.exports = router;