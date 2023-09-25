import React from "react"

import {Routes, Route, useLocation, Navigate, Link, Outlet, useNavigate} from 'react-router-dom';

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
import Login from "./Pages/Admin/Auth/Login";
import useToken from "./store/slice/service/useToken";


function App() {
    const location = useLocation().pathname;
    const navigate = useNavigate();

    const { token, setToken } = useToken();

    const handleLogout = () => {
        setToken(null);
    };

    const ProtectedRoute = ({redirectPath = '/admin/login', children}) => {
        if (!token) {
            return <Login setToken={setToken} />;
        }
        return children ? children : <Outlet />;
    };

    return (
        <>
            {!location.includes("/admin") ? <Header/> : null}

            {location.includes("/admin") && token ? (<button onClick={handleLogout}>Déconnexion</button>) : null}

            {location === "/" ? <Feed/> : null}
            <Routes>
                <Route element={<ProtectedRoute token={token} />}>
                    <Route path='admin' element={<HOC child={CroqueList} />}/>
                    <Route path='admin/edit/:id' element={<EditCroqueForm />}/>
                </Route>
                <Route path='about' element={<Us />}/>
                <Route path='blog' element={<ArticleOne />}/>
                <Route exact path='/' element={<HOC child={Crok} />}/>


                <Route path='*' element={<h1>404</h1>}/>
            </Routes>
            {location === "/" ? <Menu/> : null}

            {!location.includes("/admin") ? <Footer/> : null}
        </>
    );
}

export default App;
