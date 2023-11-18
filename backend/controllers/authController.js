const User = require('../models/user');
const Expert = require('../models/Expert');
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {secretKey} = require('../secrets/secret');


const register_post = async (req,res)=>{
    console.log(req.body)
    let firstname = req.body.fname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let password = req.body.pswd;
    let phoneno = req.body.phno;
    let registeras = req.body.registeras;

    if(registeras === 'user'){
        try{
            const user = await User.create({firstname,lastname,email,password,phone:phoneno});
            console.log(user)
            res.status(201).json({user:user._id});
        }
        catch(err){
            console.log(err);
            res.status(400).json({err});
        }
    }
    else if(registeras === 'expert'){
        const resume=req.body.resume
        try{
            const expert = await Expert.create({firstname,lastname,email,password,phone:phoneno,resume:resume,is_blocked:true});
            console.log(expert)
            res.status(201).json({expert:expert._id});
        }
        catch(err){
            console.log(err);
            res.status(400).json({err});
        }
    }

    
}

const login_post = async (req,res)=>{
    let email = req.body.email;
    let password = req.body.password;
    const user = await User.findOne({email:email});
    const expert = await Expert.findOne({email:email});
    const admin = await Admin.findOne({email:email});
    if(user){
        // check password using bcrypt
        let didMatch = await bcrypt.compare(password,user.password);
        if(didMatch){
            // create jwt token (expires in 24 hours)
            const payload = {
                id: user._id,
                role: 'user'
            }
            let token = jwt.sign(payload,secretKey,{expiresIn:86400});
            let BearerToken = 'Bearer '+token;
            res.status(200).json({token:BearerToken});
        }
        else{
            res.status(400).json({message:"Incorrect password"});
        }
    }
    else if (expert){
        let didMatch = await bcrypt.compare(password,expert.password);
        if(didMatch){
            // create jwt token (expires in 24 hours)
            const payload = {
                id: expert._id,
                role: 'expert'
            }
            let token = jwt.sign(payload,secretKey,{expiresIn:86400});
            let BearerToken = 'Bearer '+token;
            res.status(200).json({token:BearerToken});
        }
        else{
            res.status(400).json({message:"Incorrect password"});
        }
    }
    else if (admin){
        let didMatch = await bcrypt.compare(password,admin.password);
        if(didMatch){
            // create jwt token (expires in 24 hours)
            const payload = {
                id: admin._id,
                role: 'admin'
            }
            let token = jwt.sign(payload,secretKey,{expiresIn:86400});
            let BearerToken = 'Bearer '+token;
            res.status(200).json({token:BearerToken});
        }
        else{
            res.status(400).json({message:"Incorrect password"});
        }
    }
    else{
        res.status(400).json({message:"Email not registered"});
    }

}

const checkEmail_get = async(req,res)=>
{
    const email = req.params.email;
    const user = await User.findOne({email:email});
    const expert = await Expert.findOne({email:email});
    const admin = await Admin.findOne({email:email});
    if(user || expert || admin){
        res.status(200).json({message:"Email already registered",status:"true"});
    }
    else {
        res.status(200).json({message:"Email not registered",status:"false"});
    }
}


module.exports = {
    register_post,
    login_post,
    checkEmail_get
}