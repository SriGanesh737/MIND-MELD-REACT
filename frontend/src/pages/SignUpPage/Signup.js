import styles from "../SignUpPage/signup.module.css";
import signupimage from "../../assets/images/signup.png";
import useInput from "../../hooks/use-registerinput";
import { useState } from "react";
const Signup = () => {
  const {
    value: enteredfirstname,
    isValid: firstnameIsValid,
    hasError: firstnameInputHasError,
    valueChangeHandler: firstnameChangedHandler,
    inputBlurHandler: firstnameBlurHandler,
    reset: resetfirstNameInput,
  } = useInput((value) => value.trim() !== "" && /^[a-zA-Z]+$/.test(value));
  const {
    value: enteredLastname,
    isValid: lastnameIsValid,
    hasError: lastnameInputHasError,
    valueChangeHandler: lastnameChangedHandler,
    inputBlurHandler: lastnameBlurHandler,
    reset: resetlastNameInput,
  } = useInput((value) => value.trim() !== "" && /^[a-zA-Z]+$/.test(value));

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemailInput,
  } = useInput((value) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(value);
  });

  const {
    value: enteredcontactnumber,
    isValid: contactnumberIsValid,
    hasError: contactnumberInputHasError,
    valueChangeHandler: contactnumberChangedHandler,
    inputBlurHandler: contactnumberBlurHandler,
    reset: resetcontactnumberInput,
  } = useInput((value) => {
    const phoneRegex = /^[0-9()+\-.\s]*$/;

    return phoneRegex.test(value) && value.length === 10;
  });

  const {
    value: enteredpassword,
    isValid: passwordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetpasswordInput,
  } = useInput((value) => {
    if (value.length <= 6) {
      return false;
    }
    // Check if the value includes at least one special symbol, one digit, and one letter
    const specialSymbolRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|-]/; // Modify this regex to include your desired special symbols.
    const digitRegex = /\d/;
    const letterRegex = /[a-zA-Z]/;

    return (
      specialSymbolRegex.test(value) &&
      digitRegex.test(value) &&
      letterRegex.test(value)
    );
  });

  const {
    value: enteredcnfpassword,
    isValid: cnfpasswordIsValid,
    hasError: cnfpasswordInputHasError,
    valueChangeHandler: cnfpasswordChangedHandler,
    inputBlurHandler: cnfpasswordBlurHandler,
    reset: resetcnfpasswordInput,
  } = useInput((value) => value === enteredpassword);
  const [type, setType] = useState("user");
  const [file, setFile] = useState("");
  const typeChangehandler = (ev) => {
    setType(ev.target.value);
  };
  const fileChangehandler = (ev) => {
    setFile(ev.target.value);
  };

  let formisvalid = false;
  if (
    firstnameIsValid &&
    lastnameIsValid &&
    emailIsValid &&
    contactnumberIsValid &&
    passwordIsValid &&
    cnfpasswordIsValid
  ) {
    if (type === "user") formisvalid = true;
    else {
      if (file != "") formisvalid = true;
    }
  }
  const submitHandler = (event) => {
    event.preventDefault();
    if (formisvalid) {
      let details = {
        firstname: enteredfirstname,
        lastname: enteredLastname,
        email: enteredEmail,
        contact: enteredcontactnumber,
        password: enteredpassword,
        type: type,
        
      };
      if(type==='expert')
      {
        details={...details,resume:file}
      }
      console.log(details)
      resetfirstNameInput();
      resetlastNameInput();
      resetcnfpasswordInput();
      resetcontactnumberInput();
      resetemailInput();
      resetemailInput();
      setFile("");
      setType("user");
    } else console.log("wrong details");
  };

  return (
    <div className={styles.total_signup}>
      <div className={styles.container}>
        <div className={styles.title}>Sign Up</div>
        <div className={styles.content}>
          <form
            className={styles.myform}
            enctype="multipart/form-data"
            onSubmit={submitHandler}
          >
            <div className={styles["user-details"]}>
              <div
                className={`${styles["input-box"]} ${
                  firstnameInputHasError ? styles.invalid : ""
                } animated wow fadeInLeft`}
              >
                <span className={styles.details}>First Name</span>
                <input
                  type="text"
                  placeholder="Enter First name"
                  className={styles.firstname}
                  name="fname"
                  value={enteredfirstname}
                  onChange={firstnameChangedHandler}
                  onBlur={firstnameBlurHandler}
                  required
                />
                {/* <span className={styles.incfn} style={{color:"red"}}></span> */}
              </div>
              <div
                className={`${styles["input-box"]} ${
                  lastnameInputHasError ? styles.invalid : ""
                } animated wow fadeInRight`}
              >
                <span className={styles.details}>Last Name</span>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className={styles.lastname}
                  name="lastname"
                  value={enteredLastname}
                  onChange={lastnameChangedHandler}
                  onBlur={lastnameBlurHandler}
                  required
                />
                {/* <span className={styles.incln} style={{color:"red"}}></span> */}
              </div>
              <div
                className={`${styles["input-box"]} ${
                  emailInputHasError ? styles.invalid : ""
                } animated wow fadeInLeft`}
              >
                <span className={styles.details}>Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.email}
                  value={enteredEmail}
                  onChange={emailChangedHandler}
                  onBlur={emailBlurHandler}
                  name="email"
                  required
                />
                {/* <span className="incem" style={{color:"red"}}></span> */}
              </div>
              <div
                className={`${styles["input-box"]} ${
                  contactnumberInputHasError ? styles.invalid : ""
                } animated wow fadeInRight`}
              >
                <span className={styles.details}>Contact Number</span>
                <input
                  type="text"
                  placeholder="Enter your number"
                  name="phno"
                  value={enteredcontactnumber}
                  onChange={contactnumberChangedHandler}
                  onBlur={contactnumberBlurHandler}
                  required
                />
                {/* <span  style={{color:"red"}}></span> */}
              </div>
              <div
                className={` ${styles["input-box"]} ${
                  passwordInputHasError ? styles.invalid : ""
                } animated wow fadeInLeft`}
              >
                <span className={styles.details}>Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="password"
                  name="pswd"
                  value={enteredpassword}
                  onChange={passwordChangedHandler}
                  onBlur={passwordBlurHandler}
                  required
                />
                {/* <span className="incpswd" style={{color:"red"}}></span> */}
              </div>
              <div
                className={` ${styles["input-box"]} ${
                  cnfpasswordInputHasError ? styles.invalid : ""
                }  animated wow fadeInRight`}
              >
                <span className={styles.details}>Confirm Password</span>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="cnfpassword"
                  value={enteredcnfpassword}
                  onChange={cnfpasswordChangedHandler}
                  onBlur={cnfpasswordBlurHandler}
                  name="cnfpswd"
                  required
                />
                {/* <span className="incnfpswd" style={{color:"red"}}></span> */}
              </div>
              <span style={{ color: "aliceblue", fontSize: "13px" }}>
                *Password must contain letters,numbers and symbols and must be
                of length atleast 6
              </span>
            </div>
            <div className={`styles.option animated wow fadeInDown`}>
              <span className={styles.details}>Register as:</span>

              <select
                name="registeras"
                id="motive"
                style={{
                  width: "100px",
                  height: "30px",
                  padding: "3px",
                  fontSize: "16px",
                }}
                onChange={typeChangehandler}
              >
                <option value="user">User</option>
                <option value="expert">Expert</option>
              </select>
            </div>
            {type === "expert" && (
              <div className={styles.resume}>
                <br />
                <span className={styles.details}>
                  Upload Resume(Required for expert)
                </span>
                <br />
                <input
                  type="file"
                  name="file"
                  accept="application/pdf"
                  className="resume_upload"
                  onChange={fileChangehandler}
                />
              </div>
            )}
            <br />

            <div
              className={`styles.button animated wow flipInY`}
              data-wow-delay="0.5s"
            >
              <button
                type="submit"
                value="Register"
                className={styles.register}
              >
                Register
              </button>
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                Already a member?{" "}
                <a
                  href="/login"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginLeft: "5px",
                  }}
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className={`${styles["signup_image"]} wow fadeInUp`}>
        <img src={signupimage} alt="" />
      </div>
    </div>
  );
};
export default Signup;
