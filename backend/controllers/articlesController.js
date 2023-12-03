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
  const articlesPerPage = 9;
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

const articles_get = (req,res)=>{
  Article.find({})
  .then((articles)=>{
    res.status(200).json(articles);
  })
  .catch((err)=>{
    res.status(500).json({message:"Internal Server Error"});
  });
}

const deleteArticle=(req,res)=>{
  const { articleid } = req.params;

  // Use the findByIdAndDelete method provided by Mongoose
  Article.findByIdAndDelete(articleid)
    .then((deletedArticle) => {
      if (deletedArticle) {
        res.json({ message: 'Article deleted successfully', status: true });
      } else {
        res.status(404).json({ error: 'Article not found', status: false });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: 'Internal server error', status: false });
    });

}

const filterHandler=async (req,res)=>{
  let {searchinput,based_on,filter_option,topic}=req.body;
  console.log(req.body)
  let topic_lower = topic.toLowerCase();
    search_value = searchinput.toLowerCase();
    let sort_basis = -1;
    if (filter_option == 'oldest first') 
    sort_basis = 1;


    if (filter_option == 'most liked') 
    {
        Article.find({ topic: topic_lower }).sort({ likes: -1 }).then((data) => {
            let slider_data = data;
            slider_data.sort((a, b) => b.likes - a.likes);
            slider_data = slider_data.slice(0, Math.min(5, slider_data.length));
            // console.log(slider_data);
            const filtered_data = data.filter((article) => {
                if (based_on == 'title' && article.title.toLowerCase().includes(search_value.toLowerCase())) 
                return true;
                else if (based_on == 'tags') {
                    const tags = article.tags;
                    for (let i = 0; i < tags.length; i++) {
                        if (tags[i].toLowerCase().includes(search_value.toLowerCase())) return true;
                    }
                }
            });
            // console.log(filtered_data)
            res.json({ success: true, filtered_data  });

        }).catch((err) => {
            console.log(err);
        })
    }
    else {
        console.log(sort_basis, "...");
        Article.find({ topic: topic_lower }).sort({ date_of_publish: sort_basis }).then((data) => {
            let slider_data = data;
            // console.log(slider_data);
            const filtered_data = data.filter((article) => {
                if (based_on == 'title' && article.title.toLowerCase().includes(search_value)) return true;
                else if (based_on == 'tags') {
                    const tags = article.tags;
                    for (let i = 0; i < tags.length; i++) {
                        if (tags[i].toLowerCase().includes(search_value)) return true;
                    }
                }
            });
            console.log(filtered_data[0]._id)
            res.json({ success: true,filtered_data  });
        }).catch((err) => {
            console.log(err);
            res.json({success:"false"})
        })

}
}

const article_post = async (req,res)=>{
  const articleId = req.query.id;
  const {topic,title,content,author_name,date_of_publish,tags,author_id,image_link} = req.body;
  console.log(req.body)
  console.log(req.query)
  if(articleId){
    const article = await Article.findById(articleId);
    article.topic = topic;
    article.title = title;
    article.content = content;
    article.author_name = author_name;
    article.date_of_publish = date_of_publish;
    article.tags = tags;
    article.author_id = author_id;
    article.image_link = image_link;
    await article.save();
    console.log("Article updated successfully")
    res.status(200).json({message:"Article updated successfully"});
  }
  else{
    const article = new Article({
        topic,
        title,
        content,
        author_name,
        date_of_publish,
        tags,
        author_id,
        image_link
    });
    await article.save();
    console.log("Article added successfully")
    res.status(200).json({message:"Article added successfully"});
  }
}

module.exports = {article_get_byId,articles_get_byTopicAndPage,articles_get,deleteArticle,filterHandler,article_post}