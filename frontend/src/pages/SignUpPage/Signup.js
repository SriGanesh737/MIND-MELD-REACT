const Signup=()=>{
    return (<div class="total_signup">

    <div class="container animated wow fadeInDown" data-wow-delay="0.1s">
  
      <div class="title">Sign Up</div>
      <div class="content" >
        <form action="/signup" method="post" class="myform" enctype="multipart/form-data">
          <div class="user-details">
            <div class="input-box animated wow fadeInLeft">
              <span class="details">First Name</span>
              <input type="text" placeholder="Enter First name" class="firstname" name="fname"  required />
              <span class="incfn" style={{color:"red"}}></span>
            </div>
            <div class="input-box animated wow fadeInRight">
              <span class="details">Last Name</span>
              <input type="text" placeholder="Enter Last Name" class="lastname" name="lastname"  required />
              <span class="incln" style={{color:"red"}}></span>
            </div>
            <div class="input-box animated wow fadeInLeft">
              <span class="details">Email</span>
              <input type="email" placeholder="Enter your email" class="email" name="email" required/>
              <span class="incem" style={{color:"red"}}></span>
            </div>
            <div class="input-box animated wow fadeInRight">
              <span class="details">Contact Number</span>
              <input type="text" placeholder="Enter your number" class="phno" name="phno" required/>
              <span class="inccn" style={{color:"red"}}></span>
            </div>
            <div class="input-box animated wow fadeInLeft">
              <span class="details">Password</span>
              <input type="password" placeholder="Enter your password" class="password" name="pswd" required />
              <span class="incpswd" style={{color:"red"}}></span>
            </div>
            <div class="input-box animated wow fadeInRight">
              <span class="details">Confirm Password</span>
              <input type="password" placeholder="Confirm your password" class="cnfpassword" name="cnfpswd" required />
              <span class="incnfpswd" style={{color:"red"}}></span>
            </div>
            <span style={{color:"aliceblue",fontSize: "13px"}}>*Password must contain letters,numbers and symbols and must be of length atleast 6</span>
          </div>
         <div class="option animated wow fadeInDown">
          <span class="details">Register as:</span>
  
          <select  name="registeras" id="motive" style={{width:"100px",height:"30px",padding: "3px",fontSize: "16px"}} >
            <option  value="user" >User</option>
            <option  value="expert">Expert</option>
  
          </select>
  
         </div>
         <div class="resume">
          <br />
          <span class="details">Upload Resume(Required for expert)</span>
          <br />
          <input type="file" name="file" accept="application/pdf" class="resume_upload" />
  
         </div>
         <br />
  
          <div class="button animated wow flipInY" data-wow-delay="0.5s">
           <button type="submit" value="Register"  class="register" >Register</button> 
             <p style={{textAlign:"center",marginTop: "10px"}}>Already a member? <a href="/login" style={{textDecoration: "none",color: "white",marginLeft: "5px"}}>Login</a></p>
          </div>
        </form>
      </div>
    </div>
    <div class="signup_image wow fadeInUp">
      <img src="../images/Sign up-pana.png" alt=""/>
    </div>
  </div>)

}
export default Signup;