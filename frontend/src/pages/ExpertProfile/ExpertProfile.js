import React, { useEffect, useState } from 'react'
import MyNavbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom';
import Styles from './ExpertProfile.module.css';

export default function ExpertProfile() {
  const { userId } = useParams();
  const [userData, setUserData] = useState({})


  useEffect(() => {
    const loadProfileDetails = async () => {
      // fetch user using his id
      const url = `http://localhost:8000/user/${userId}`;
      console.log(url)
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
        })
        .catch((err) => {
          console.log(err);
        })
    }

    loadProfileDetails();

  }, [userId])



  return (
    <>
      <div>
        <MyNavbar />
        <div className={Styles.bigDiv}>
          <div className={Styles.card}>
            <div className={Styles.imgbox}>
              <img src={userData.profile_image_link} alt="Profile Image" />
            </div>
            <div className={Styles.content}>
              <div className={Styles.details}>
                <h2>
                  {userData.firstname} {userData.lastname}
                  <br />
                  <span>{userData.domain}</span>
                </h2>
                <div className={Styles.data}>
                  <a href={userData.insta_link} className={Styles.instaicon}>
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href={userData.github_link} className={Styles.githubicon}>
                    <i className="bi bi-github"></i>
                  </a>
                  <a href={userData.facebook_link} className={Styles.linkedinicon}>
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
                <div className={Styles.actionbtn}>
                  <button>Follow</button>
                  <button>Message</button>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.desc}>
            <h3>Personal Information</h3>
            <div className={Styles.info}>
              <div className={`edit_details ${userId === userData._id && userData.role !== 'admin' ? 'show' : ''}`}>
                <a style={{ display: 'none' }} href="/user/edit_e">
                  <i className="bi bi-pencil-square">
                    <span>Edit profile</span>
                  </i>
                </a>
              </div>
              <div className={Styles.firstname}>
                <h4 style={{ fontWeight: 500 }}>
                  <b>FirstName:</b>
                </h4>
                <h4>{userData.firstname}</h4>
              </div>
              <div className={Styles.lastname}>
                <h4 style={{ fontWeight: 500 }}>
                  <b>LastName:</b>
                </h4>
                <h4>{userData.lastname}</h4>
              </div>
              <div className={Styles["Date-of-birth"]}>
                <h4 style={{ fontWeight: 500 }}>
                  <b>Date-of-birth:</b>
                </h4>
                <h4>
                  {userData.doj}
                </h4>
              </div>
              <div className={Styles.Gender}>
                <h4 style={{ fontWeight: 500 }}>
                  <b>Gender:</b>
                </h4>
                <h4>
                  {userData.gender === 'M' ? 'Male' : userData.gender === 'F' ? 'Female' : userData.gender === 'Trans' ? 'Transgender' : ' '}
                </h4>
              </div>
              <div className={Styles.emailicon} style={{ marginBottom: '10px' }}>
                <i className="bi bi-envelope iconborder"></i>
                <h4 style={{ display: 'flex', alignItems: 'center' }}>
                  <a href={userData.email}>{userData.email}</a>
                  <br />
                </h4>
              </div>
              <div className={Styles.phoneicon} style={{ marginBottom: '10px' }}>
                <i className="bi bi-telephone iconborder"></i>
                <h4 style={{ display: 'flex', alignItems: 'center' }}>+91 {userData.phone}<br /></h4>
              </div>
              <div className={Styles.education} style={{ marginBottom: '10px' }}>
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
