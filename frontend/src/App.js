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
import UserPage from "./pages/UserPage/UserPage";

import ComposePage from "./pages/ComposePage/ComposePage";

import Yourwork from "./pages/YourWork/Yourwork";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setArticles} from './store/article-slice'
import { getUsers,getExperts} from './store/user-slice'
import AboutUs from "./pages/AboutUs/AboutUs";


function App() {
  const dispatch=useDispatch()
  function getAllArticles() 
  {
    axios
      .get("http://localhost:8000/articles")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        dispatch(setArticles(data))
        console.log(data)
        
       
      });
  }
  function getAllExperts() {
    axios
      .get("http://localhost:8000/user/role/expert")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch(getExperts(data))
        
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function getAllusers() {
    axios
      .get("http://localhost:8000/user/role/user")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        
        dispatch(getUsers(data))
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    console.log("hiii")
    getAllArticles();
    getAllExperts();
    getAllusers();
  }, []);
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
        <Route path="/yourwork" element={<Yourwork/>}/>

        <Route path="/admin" element={<Admin/>} />
        <Route path="/admin/all_articles" element={<Allarticles></Allarticles>} />
        <Route path="/admin/all_experts" element={<AllExperts></AllExperts>} />
        <Route path="/admin/query" element={<Query></Query>}></Route>
        <Route path="/admin/mail" element={<SendMail></SendMail>}></Route>
        <Route path="/expert/:userId" element={<ExpertProfile/>}/>
        <Route path="/logout" element={<LandingPage></LandingPage>}></Route>
        <Route path="/user/:userid" element={<UserPage/>}> </Route>
        <Route path="/aboutus" element={<AboutUs/>}> </Route>

      </Routes>
    </Router>   
    </UserProvider> 
    </AuthProvider>

  );
}

export default App;
