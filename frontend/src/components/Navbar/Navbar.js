import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BrandLogo from '../../assets/images/mm.jpg';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default function MyNavbar() { 
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
      <Navbar.Brand href="/home">
            <img
              src={BrandLogo}
              width="70"
              height="60"
              className={`d-inline-block align-top ${styles['brand-img']}`}
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" className={styles['nav-link']}>Home</Nav.Link>
            <Nav.Link as={Link} to="/contactus" className={styles['nav-link']}>ContactUs</Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className={styles['nav-link']}>AboutUs</Nav.Link>
            <Nav.Link as={Link} to="/queries" className={styles['nav-link']}>Questions</Nav.Link>
            <Nav.Link as={Link} to="/compose" className={styles['nav-link']}>Compose</Nav.Link>
            <Nav.Link as={Link} to="/bookmarks" className={styles['nav-link']}>Bookmarks</Nav.Link>
            <Nav.Link as={Link} to="/yourwork" className={styles['nav-link']}>Your Work</Nav.Link>
            <Nav.Link as={Link} to="/admin" className={styles['nav-link']}>Dashboard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="profileimg li_main" >
      <div>
        <i className="fa-solid fa-user"></i>
        <div className="dd_menu">
          <div className="dd_left">
            <ul>
             <li><i className="fa-solid fa-right-from-bracket"></i></li>
             <li ><i className="fa-solid fa-pen-to-square"></i></li>
             <li><i className="fa-solid fa-eye"></i></li>
            </ul>
          </div>
          <div className="dd_right">
            <li><a href="/logout" style={{textDecoration:'none',color:'black'}}>Logout</a></li>
            <li><a href="/user/edit_e" style={{textDecoration:'none',color:'black'}}>Edit</a></li>
            <li><a href="/user" style={{textDecoration:'none',color:'black'}}>View</a></li>
          </div>
        </div>

      </div>
    </div>
      </Container>
    </Navbar>
  )
}

