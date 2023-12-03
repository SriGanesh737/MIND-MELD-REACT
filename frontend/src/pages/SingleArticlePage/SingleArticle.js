import React from 'react'
import MyNavbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Styles from './SingleArticle.module.css';
import CommentsSection from '../../components/CommentsSection/CommentsSection';
import {toast} from 'sonner'
import { useUser } from '../../providers/UserProvider';

export default function SingleArticle() {
  
  const {user} = useUser();
  let {articleId} = useParams();
  const [article,setArticle] = useState({
    title:"Demo Title",
    author_name:"Demo Author",
    date_of_publish:new Date(),
    image_link:'',
    content:"Demo Content",
    likes:0,
    dislikes:0,
  });

  useEffect(()=>{
    // fetch data from backend
    axios.get(`http://localhost:8000/articles/${articleId}`).then((res)=>{
      const data = res.data;
      console.log(data);
      setArticle({
        title:data.title,
        author_name:data.author_name,
        date_of_publish:new Date(data.date_of_publish),
        content: data.content,
        image_link:data.image_link,
        likes:data.likes,
        dislikes:data.dislikes
      });
    })
  },[articleId])

  let {title,author_name,date_of_publish,content,likes,dislikes,image_link} = article;


  const handleAddToBookmarks = () => {
    // add to bookmarks
    const url = "http://localhost:8000/user/"+user._id+"/bookmarks/"+articleId;
    fetch(url,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((res)=>res.json())
    .then((data)=>{
      toast.success("successfully added to your bookmarks")
      
    })
    .catch((err)=>console.log(err));
  }
  
  return (
    <>
      <MyNavbar/>
      <div className={Styles.body}>
      <h1 className={Styles.heading}>{title}</h1>
      {/* <img className={Styles.image} src={'../../assets'+image_link} alt="" width="1000px" height="500px"/> */}
      <img className={Styles.image} src={image_link} alt="" width="1000px" height="500px"/>
      <h2 className={Styles.written}>-- Written by <i>{author_name}</i> --</h2>
      <h3 className={Styles.date}>{date_of_publish.getDate()}-{date_of_publish.getMonth()+1}-{date_of_publish.getFullYear()}</h3>
      <button onClick={handleAddToBookmarks} style={{border:"none"}} className={Styles.addtowishlist}><i className="fa-solid fa-bookmark"></i>Add to Bookmarks</button>
      <div className={Styles.content} dangerouslySetInnerHTML={{ __html: content }} />
      <div className={Styles.rating}>
        <div className={Styles.liked}>
          <button type="submit" className={`${Styles.submitlike} ${Styles.like_btn}`}><i style={{fontSize:"40px",paddingRight:"10px",color:"rgb(6, 108, 191)"}} className={`fa-solid fa-thumbs-up ${Styles.rated}`}></i></button>
          <h4>{likes}</h4>
        </div>
        <div className={Styles.disliked}>
          <button type="submit" className={`${Styles.submitdislike} ${Styles.like_btn}`}><i style={{fontSize:"40px",color:"rgb(6, 108, 191)"}} className={`fa-solid fa-thumbs-down ${Styles.unrated}`}></i></button>
          <h4>{dislikes}</h4>
        </div>
      </div>
      <h2 style={{textAlign:"center"}}>***** Thank You *****</h2>
      {/* <h1 className={Styles['comments-title']}>Comments</h1> */}
      <div className={Styles['comments-section']}>
        {/* <CommentsSection/> */}
        Comments Section
      </div>
      </div>
      <Footer/>
    </>
  )
}



