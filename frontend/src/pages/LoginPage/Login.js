import styles from '../LoginPage/loginstyles.module.css'
import Questionvideo from '../../assets/images/Question - 69588.mp4'
import title from '../../assets/images/title5.png'
import LoginSlider from './Loginslider'
import mmicon from '../../assets/images/mm.jpg'
import { useState } from 'react'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailerror, setEmailerror] = useState('')


  const emailhandler = (event) => {
    setEmail(event.target.value)
    console.log(email)
  }
  const passwordhandler = (event) => {
    setPassword(event.target.value)
  }



  return (
    <div className={styles.total} >
      <div className={styles.left}>

        <div className={styles.vid}>
          <video width="170px" height="170px" autoPlay muted loop >
            <source src={Questionvideo} type="video/mp4" />
          </video>
        </div>

        <h2 className={styles.welcome}>  Welcome to </h2>

        <img className={styles.meld} src={title} alt="" />

        <div className={styles.caption} >The writing of a good Blog is a talent, but the conveying it is an art.</div>

        <div className={styles["slideshow-container"]}>
          <LoginSlider />
        </div>
      </div>


      <div className={styles.right}>
        <div className={styles.loginimage}>
          <img src={mmicon} height="120px" width="120px" style={{ borderRadius: "50%" }} className={styles.name} alt="" />
        </div>

        <div className={styles.wrapper}>
          <h1>LOGIN PAGE</h1>
          <div className={styles["form-container"]}>
            <div className={styles["slide-controls"]}>
              <input type="radio" name="slide" id="login" checked />

              <label for="login" className={styles.slide}>Login</label>

              <a href="signup" className={styles.slide} style={{ textDecoration: "none" }}>SignUp</a>

              <div className={styles["slider-tab"]}></div>
            </div>

            <div className={styles["form-inner"]}>
              <form action="/login" method="post" className={styles.loginform} >
                <div className={styles.field}>
                  <input type="email" name="email" placeholder="Email Address" value={email} required autocomplete="off" id="email" onChange={emailhandler} />
                </div>
                <div className={styles.field} style={{ marginBottom: "10px" }}>
                  <input type="password" name="password" placeholder="Password" value={password} className={styles.pswd} id={styles.pswd} required autocomplete="off" onChange={passwordhandler} />
                </div>
                <span style={{ color: "red", marginTop: "20px", fontSize: "18px" }} className={styles.errorMessage}>{emailerror != '' && emailerror}</span>

                <a href="/forgotpassword" style={{ color: "white", marginTop: "2px" }}>Forgot(or)reset password?</a>
                <button className={`${styles.field} ${styles.btn}`} id="loginsubmit" type="submit" style={{ backgroundColor: "black", fontSize: "20px" }} >
                  Login
                </button>
                <div className={styles["signup-link"]}>Not a member? <a href="signup">Signup now</a></div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>



  )

}

export default Login

