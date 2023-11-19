import { useState } from 'react'
import styles from './yourwork.module.css'
import MyNavbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { useUser } from '../../providers/UserProvider';
import { useEffect } from 'react';
import {toast} from "sonner"
import axios from 'axios';
const Yourwork=()=>{
    const [articles,setArticles]=useState([])
    const {user} = useUser();
    useEffect(()=>{
        const url = "http://localhost:8000/user/"+user._id+"/yourwork";
        // fetch bookmarks data
        fetch(url).then((res)=>res.json())
        .then((data)=>{
            console.log(data)
         setArticles(data);
        })
        .catch((err)=>console.log(err));
    
      },[user])
      function deleteArticle(e,id)
      {
        e.preventDefault();
        axios
      .delete(`http://localhost:8000/articles/${id}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        if (data.status) {
          const newdata=articles.filter((article)=>article._id!==id)
          setArticles(newdata)
          toast.success('Article deleted successfully')
        }
      })
      .catch((err) => {
        console.log(err);
      });
      }
    return (<div className={styles.body}>
    <MyNavbar></MyNavbar>
    <h1 className={styles.title_expert}>Your Blogs</h1>
    <div style={{minHeight: "600px"}} className={styles.your_blogs}>
    {articles.map((article)=>{
        return (
            <Link to={`/articles/${article._id}`} style={{textDecoration:"none",color:"black"}}>
            <div  className={styles.your_blog}>
            <img className={styles.blog_image} src={require(`../../assets${article.image_link}`)} alt=""/>

            <div className={styles.content}>
              <h2>
              {article.title}
              </h2>
              
            </div>
            <Link to="/"> <button className={styles.edit}>EDIT</button></Link>                                               

            <Link to="" className={styles["delete-btn-link"]}>
              <button className={styles.delete} onClick={(e)=>{
                deleteArticle(e,article._id)
              }}>DELETE</button>
            </Link>
          </div>
          </Link>)
    })}

    </div>
    <Footer></Footer>
    
         
    </div>)

}
export default Yourwork