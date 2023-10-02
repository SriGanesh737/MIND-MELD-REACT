const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/:userId/bookmarks',userController.bookmarks_byUserId_get);

router.post('/:userId/bookmarks/:articleId',userController.bookmark_add_byUserId_post);

router.delete('/:userId/bookmarks/:articleId',userController.bookmark_remove_byUserId_delete);

module.exports = router;