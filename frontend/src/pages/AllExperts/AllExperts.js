import { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import styles from './allexperts.module.css'
import axios from 'axios'
import { Link } from "react-router-dom";
const AllExperts=()=>{
    const [experts,setExperts]=useState([])
    function getAllExperts() {
        axios.get("http://localhost:8000/user/role/expert")
          .then((response) => {
            return response.data;
          })
          .then((data) => {
            setExperts(data.reverse());
          })
          .catch((err) => {
            console.log(err);
          });
      }
   return <div className={styles.body}>
    <AdminNavbar></AdminNavbar>
    <div className={styles.right}>
    <h1 style={{marginLeft: "30px",marginBottom:"20px",padding: "3px",borderBottom:"6px solid rgb(47, 46, 46)",width: "205px",borderRight: "6px solid rgb(47, 46, 46)",fontSize: "35px"}}>All experts</h1>
    <div className={styles.total_experts}>
    {experts.map((expert)=>{
        return (<Link to=""></Link>)

    })}

    </div>

    </div>
    </div>

}

export default AllExperts;
