const  Query= require('../models/Query');
const contact_us=(req,res)=>{
    const query=new Query({
        firstname:req.body.firstname,lastname:req.body.lastname,email:req.body.email,message:req.body.message,phone:req.body.phone
    })
    console.log(query)
    query.save().then(() => {
        // console.log('Document saved')
        res.json({success:true}) 
    
       }
    ).catch((err) => {
        console.log(err)
        res.json({success:false})
    })

}



module.exports={contact_us}