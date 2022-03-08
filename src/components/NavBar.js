import React,{ Component } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

class NavBar extends Component {
   
    render() { 

        return (
            <AuthContext.Consumer>{(AuthContext) => (
                <ThemeContext.Consumer>{(ThemeContext) => {
                    const {isLogged,toggleLogged} = AuthContext;
                    const {isLightTheme,light,dark} = ThemeContext;
                    const theme = isLightTheme ? light: dark;
                    return (
                        <nav style={{background: theme.ui,color:theme.syntax}}>
                        <h1>Context App</h1>
                        <div onClick={toggleLogged}>
                            {isLogged?'Logged in':'Logged out'}
                        </div>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                    );
                }}
                </ThemeContext.Consumer>
            )}
            </AuthContext.Consumer>
        );
    }
}
 
export default NavBar;