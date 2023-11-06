const Bookmark = require('../models/Bookmark');
const Article = require('../models/Article');
const User = require('../models/user');
const Expert = require('../models/Expert');
const Admin = require('../models/Admin');

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

const users_get = async (req,res)=>{
    const users = await User.find({});
    const experts = await Expert.find({});
    res.status(200).json({...users,experts});    
}

const user_get_byId = async (req,res)=>{
    const userId = req.params.userId;
    const user = await User.findById(userId);
    const expert = await Expert.findById(userId);
    const admin = await Admin.findById(userId);

    if(user){
        // remove password key itself from user object
        delete user.password;
        res.status(200).json(user);
    }
    else if(expert){
        delete expert.password;
        res.status(200).json(expert);
    }
    else if(admin){
        delete admin.password;
        res.status(200).json(admin);
    }
    else{
        res.status(404).json({message:"User not found"});
    }
}

const user_get_byEmail = async(req,res) =>{
    const email = req.params.email;
    const user = await User.find({email:email});
    const expert = await Expert.find({email:email});
    const admin = await Admin.find({email:email});

    if(user){
        // remove password key itself from user object
        delete user.password;
        res.status(200).json(user);
    }
    else if(expert){
        delete expert.password;
        res.status(200).json(expert);
    }
    else if(admin){
        delete admin.password;
        res.status(200).json(admin);
    }
    else{
        res.status(404).json({message:"User not found"});
    }
}

const users_get_byRole = async (req,res)=>{
    const role = req.params.role;
    if(role==='user'){
        const users = await User.find({});
        res.status(200).json(users);
    }
    else if(role==='expert'){
        const experts = await Expert.find({});
        res.status(200).json(experts);
    }
    else if(role==='admin'){
        const admins = await Admin.find({});
        res.status(200).json(admins);
    }
    else{
        res.status(400).json({message:"Invalid role"});
    }
}

module.exports = {bookmarks_byUserId_get,bookmark_add_byUserId_post,bookmark_remove_byUserId_delete,users_get,user_get_byId,user_get_byEmail,users_get_byRole}