import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage/Landingpage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider } from "./providers/authProvider";
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/SignUpPage/Signup";
import ContactUs from './pages/ContactUsPage/ContactUs'
function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/contactus" element={<ContactUs/>}/>
      </Routes>
    </Router>    
    </AuthProvider>

  );
}

export default App;
