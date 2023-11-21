const Faq = require('../models/Faq');

const faq_get = async (req,res)=>{
    const faqs = await Faq.find({});
    res.status(200).json(faqs);
}

const faq_filters_post = async (req,res)=>{
    const {is_solved,all_or_your,choose_topic,search_value,userId} = req.body;
    const searchFilters={
      is_answered:is_solved=="true",
    }

    if(all_or_your=="your"){
      searchFilters.user_id=userId;
    }
    else if (all_or_your=="solved"){
      searchFilters.expert_id=userId;
    }

    if(choose_topic!=""){
      searchFilters.topic=choose_topic;
    }

    const faqs = await Faq.find(searchFilters);

    if(search_value!=""){
      const searchResults = faqs.filter((faq)=>{
        return faq.question.toLowerCase().includes(search_value.toLowerCase());
      })
      res.status(200).json(searchResults);
    }
    res.status(200).json(faqs);
}

const faq_post = async (req,res)=>{
    const {user_id,topic,question} = req.body;
    console.log(req.body)
    const faq = new Faq({
        user_id,
        topic,
        question
    });
    await faq.save();
    res.status(200).json({message:"Question added successfully"});
}

module.exports = {faq_get,faq_filters_post,faq_post};