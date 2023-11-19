import { useEffect, useState } from "react";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import styles from "../../components/AdminNavbar/AdminNavbar.module.css";
import CountUp from "react-countup";
import axios from "axios";
const Admin = () => {
  const [experts, setExperts] = useState([]);
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState([]);
  const [expertsize,setExpertssize]=useState(0)
  const [usersize,setUsersize]=useState(0);
  const [articlesize,setArticlesize]=useState(0)
  function getAllExperts() {
    axios
      .get("http://localhost:8000/user/role/expert")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setExpertssize(data.length)
        setExperts(data.slice(data.length-2, data.length).reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function getAllusers() {
    axios
      .get("http://localhost:8000/user/role/user")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setUsersize(data.length)
        setUsers(data.slice(data.length-2, data.length).reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function getAllArticles() {
    axios
      .get("http://localhost:8000/articles")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setArticlesize(data.length)
        setArticles(data.slice(data.length-5, data.length).reverse());
      });
  }
  useEffect(() => {
    getAllExperts();
    getAllusers();
    getAllArticles();
  }, []);
  return (
    <div className={styles.body}>
      <AdminNavbar></AdminNavbar>
      <div className={styles.right}>
        <h1 class={styles["admin-panel"]}>Admin Dashboard</h1>
        <div class={styles.stats}>
          <div className={styles.users_stats}>
            <div className={styles.symbol}>
              <i class="fa-solid fa-user"></i>
              <CountUp start={0} end={usersize} delay={1}>
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
              <CountUp start={0} end={expertsize} delay={1}>
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
              {experts.map((eachone) => {
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
              {users.map((eachone) => {
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
            </div>
          </div>
          <div className={styles["recently-posted"]}>
                 <h2>Recently Posted</h2>
                <div class={styles["recent-items"]}>
                {articles.map((article)=>{
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
