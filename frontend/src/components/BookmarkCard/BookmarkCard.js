import React from 'react'
import Styles from './BookmarkCard.module.css';
import { useUser } from '../../providers/UserProvider';
import { useNavigate } from 'react-router-dom';

export default function BookmarkCard({data}) {
  const {user} = useUser();
  data.date_of_publish = new Date(data.date_of_publish);
  const navigate = useNavigate();

  const handleRemoveBookmark = () => {
    // remove bookmark
    const url = "http://localhost:8000/user/"+user._id+"/bookmarks/"+data._id;
    fetch(url,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
    })
    .catch((err)=>console.log(err));
  }

  const handleBookmarkClick = () => {
    // redirect to single article page
    navigate("/articles/"+data._id)
  }

  return (
    <div onClick={handleBookmarkClick} id={data.id} className={`card ${Styles["card"]}`}>
      <div className={Styles["bookmark-image-container"]}>
        <img className={`${Styles["card-img-top"]}`} src={data.image_link} alt="Card" />
      </div>

      <div className={`card-body ${Styles["card-body"]}`}>

        <div className={Styles["body-top"]}>
          <h2 className={`card-title ${Styles["card-title"]}`}>
            {data.title}
          </h2>
          <h6 className={Styles["writtenby"]}>
            Written by : {data.author_name}
          </h6>
          <h6 className={Styles["date-part"]}>
            Posted on: {data.date_of_publish.getDate()}-{data.date_of_publish.getMonth() + 1}-{data.date_of_publish.getFullYear()}
          </h6>
        </div>
        
        <button onClick={handleRemoveBookmark} className={Styles["remove-from-bookmarks"]}>Remove From Bookmarks</button>
        
      </div>
    </div>
  )
}
