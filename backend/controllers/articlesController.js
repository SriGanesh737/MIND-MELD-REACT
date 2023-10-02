const Article = require('../models/Article');

const article_get_byId = (req,res)=>{
      const articleId = req.params.articleId;
      Article.findOne({ _id: articleId })
      .then((article) => {
        if (!article) {
          // If the article is not found, return a 404 Not Found response
          return res.status(404).json({ message: 'Article not found' });
        }
  
        // If the article is found, return a 200 OK response with the article data
        res.status(200).json(article);
      })
      .catch((error) => {
        // Handle any errors that occur during the database query
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      });
}

const articles_get_byTopicAndPage = (req,res)=>{
  const topic = req.params.topic;
  const page = req.params.page;
  const articlesPerPage = 10;
  Article.find({topic:topic})
  .skip((page-1)*articlesPerPage)
  .limit(articlesPerPage)
  .then((articles)=>{
    res.status(200).json(articles);
  })
  .catch((err)=>{
    res.status(500).json({message:"Internal Server Error"});
  });
}


module.exports = {article_get_byId,articles_get_byTopicAndPage}