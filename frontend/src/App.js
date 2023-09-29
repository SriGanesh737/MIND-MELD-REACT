import ContactUs from "./pages/ContactUsPage/ContactUs";
import Landingpage from "./pages/LandingPage/Landingpage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider } from "./providers/authProvider";
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/SignUpPage/Signup";
function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/landingpage" element={<Landingpage/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
      </Routes>
    </Router>    
    </AuthProvider>
  );
}

export default App;
