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
import AllExperts from "./pages/AllExperts/AllExperts";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import Query from "./pages/Querypage/Query";
import SendMail from "./pages/Mailpage/Email";
import ComposePage from "./pages/ComposePage/ComposePage";

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
        <Route path="/bookmarks" element={<Bookmarks/>}/>
        <Route path="/compose" element={<ComposePage/>}/>
        
        <Route path="/admin" element={<Admin/>} />
        <Route path="/admin/all_articles" element={<Allarticles></Allarticles>} />
        <Route path="/admin/all_experts" element={<AllExperts></AllExperts>} />
        <Route path="/admin/query" element={<Query></Query>}></Route>
        <Route path="/admin/mail" element={<SendMail></SendMail>}></Route>
        <Route path="/user/:userId" element={<ExpertProfile/>}/>
        <Route path="/logout" element={<LandingPage></LandingPage>}></Route>

      </Routes>
    </Router>   
    </UserProvider> 
    </AuthProvider>

  );
}

export default App;
