import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BrandLogo from '../../assets/images/mm.jpg';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {useUser} from '../../providers/UserProvider';

export default function MyNavbar() { 
  const [isDropDown,setIsDropDown] = useState(false)
  const {user} = useUser();
  const toggleDropDown = ()=>{
    console.log(isDropDown);
    setIsDropDown(!isDropDown)
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg='dark' data-bs-theme='dark' style={{backgroundColor:'#212529'}}>
      <Navbar.Brand as={Link} to="/home">
            <img src={BrandLogo} width="70" height="60" className={`d-inline-block align-top ${styles['brand-img']}`} alt="React Bootstrap logo"/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" className={styles['nav-link']}>Home</Nav.Link>
            <Nav.Link as={Link} to="/contactus" className={styles['nav-link']}>ContactUs</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className={styles['nav-link']}>AboutUs</Nav.Link>
            <Nav.Link as={Link} to="/questions" className={styles['nav-link']}>Questions</Nav.Link>
            <Nav.Link as={Link} to="/compose" className={styles['nav-link']}>Compose</Nav.Link>
            <Nav.Link as={Link} to="/bookmarks" className={styles['nav-link']}>Bookmarks</Nav.Link>
            <Nav.Link as={Link} to="/yourwork" className={styles['nav-link']}>Your Work</Nav.Link>
            <Nav.Link as={Link} to="/admin" className={styles['nav-link']}>Dashboard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className={styles.profileimg} onClick={toggleDropDown}>
          <div className={styles["profileDropdownContainer"]}>
            <i className="fa-solid fa-user"></i>
            {isDropDown && (
              <div className={styles.dd_menu}>
              <div className={styles.dd_left}>
                <ul>
                  <li><i className="fa-solid fa-right-from-bracket"></i></li>
                  <li><i className="fa-solid fa-pen-to-square"></i></li>
                  <li><i className="fa-solid fa-eye"></i></li>
                </ul>
              </div>x
              <div className={styles["dd_right"]}>
                <li><Link to="/logout" style={{ textDecoration: 'none', color: 'black' }}>Logout</Link></li>
                <li><Link to="/user/edit_u" style={{ textDecoration: 'none', color: 'black' }}>Edit</Link></li>
                <li><Link to={"/user/"+user._id} style={{ textDecoration: 'none', color: 'black' }}>View</Link></li>
              </div>
             </div>
            )}
          </div>
        </div>
    </Navbar>
  )
}

