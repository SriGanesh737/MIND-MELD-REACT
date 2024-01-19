const { get } = require('mongoose');
const Article = require('../models/Article');
const Comment = require('../models/Comment');


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

const liked=async (req,res)=>{
  let articleid = req.params.articleid
  let userid=req.body.userid
    Article.find({ _id: articleid }).then((data) => {
        newarray1 = data[0].liked_userids;
        likes = data[0].likes;
        dislikes = data[0].dislikes;
        let index = newarray1.includes(userid)
        if (index == true) {
          
        }
        else {
            ++likes;
           
            newarray1.push(userid)
        }
        newarray2 = data[0].disliked_userids;
        index = newarray2.includes(userid)
        if (index == true) {
            --dislikes;
            
            newarray2 = newarray2.filter(fruit => fruit !== userid)
          
        }
        else {
         
        }
        Article.updateOne({ _id: articleid }, { $set: { likes: parseInt(likes), dislikes: parseInt(dislikes), liked_userids: newarray1, disliked_userids: newarray2 } }).then(() => {
         
            res.json({success:true})
        })
       
    }).catch((err) => {
        console.log(err);
    });

}

const disliked=async (req,res)=>{
  articleid = req.params.articleid
  userid=req.body.userid
    Article.find({ _id: articleid }).then((data) => {
        // console.log(data)
        newarray1 = data[0].disliked_userids;
        // console.log(newarray1)
        likes = data[0].likes;
        dislikes = data[0].dislikes;
        // console.log(userid)
        // console.log(newarray1.includes(userid))
        let index = newarray1.includes(userid)
        // console.log(likes, dislikes);
        if (index == true) {
            // console.log('disliked before')
        }
        else {
            ++dislikes;
            // console.log('disliked now')
            newarray1.push(userid)
        }
        newarray2 = data[0].liked_userids;
        index = newarray2.includes(userid)
        if (index == true) {
            --likes;
            // console.log('liked before removing')
            newarray2 = newarray2.filter(fruit => fruit !== userid)
            // console.log(newarray2)
        }
        else {

            // console.log('not available in likes')
        }
        Article.updateOne({ _id: articleid }, { $set: { likes: parseInt(likes), dislikes: parseInt(dislikes), liked_userids: newarray2, disliked_userids: newarray1 } }).then(() => {
            // console.log('successfully updated');
            res.json({success:true})
        })

        //    Article.updateOne({_id:articleid},{$set:{}})
    }).catch((err) => {
        console.log(err);
    });

}

const getComments = async (req, res) => {
  try {
    const articleId = req.params.articleId;

    // Step 1: Fetch main comments
    const mainComments = await Comment.find({ article_id: articleId, is_main_comment: true });

    // Step 2: Fetch reply comments for each main comment
    const mainCommentsWithReplies = await Promise.all(mainComments.map(async (mainComment) => {
      const replies = await Comment.find({ _id: { $in: mainComment.replies_ids } });
      return { ...mainComment.toObject(), replies };
    }));

    // Step 3: Send the response
    res.send(mainCommentsWithReplies);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const postComment = async(req,res) =>{
    const { articleId } = req.params;
    const { user_id, comment_info, profile_image_link, user_name, is_main_comment, reply_for, main_comment_id } = req.body;
    console.log(req.body)
    // Step 1: Create a new comment
    const newComment = new Comment({
      article_id: articleId,
      user_id,
      comment_info,
      profile_image_link,
      user_name,
      is_main_comment,
      reply_for,
      main_comment_id
    });

    // Step 2: Save the new comment
    const savedComment = await newComment.save();

    // // Step 3: If the comment is a reply, update the replies_ids array of the main comment
    if (!is_main_comment) {
      await Comment.findByIdAndUpdate(main_comment_id, {
        $push: { replies_ids: savedComment._id },
      });
    }

    res.send({
      "message": "Comment posted successfully",
    });
};

const deleteComment = async(req,res)=>{
  const {commentId} = req.params; 
  const {is_main_comment,main_comment_id} = req.body;
  if(is_main_comment){
    await Comment.findByIdAndDelete(commentId);
    // delete all its replies
    await Comment.deleteMany({main_comment_id:commentId});
  }
  else{
    console.log(main_comment_id)
    await Comment.findByIdAndDelete(commentId);
    await Comment.findByIdAndUpdate(main_comment_id,{
      $pull:{replies_ids:commentId}
    })
  }

  res.send({
    "message":"Comment deleted successfully"
  })

}

module.exports = {article_get_byId,articles_get_byTopicAndPage,articles_get,deleteArticle,filterHandler,article_post,liked,disliked, getComments, postComment, deleteComment}