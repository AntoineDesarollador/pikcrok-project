


import React from "react"
import HOC from "./Components/HOC/GetData";

import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./Components/Header/Index.jsx";
import Footer from "./Components/Footer/Index";
import {store} from "./store/index.js";
import Crok from "./Pages/Homes/Crok/Crok.jsx";
import Feed from "./Pages/Homes/Feed/Feed";
import Menu from "./Pages/Homes/Menu/Menu";

import ArticleOne from "./Pages/Blog/Article/Article1";

import CroqueList from "./Pages/Admin/Components/CrokList";

import Us from "./Pages/About/About"


function App() {
  const location = useLocation();
  console.log(location);
  console.log(store)


  if (location.pathname.includes("/admin")) {
      return (
        
        <>
       <Routes >
       <Route  path="/admin" element={<HOC child={CroqueList} />} />
       </Routes>
       </>
  
      );
  } else if (location.pathname.includes("/about")){
    return (
      
      <>
      <Header />
      
      <Routes >
 
      <Route path="/about" element={<Us />} />
      </Routes>
   <Footer/>

   </>
  
    )
  } else if (location.pathname.includes("/blog")){
    return (
      
      <>
      <Header />
      
      <Routes >
 
      <Route path="/blog" element={<ArticleOne />} />
      </Routes>
   <Footer/>

   </>
  
    )
  }
  else {
      return (
        <>
        
        <Header />
        <Feed />
        <Routes >
        <Route  path="/" element={<HOC child={Crok} />} />
        </Routes>
        <Menu />

        <Footer/>

 
    </>
      );
  }
}

export default App;

