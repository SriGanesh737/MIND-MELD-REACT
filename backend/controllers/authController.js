const User = require('../models/user');
const Expert = require('../models/Expert');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const mySecret = process.env.mySecret;

const register_post = async (req,res)=>{
    let firstname = req.body.fname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let password = req.body.pswd;
    let phoneno = req.body.phno;
    let registeras = req.body.registeras;

    if(registeras === 'user'){
        try{
            const user = await User.create({firstname,lastname,email,password,phone:phoneno});
            res.status(201).json({user:user._id});
        }
        catch(err){
            console.log(err);
            res.status(400).json({err});
        }
    }
    else if(registeras === 'expert'){
        try{
            const expert = await Expert.create({firstname,lastname,email,password,phone:phoneno});
            res.status(201).json({expert:expert._id});
        }
        catch(err){
            console.log(err);
            res.status(400).json({err});
        }
    }

    
}

