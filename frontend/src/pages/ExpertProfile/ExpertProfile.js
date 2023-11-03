import React,{useEffect,useState} from 'react'
import MyNavbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import {useParams} from 'react-router-dom';

export default function ExpertProfile() {
    const { userId } = useParams();
    const [userData,setUserData] = useState('')

    useEffect(()=>{
        // fetch user using his id
        const url = `http://localhost:8000/user/${userId}`;
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
        setUserData(data)
          console.log(data);
        })
        .catch((err)=>{
          console.log(err);
        })
        
      },[userId])
    

    
  return (
    <>
    <div>
      <MyNavbar/> 





      <div className="bigDiv">
      <div className="card">
        <div className="imgbox">
          <img src={userData.profile_image_link} alt="Profile Image" />
        </div>
        <div className="content">
          <div className="details">
            <h2>
              {userData.firstname} {userData.lastname}
              <br />
              <span>{userData.domain}</span>
            </h2>
            <div className="data">
              <a href={userData.insta_link} className="instaicon">
                <i className="bi bi-instagram"></i>
              </a>
              <a href={userData.github_link} className="githubicon">
                <i className="bi bi-github"></i>
              </a>
              <a href={userData.facebook_link} className="linkedinicon">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <div className="actionbtn">
              <button>Follow</button>
              <button>Message</button>
            </div>
          </div>
        </div>
      </div>
      <div className="desc">
        <h3>Personal Information</h3>
        <div className="info">
          <div className={`edit_details ${userId === userData._id && registeras !== 'admin' ? 'show' : ''}`}>
            <a style={{ display: 'none' }} href="/user/edit_e">
              <i className="bi bi-pencil-square">
                <span>Edit profile</span>
              </i>
            </a>
          </div>
          <div className="firstname">
            <h4 style={{ fontWeight: 500 }}>
              <b>FirstName:</b>
            </h4>
            <h4>{userData.firstname}</h4>
          </div>
          <div className="lastname">
            <h4 style={{ fontWeight: 500 }}>
              <b>LastName:</b>
            </h4>
            <h4>{userData.lastname}</h4>
          </div>
          <div className="Date-of-birth">
            <h4 style={{ fontWeight: 500 }}>
              <b>Date-of-birth:</b>
            </h4>
            <h4>
              {userData.dateofbirth.getDate()}/{userData.dateofbirth.getMonth() + 1}/{userData.dateofbirth.getFullYear()}
            </h4>
          </div>
          <div className="Gender">
            <h4 style={{ fontWeight: 500 }}>
              <b>Gender:</b>
            </h4>
            <h4>
              {userData.gender === 'M' ? 'Male' : userData.gender === 'F' ? 'Female' : userData.gender === 'Trans' ? 'Transgender' : ' '}
            </h4>
          </div>
          <div className="emailicon" style={{ marginBottom: '10px' }}>
            <i className="bi bi-envelope iconborder"></i>
            <h4 style={{ display: 'flex', alignItems: 'center' }}>
              <a href={userData.email}>{userData.email}</a>
              <br />
            </h4>
          </div>
          <div className="phoneicon" style={{ marginBottom: '10px' }}>
            <i className="bi bi-telephone iconborder"></i>
            <h4 style={{ display: 'flex', alignItems: 'center' }}>+91 {userData.phone}<br /></h4>
          </div>
          <div className="education" style={{ marginBottom: '10px' }}>
            <i className="bi bi-book-half"></i>
            <h4 style={{ display: 'flex', alignItems: 'center' }}>{userData.qualification}<br /></h4>
          </div>
          <a href={`/download_pdf?id=${userData._id}`}>Resume</a>
        </div>
      </div>
    </div>







      <Footer />
    </div>
    </>
  )
}
