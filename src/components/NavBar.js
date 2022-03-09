import React,{ useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';


const NavBar = () => {
    const {isLightTheme,light,dark} = useContext(ThemeContext);
    const {isLogged,toggleLogged} = useContext(AuthContext);
    const theme = isLightTheme? light:dark;
    return  (   <nav style={{background: theme.ui,color:theme.syntax}}>
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
}
export default NavBar;