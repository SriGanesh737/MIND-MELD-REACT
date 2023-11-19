import MyNavbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Styles from './ContactUs.module.css';
import { useState } from 'react';
import contactUsImage from "../../assets/images/Contact us-rafiki.svg";

export default function ContactUs({data}) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState(''); 
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
 
  function onlyLetters(str) {
    return /^[A-Za-z\s]*$/.test(str);
  }

  function onlyNumbers(str) {
    return /^[0-9]*$/.test(str);
  }

  function validateFirstName(firstName) {
    if(!onlyLetters(firstName)) {
      setFirstNameError('Incorrect first name');
    }
    else {
     setFirstNameError('');
    }
  }

  function validateLastName(lastName) {
    if(!onlyLetters(lastName)) {
      setLastNameError('Incorrect last name');
    }
    else {
      setLastNameError('');
    }
  }

  function validatePhoneNumber(phoneNumber) {
    if(!onlyNumbers(phoneNumber) || phoneNumber.length !== 10) {
      setPhoneNumberError('Incorrect phone number');
    }
    else {
      setPhoneNumberError('');
    }
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    validateFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    validateLastName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
    validatePhoneNumber(e.target.value);
  }

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }





  return (
    <>
    <MyNavbar/>
    <div class={Styles.body}>
    <div class={Styles["contactus-container"]}>
        <div class={Styles["contactus-left"]}>
            <h2 class={Styles["contactus-title"]}>
                Contact Info
            </h2>
            <div class={Styles["contactus-links"]}>
                <p class={Styles["single-link"]}><i class="fa-solid fa-location-crosshairs"></i>Indian Institute of Information Technology ,
                Sricity</p>
                <p class={Styles["single-link"]}><i class="fa-solid fa-phone"></i>+91 1234567890</p>
                <p class={Styles["single-link"]}><i class="fa-solid fa-envelope"></i> contactmindmeld2003@gmail.com</p>
                <p class={Styles["single-link"]}><i class="fa-brands fa-facebook"></i>facebook</p>
                <p class={Styles["single-link"]}><i class="fa-brands fa-linkedin"></i>linked in</p>
                <p class={Styles["single-link"]}><i class="fa-brands fa-twitter"></i>twitter</p>
            </div>
            <div class={Styles["contactus-image"]}>
              <img src={contactUsImage} alt=""/>
            </div>
        </div>
        <div class={Styles["contactus-right"]}>
            <h2 class={Styles["contactus-title"]}>
                Send a message
            </h2>
          <form action="/contactus" method="post" class={`${Styles["contactus-form"]} ${Styles["myform"]}`}>

              <input value={firstName} onChange={handleFirstNameChange} placeholder="First Name" type="text" name="firstname" class={Styles["firstname"]}/>
              <span class="incfn" style={{color: "rgba(243, 26, 26, 0.819)"}}>{firstNameError}</span>

              <input value={lastName} onChange={handleLastNameChange} placeholder="Last Name" type="text" name="lastname" class={Styles["lastname"]}/>
              <span class="incln" style={{color: "rgba(243, 26, 26, 0.819)"}}>{lastNameError}</span>

              <input value={email} onChange={handleEmailChange} placeholder="Email" type="email" name="email" class="email"/>

              <input value={phoneNumber} onChange={handlePhoneNumberChange} placeholder="Phone Number" type="text" name="phoneno" class={Styles["phoneno"]}/>
              <span class="incph" style={{color: "rgba(243, 26, 26, 0.819)"}}>{phoneNumberError}</span>

              <textarea value={message} onChange={handleMessageChange} name="message" id="contactus-msg" cols="30" rows="20" class={Styles["message"]} placeholder="Leave a Message"></textarea>
              <p>{data}</p>
              
              <button class={`${Styles["contactus-submit"]} ${Styles["register"]}`} type="submit">Submit</button>
          </form>
        </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}













