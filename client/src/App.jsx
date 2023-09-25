import React from "react"

import {Routes, Route, useLocation} from 'react-router-dom';

import Header from "./Components/Header/Index.jsx";
import Footer from "./Components/Footer/Index";
import Crok from "./Pages/Homes/Crok/Crok.jsx";

import ArticleOne from "./Pages/Blog/Article/Article1";

import CroqueList from "./Pages/Admin/Components/CrokList";

import Us from "./Pages/About/About"
import EditCroqueForm from "./Pages/Admin/Components/EditCroqueForm";
import Feed from "./Pages/Homes/Feed/Feed";
import Menu from "./Pages/Homes/Menu/Menu";
import HOC from "./Components/HOC/GetData";


function App() {
    const location = useLocation().pathname;
    return (
        <>
            {!location.includes("/admin") ? <Header/> : null}
            {location === "/" ? <Feed/> : null}
            <Routes>
                <Route path='admin' element={<HOC child={CroqueList} />}/>
                <Route path='admin/edit/:id' element={<EditCroqueForm />}/>
                <Route path='about' element={<Us />}/>
                <Route path='blog' element={<ArticleOne />}/>
                <Route exact path='/' element={<HOC child={Crok} />}/>
            </Routes>
            {location === "/" ? <Menu/> : null}

            {!location.includes("/admin") ? <Footer/> : null}
        </>
    );
}

export default App;
