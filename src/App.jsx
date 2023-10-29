import React, {useContext} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import {AuthContext} from "./context/AuthContext";

function App() {
    const { isAuth } = useContext(AuthContext);

    return (
        <>
            <NavBar/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={isAuth ? <Profile/> : <p>Gebruiker is nog niet ingelogd</p>}/>
                    <Route path="/signin"  element={isAuth ? <p>U bent al ingelogd</p> : <SignIn/>}/>
                    <Route path="/signup"  element={isAuth ? <p>Log eerst uit om u te kunnen registreren</p> : <SignUp/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
