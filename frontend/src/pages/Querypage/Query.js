import { useState } from "react";
import styles from "./querypage.module.css";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
const Query = () => {
  const [queries, setQueries] = useState([{firstname:"likith",lastname:"andavarapu",email:"likith.a21@iiits.in",phone:"890-728272982",message:"this website is awesome"},{firstname:"likith",lastname:"andavarapu",email:"likith.a21@iiits.in",phone:"890-728272982",message:"this website is awesome"},{firstname:"likith",lastname:"andavarapu",email:"likith.a21@iiits.in",phone:"890-728272982",message:"this website is awesome"},{firstname:"likith",lastname:"andavarapu",email:"likith.a21@iiits.in",phone:"890-728272982",message:"this website is awesome"}]);
  return (
    < div className={styles.bodyss}>
    <AdminNavbar></AdminNavbar>
      <h1>User Queries</h1>
      <div className={styles.All_queries}>
        {queries.map((query) => {
          return (
            <div className={styles.query}>
              <h4>
                <span>First Name:</span>
                {query.firstname}
              </h4>
              <h4>
                <span>Last Name:</span>
               { query.lastname}
              </h4>
              <h4>
                <span>Email:</span>
                <a href="https://www.gmail.com">{query.email}</a>
              </h4>
              <h4>
                <span>Phone No:</span>
                {query.phone}
              </h4>
              <h4>
                <span>query:</span>
                {query.message}
              </h4>
              <button className={styles.resolve_btn}>Mark as resolved</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Query;
