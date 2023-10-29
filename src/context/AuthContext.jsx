import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext({});

const AuthContextProvider = ({children}) => {
    const [isAuth, toggleIsAuth] = useState(false);
    const navigate = useNavigate();

    function login() {
        toggleIsAuth(true);
        console.log('Gebruiker is ingelogd!');
        navigate('/profile')
    }

    function logout() {
        toggleIsAuth(false);
        console.log('Gebruiker is uitgelogd!');
        navigate('/')
    }

    function signup() {
        console.log('Gebruiker registreren!');
        navigate('/signin')
    }

    const data = {
        isAuth: isAuth,
        logout: logout,
        login: login,
        signup: signup,
    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
