import { useState, useEffect } from "react";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import styles from "./allarticles.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import {toast} from 'sonner'
const Allarticles = () => {
  const [articles, setArticles] = useState([]);
  function getAllArticles() {
    axios
      .get("http://localhost:8000/articles")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(data[0].date_of_publish);
        setArticles(data.reverse());
      });
  }
  useEffect(() => {
    getAllArticles();
  }, []);
  function deletearticle(id, e) {
    e.preventDefault();
    console.log(id)
    axios
      .delete(`http://localhost:8000/articles/${id}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        if (data.status) {
          const newdata=articles.filter((article)=>article._id!==id)
          setArticles(newdata)
          toast.success('Article deleted successfully')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={styles.body}>
      <AdminNavbar></AdminNavbar>
      <div className={styles.right}>
        <div className={styles.heading}>
          <h2>All articles</h2>
        </div>
        <div className={styles.allcards}>
          {articles &&
            articles.map((article) => {
              return (
                <div>
                  <Link
                    to={`/articles/${article._id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className={styles.singlecard}>
                      <div className={styles.image}>
                        <img src={require(`../../assets${article.image_link}`)} alt="" />
                      </div>
                      <div className={styles.content}>
                        <div className={styles.titler}>
                          <div className={styles.title}>
                            {article.title.substring(0, 50)}...
                          </div>
                          <div class={styles.topicsss}>{article.topic}</div>
                        </div>
                        <div className={styles.tags}>
                          {article.tags.slice(0, 3).map((tag) => {
                            return <div className={styles.ettag}>{tag}</div>;
                          })}
                        </div>
                      </div>
                      <div className="bottom">
                        <div className={styles.writer}>
                          --{article.author_name}
                        </div>
                        <div className={styles.deletion}></div>
                        <button
                          className={styles.deleteArticle}
                          onClick={(e) => {
                            deletearticle(article._id, e);
                          }}
                        >
                          DELETE
                        </button>
                      </div>
                    </div>
                  </Link>
                  {!articles.length && (
                    <div
                      className="not_available"
                      style={{
                        height: "300px",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <img src={require(`../../assets${null.png}`)} alt="" />
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Allarticles;
