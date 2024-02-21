const router = require("express").Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const upload = require("../utility/multer");
const { handleImageUpload } = require("../middleware/fileHandleMiddleware");

router.get(
  "/:userId/bookmarks",
  authMiddleware,
  userController.bookmarks_byUserId_get
);
router.get(
  "/:userId/yourwork",
  authMiddleware,
  roleMiddleware(["expert", "admin"]),
  userController.articles_getbyuserid
); //only expert and admin can access this.
router.post(
  "/:userId/bookmarks/:articleId",
  authMiddleware,
  userController.bookmark_add_byUserId_post
);

router.delete(
  "/:userId/bookmarks/:articleId",
  authMiddleware,
  userController.bookmark_remove_byUserId_delete
);

// write routes for getting update user by id, delete user by id
router.get("/", userController.users_get);

router.get("/role/:role", userController.users_get_byRole);

router.get("/:userId", userController.user_get_byId);

router.get("/email/:email", userController.user_get_byEmail);

router.put(
  "/:userId",
  authMiddleware,
  upload.single("profile_picture"),
  handleImageUpload,
  userController.user_update_byId_put
); //Route handles the PUT request for updating a users profile 

module.exports = router;
