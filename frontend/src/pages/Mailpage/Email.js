import AdminNavbar from '../../components/AdminNavbar/AdminNavbar'
import styles from './sendmail.module.css'
const SendMail=()=>{
    return (
    <div className={styles.bodysss}>
    <AdminNavbar></AdminNavbar><div className={styles.sendmails}>
    <h2 style={{fontWeight:"700"}}>Email MINDMELD members</h2>
    <h3>Category</h3>
    <form action="/admin/mail" method="post">
<label >
    <input className={styles.checkboxinput}type="checkbox" name="experts" value="1"/>
    Experts
  </label>
  <label>
    <input className={styles.checkboxinput} type="checkbox" name="users" value="2"/>
   Users
  </label>
  <h3>Subject</h3>
  <input  type="text" name="subject" className={styles.subject} required />
  <h3>Message</h3>
  <textarea className={styles.textarea} id="" cols="100" rows="20" name="content" required></textarea>
  <p style={{color:"rgb(183, 187, 51)", fontWeight: "700",fontSize: "20px",  margin: "2px"}}>sent</p>
  <button type="submit" className={styles.submitbutn}>SEND MAIL</button>
</form>
</div>
</div>)
}
export default SendMail