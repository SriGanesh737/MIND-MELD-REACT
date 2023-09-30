import ContactUs from "./pages/ContactUsPage/ContactUs";
import Landingpage from "./pages/LandingPage/Landingpage";
import Login from '../src/pages/LoginPage/Login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from "./pages/SignUpPage/Signup";
function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/landingpage" element={<Landingpage/>}/>
    //     <Route path="/contactus" element={<ContactUs/>}/>
    //     <Route path='/login' element={<Login />} />
    //     <Route path="/signp" element={<Signup/>} />
    //   </Routes>
    // </Router>
    <Signup></Signup>    
  );
}

export default App;
