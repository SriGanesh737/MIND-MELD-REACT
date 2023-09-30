 import styles from '../LoginPage/loginstyles.module.css'
 import { useState } from 'react'
const LoginForm=()=>{
    const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
   const [emailerror,setEmailerror]=useState('')
  

   const emailhandler=(event)=>{
      setEmail(event.target.value)
      console.log(email)
   }
   const passwordhandler=(event)=>{
    setPassword(event.target.value)
   }

    return (<form action="/login" method="post" className={styles.loginform} >
    <div className={styles.field}>
      <input type="email" name="email" placeholder="Email Address" value={email} required autocomplete="off" id="email" onChange={emailhandler}/>
    </div>
    <div className={styles.field} style={{marginBottom: "10px"}}>
      <input type="password" name="password" placeholder="Password" value={password} className={styles.pswd} id={styles.pswd} required autocomplete="off" onChange={passwordhandler}/>
    </div>
    <span style={{color:"red" ,marginTop: "20px",fontSize: "18px"}} className={styles.errorMessage}>{emailerror!='' && emailerror}</span> 

    <a href="/forgotpassword" style={{color: "white",marginTop:"2px"}}>Forgot(or)reset password?</a>
    <button className={`${styles.field} ${styles.btn}`} id="loginsubmit" type="submit" style={{backgroundColor: "black",fontSize: "20px",color:"white"}} >
    Login
    </button>
    <div className={styles["signup-link"]}>Not a member? <a href="signup">Signup now</a></div>
  </form>)
}
export default LoginForm;