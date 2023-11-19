import React, { useEffect, useState } from 'react'
import { useUser } from '../../providers/UserProvider'
import Styles from './Bookmarks.module.css'
import BookmarkCard from '../../components/BookmarkCard/BookmarkCard';
import MyNavbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export default function Bookmarks() {
  const [bookmarksData,setBookmarksData] = useState([])
  const {user} = useUser();

  useEffect(()=>{
    const url = "http://localhost:8000/user/"+user._id+"/bookmarks";
    // fetch bookmarks data
    fetch(url).then((res)=>res.json())
    .then((data)=>{
      setBookmarksData(data);
    })
    .catch((err)=>console.log(err));

  },[user])

  return (
    <div className={Styles.bookmarksBody}>
      <MyNavbar/>
       <h1 className={Styles["bookmarked-heading"]}>Bookmarked Articles</h1>
       <div className={Styles["cards"]}>
          {
            bookmarksData.map((data,i)=>{
              return <BookmarkCard key={i} data={data} />
            })
          }
        </div>
        <Footer/>
    </div>

  )
}
