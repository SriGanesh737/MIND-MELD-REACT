import { useEffect, useState } from "react";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import styles from "../../components/AdminNavbar/AdminNavbar.module.css";
import CountUp from "react-countup";
import axios from "axios";
import { useSelector } from "react-redux";
const Admin = () => {
  
  const articles=useSelector((state)=>state.articles.articles)
  const users=useSelector((state)=>state.users.users)
  const experts=useSelector((state)=>state.users.experts)
  const expertsize=experts.length
  const usersize=users.length;
  const articlesize=articles.length;
  
 
  return (
    <div className={styles.body}>
      <AdminNavbar></AdminNavbar>
      <div className={styles.right}>
        <h1 class={styles["admin-panel"]}>Admin Dashboard</h1>
        <div class={styles.stats}>
          <div className={styles.users_stats}>
            <div className={styles.symbol}>
              <i class="fa-solid fa-user"></i>
              <CountUp start={0} end={usersize} >
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
              <CountUp start={0} end={expertsize}>
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
              <CountUp start={0} end={articlesize} delay={0}>
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
              <h3 style={{ fontSize: "30px" }}>Experts</h3>
              {experts.slice(0,2).map((eachone) => {
                return (
                  <div className={styles["recent-item"]}>
                    <div className={styles["name-container"]}>
                      <div className={styles["user-name"]}>
                        {eachone.firstname} {eachone.lastname}
                      </div>
                      <span className={styles.role_tag}>Expert</span>
                    </div>
                    <div className={styles["sub-details"]}>
                      <div className={styles.email}>{eachone.email}</div>
                      <div class={styles.phone}>{eachone.phone}</div>
                    </div>
                  </div>
                );
              })}
              <h3 style={{ fontSize: "30px", textAlign: "left" }}>Users</h3>
              {users.slice(usersize-2,usersize).map((eachone) => {
                return (
                  <div className={styles["recent-item"]}>
                    <div className={styles["name-container"]}>
                      <div className={styles["user-name"]}>
                        {eachone.firstname} {eachone.lastname}
                      </div>
                      <span className={styles.role_tag}>User</span>
                    </div>
                    <div className={styles["sub-details"]}>
                      <div className={styles.email}>{eachone.email}</div>
                      <div class={styles.phone}>{eachone.phone}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles["recently-posted"]}>
                 <h2>Recently Posted</h2>
                <div class={styles["recent-items"]}>
                {articles.slice(0,5).map((article)=>{
                         return (<div className={styles["recent-item"]}>
                        <div class={styles["title-container"]}>
                            <div class={styles["blog-title"]}>{article.title.substring(0,30)}...</div>
                            <span class={styles["topic-tag"]}>{article.topic}</span>
                        </div>


                        <div class={styles["sub-details"]}>
                        <div class="blog-time">{ new Date(article.date_of_publish).getDate()}/{new Date(article.date_of_publish).getMonth()+1}/{ new Date(article.date_of_publish).getFullYear() }  { new Date(article.date_of_publish).getHours()}:{new Date(article.date_of_publish).getMinutes() }:{new Date(article.date_of_publish).getSeconds()}</div> 
                        <div class={styles["blog-author"]}>{article.author_name}</div>
                        </div>
                    </div>)
                    })}
                    </div>
                    
                


                </div>
                






















        </div>
      </div>
    </div>
  );
};
export default Admin;
