import { useEffect, useState } from "react";
import styles from "./querypage.module.css";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import axios from "axios";
const Query = () => {
  const [queries, setQueries] = useState([]);
  function getQueries()
  {
    axios.get("http://localhost:8000/utility/queries").then((res)=>{
      return res.data;
    }).then((data)=>{
      // console.log(data)
      setQueries(data.data)
    })
  }
  function resolvequery(id)
  {
    axios.put(`http://localhost:8000/utility/query/${id}`).then((res)=>{
      return res.data;
    }).then((data)=>{
      console.log(data.success)
      if(data.success)
      {
         const newqueries=queries.filter((query)=>query._id!==id)
         setQueries(newqueries)
      }
      
    })
  }
  useEffect(()=>{
    getQueries()
  },[])
  return (
    < div className={styles.bodyss}>
    <AdminNavbar></AdminNavbar>
      <h1>User Queries</h1>
      <div className={styles.All_queries}>
      {console.log(queries)}
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
              <button className={styles.resolve_btn} onClick={()=>{resolvequery(query._id)}}>Mark as resolved</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Query;
