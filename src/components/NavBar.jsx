import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {useNavigate, Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function NavBar() {
    const navigate = useNavigate();
    const {isAuth, logout, login, signup} = useContext(AuthContext);

    return (
        <nav>
            <Link to="/">
              <span className="logo-container">
                <img src={logo} alt="logo"/>
                <h3>
                  Banana Security
                </h3>
              </span>
            </Link>

            {!isAuth ?
                <div>
                    <button
                        type="button"
                        onClick={login}
                    >
                        Log in
                    </button>

                    <button
                        type="button"
                        onClick={signup}
                    >
                        Registreren
                    </button>
                </div>
                :
                <button
                    type="button"
                    onClick={logout}
                >
                    Log out
                </button>
            }
        </nav>
    );
}

export default NavBar;