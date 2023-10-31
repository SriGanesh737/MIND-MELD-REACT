import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider } from "./providers/authProvider";
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/SignUpPage/Signup";
import SingleArticle from "./pages/SingleArticlePage/SingleArticle";
import ContactUs from './pages/ContactUsPage/ContactUs'
import Articles from "./pages/ArticlesPage/Articles";
function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/articles/:articleId" element={<SingleArticle/>}/>
        <Route path="/articles/topic/:topic" element= {<Articles/>} />
        <Route path="/contactus" element={<ContactUs/>}/>
      </Routes>
    </Router>    
    </AuthProvider>

  );
}

export default App;
