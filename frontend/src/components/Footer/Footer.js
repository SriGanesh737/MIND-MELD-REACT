import React from 'react'
import styles from './Footer.module.css'
import { Container,Row } from 'react-bootstrap'

export default function Footer() {
  return (
    <>
    <footer>
        <Container>
        <div class={styles["footer-row"]}>
    <div class={styles["footer-col"]}>
        <h4>Navigations</h4>
        <ul>
            <li><a href="landingpage">Home</a></li>
            <li><a href="aboutus">About Us</a></li>
            <li><a href="contactus">Contact Us</a></li>
            <li><a href="askquery">FAQ</a></li>
        </ul>
    </div>
    <div class={styles["footer-col"]}>
       <h4>Quick Links</h4>
       <ul>
            <li><a href="posts?topic=education">Education</a></li>
            <li><a href="posts?topic=fashion">Fashion</a></li>
            <li><a href="posts?topic=health">Health</a></li>

            <li><a href="posts?topic=sports">Sports</a></li>
            <li><a href="posts?topic=entertainment">Entertainment</a></li>
            <li><a href="posts?topic=news_updates">News_updates</a></li>

    </ul>

    </div>
    <div class={styles["footer-col"]}>
        <h4>Contact Info</h4> 
        <ul>
            <li><a href="#"><i class="fa-solid fa-phone"></i><span>+91 9273635224</span></a></li>
            <li><a href="#"><i class="fa-solid fa-envelope"></i><span>mindmeld@gmail.com</span></a></li>
            <li><a href="#"><i class="fa-solid fa-location-dot"></i><span>Sricity Chittoor ,517646</span></a></li>
        </ul>
    </div>
</div>
        </Container>

</footer>
<p class={styles["copyright"]}><i class="fa-regular fa-copyright"></i>2023 Copyright:<span>MindMeld.com</span></p>
    </>
  )
}
