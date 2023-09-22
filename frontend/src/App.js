import ContactUs from "./pages/ContactUsPage/ContactUs";
import Landingpage from "./pages/LandingPage/Landingpage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landingpage" element={<Landingpage/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
      </Routes>
    </Router>    
  );
}

export default App;
