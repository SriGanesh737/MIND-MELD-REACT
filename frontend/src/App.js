import HomePage from "./pages/HomePage/HomePage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider } from "./providers/authProvider";
import Login from "./pages/LoginPage/Login";
import Signup from "./pages/SignUpPage/Signup";
import SingleArticle from "./pages/SingleArticlePage/SingleArticle";
import ContactUs from './pages/ContactUsPage/ContactUs'

import Admin from "./pages/AdminPage/Admin";


import Articles from "./pages/ArticlesPage/Articles";
import LandingPage from "./pages/LandingPage/LandingPage";
import ExpertProfile from "./pages/ExpertProfile/ExpertProfile";
import UserProvider from "./providers/UserProvider";
import Allarticles from "./pages/AllArticles/Allarticles";

function App() {
  return (

    <AuthProvider>
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/articles/:articleId" element={<SingleArticle/>}/>
        <Route path="/articles/topic/:topic" element= {<Articles/>} />
        <Route path="/contactus" element={<ContactUs/>}/>
        
        <Route path="/admin" element={<Admin/>} />
        <Route path="/admin/all_articles" element={<Allarticles></Allarticles>} />
        <Route path="/user/:userId" element={<ExpertProfile/>}/>

      </Routes>
    </Router>   
    </UserProvider> 
    </AuthProvider>

  );
}

export default App;
