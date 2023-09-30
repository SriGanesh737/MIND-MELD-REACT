import React from 'react'
import MyNavbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Styles from './SingleArticle.module.css';

export default function SingleArticle() {
  
  let articleId = useParams();
  const [article,setArticle] = useState({
    title:"Demo Title",
    author_name:"Demo Author",
    date_of_publish:new Date(),
    content:"Demo Content",
    likes:0,
    dislikes:0,
  });

  useEffect(()=>{
    // fetch data from backend
    // axios.get(`http://localhost:5000/articles/${articleId}`).then((res)=>{
    //   console.log(res.data);
    //   setArticle(res.data);
    // })
  },[articleId])

  let {title,author_name,date_of_publish,content,likes,dislikes,image_link} = article;

  
  return (
    <div className="container">
      <MyNavbar/>
      <h1>{title}</h1>
      <img src={image_link} alt="" width="1000px" height="500px"/>
      <h2>-- Written by <i>{author_name}</i> --</h2>
      <h3>{date_of_publish.getDate()}-{date_of_publish.getMonth()+1}-{date_of_publish.getFullYear()}</h3>
      <button className={Styles.addtowishlist}><i className="fa-solid fa-bookmark"></i>Add to Bookmarks</button>
      <div className={Styles.content}>
        {content}
      </div>
      <div className={Styles.rating}>
        <div className={Styles.liked}>
          <button type="submit" className={Styles.submitlike}><i style={{fontSize:"40px",paddingRight:"10px",color:"rgb(6, 108, 191)"}} className="fa-solid fa-thumbs-up rated"></i></button>
          <h4>{likes}</h4>
        </div>
        <div className={Styles.disliked}>
          <button type="submit" className={Styles.submitdislike}><i style={{fontSize:"40px",color:"rgb(6, 108, 191)"}} className="fa-solid fa-thumbs-down unrated"></i></button>
          <h4>{dislikes}</h4>
        </div>
      </div>
      <h2 style={{textAlign:"center"}}>***** Thank You *****</h2>
      <h1 className={Styles['comments-title']}>Comments</h1>
      <div className={Styles['comments-section']}>
        Comments Section
      </div>
      <Footer/>
    </div>
  )
}



