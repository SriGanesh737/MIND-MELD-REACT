const Bookmark = require('../models/Bookmark');
const Article = require('../models/Article')

const bookmarks_byUserId_get = async (req,res)=>{
    const userId = req.params.userId;
    const bookmarks = await Bookmark.findOne({user_id:userId});
    const bookmarksIds = bookmarks.bookmarks_ids;
    const bookmarkedArticles = await Article.find({_id:{$in:bookmarksIds}});
    res.status(200).json(bookmarkedArticles);
}

const bookmark_add_byUserId_post = async (req,res)=>{
    const userId = req.params.userId;
    const articleId = req.params.articleId;
    
    const bookmarks = await Bookmark.findOne({user_id:userId});
    const bookmarksIds = bookmarks.bookmarks_ids;
    if(!bookmarksIds.includes(articleId)){
      bookmarks.bookmarks_ids.push(articleId);
      bookmarks.save();
    }
    res.status(200).json({message:"Bookmark added successfully"});
}

const bookmark_remove_byUserId_delete = async (req,res)=>{
    const userId = req.params.userId;
    const articleId = req.params.articleId;

    const bookmarks = await Bookmark.findOne({user_id:userId});
    bookmarks.bookmarks_ids = bookmarks.bookmarks_ids.filter((bookmarkId)=>bookmarkId!=articleId);
    bookmarks.save();
    res.status(200).json({message:"Bookmark removed successfully"});
}


module.exports = {bookmarks_byUserId_get,bookmark_add_byUserId_post,bookmark_remove_byUserId_delete}