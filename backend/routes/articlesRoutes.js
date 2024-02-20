const router = require("express").Router();
const articlesController = require("../controllers/articlesController");
const authMiddleware = require("../middleware/authMiddleware");
const { handleImageUpload } = require("../middleware/fileHandleMiddleware");
const upload = require("../utility/multer");

router.get("/:articleId", authMiddleware, articlesController.article_get_byId);

router.get(
  "/topic/:topic/page/:page",
  authMiddleware,
  articlesController.articles_get_byTopicAndPage
);

router.get("/", articlesController.articles_get);

router.delete("/:articleid", authMiddleware, articlesController.deleteArticle); // check whether only the writer / admin can delete the article.

router.post("/filter", authMiddleware, articlesController.filterHandler);

router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  handleImageUpload,
  articlesController.article_post
); // restrict this route to admin and expert.

router.get(
  "/comments/:articleId",
  authMiddleware,
  articlesController.getComments
);

router.post(
  "/comments/:articleId",
  authMiddleware,
  articlesController.postComment
);

router.delete(
  "/comments/:commentId",
  authMiddleware,
  articlesController.deleteComment
); // check whether only the writer / admin can delete the comment.

router.post("/liked/:articleid", authMiddleware, articlesController.liked);
router.post(
  "/disliked/:articleid",
  authMiddleware,
  articlesController.disliked
);
module.exports = router;
