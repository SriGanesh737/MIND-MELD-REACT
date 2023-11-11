import { useEffect, useState } from "react";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import styles from "../../components/AdminNavbar/AdminNavbar.module.css";
import CountUp from "react-countup";
import axios from 'axios'
const Admin = () => {
  const [experts,setExperts]=useState([])
   function getAllExperts(){
       axios.get("'http://localhost:8000/user/role/expert").then((data)=>{
        console.log(data)
       })
   }
   useEffect(()=>{
    getAllExperts()
   },[])
  return (
    <div className={styles.body}>
      <AdminNavbar></AdminNavbar>
      <div className={styles.right}>
        <h1 class={styles["admin-panel"]}>Admin Dashboard</h1>
        <div class={styles.stats}>
          <div className={styles.users_stats}>
            <div className={styles.symbol}>
              <i class="fa-solid fa-user"></i>
              <CountUp start={0} end={100} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <h2>Users Registered</h2>
            </div>
          </div>

          <div class={styles.experts_stats}>
            <div class={styles.symbol}>
              <i class="fa-solid fa-user-tie"></i>
              <CountUp start={0} end={100} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <h2>Experts Registered</h2>
            </div>
          </div>
          <div className={styles.articles_stats}>
            <div className={styles.symbol}>
              <i class="fa-sharp fa-solid fa-newspaper"></i>
              <CountUp start={0} end={100} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <h2>Blogs Posted</h2>
            </div>
          </div>
        </div>
        <div className={styles["recent-activities"]}>
            <div className={styles["recently-joined"]}>
            <h2>Recently Joined</h2>
            <div className={styles["recent-items"]}>
            <h3 style={{fontSize:"30px"}}>Experts</h3>
            </div>
            </div>
        </div>



      </div>
    </div>
  );
};
export default Admin;
