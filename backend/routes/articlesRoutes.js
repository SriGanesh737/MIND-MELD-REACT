const router = require('express').Router();
const articlesController = require('../controllers/articlesController');

router.get('/:articleId',articlesController.article_get);


module.exports = Router;