const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/:userId/bookmarks',userController.bookmarks_byUserId_get);

router.post('/:userId/bookmarks/:articleId',userController.bookmark_add_byUserId_post);

router.delete('/:userId/bookmarks/:articleId',userController.bookmark_remove_byUserId_delete);

// write routes for getting update user by id, delete user by id
router.get('/',userController.users_get);

router.get('/:userId',userController.user_get_byId);

router.get('/email/:email',userController.user_get_byEmail);

module.exports = router;