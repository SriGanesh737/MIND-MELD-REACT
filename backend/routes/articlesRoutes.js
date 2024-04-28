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
/**
 * @swagger
 * /articles/:
 *   get:
 *     summary: Retrieve all articles
 *     description: Retrieve a list of all articles stored in the database
 *     responses:
 *       200:
 *         description: A list of articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Article'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating the internal server error
 *     tags:
 *       - Articles
 */

router.get("/", articlesController.articles_get);
/**
 * @swagger
 * /articles/{articleid}:
 *   delete:
 *     summary: Delete an article by ID
 *     description: Delete an article from the database by its ID
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: articleid
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the article to delete
 *     responses:
 *       200:
 *         description: Article deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A success message indicating that the article was deleted
 *                 status:
 *                   type: boolean
 *                   description: Indicates the status of the operation
 *                   example: true
 *       404:
 *         description: Article not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating that the article was not found
 *                 status:
 *                   type: boolean
 *                   description: Indicates the status of the operation
 *                   example: false
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating an internal server error
 *                 status:
 *                   type: boolean
 *                   description: Indicates the status of the operation
 *                   example: false
 */


router.delete("/:articleid", authMiddleware, articlesController.deleteArticle); // check whether only the writer / admin can delete the article.

/**
 * @swagger
 * /articles/filter:
 *   post:
 *     summary: Filter articles based on search input and criteria
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               searchinput:
 *                 type: string
 *                 description: Search input used to filter articles
 *               based_on:
 *                 type: string
 *                 enum: [title, tags]
 *                 description: Criteria for filtering articles (title or tags)
 *               filter_option:
 *                 type: string
 *                 enum: [oldest first, most liked]
 *                 description: Option for sorting articles (oldest first or most liked)
 *               topic:
 *                 type: string
 *                 description: Topic to filter articles
 *     responses:
 *       200:
 *         description: Successfully filtered articles
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the operation was successful
 *                 filtered_data:
 *                   type: array
 *                   description: Array of filtered articles
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the operation was successful
 */

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
); //Router used for posting the comment for specific article when a POST request is made

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
