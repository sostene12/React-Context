import React,{ createContext,Component,useState } from 'react';

export const ThemeContext = createContext();

// USING CLASSES
class ThemeContextProvider extends Component {
    state = { 
        isLightTheme:true,
        light: { syntax:'#555', ui:'#ddd' ,bg:'#eee'},
        dark: {syntax:'#ddd' , ui:'#333' ,bg:'#555'}
     } 
     toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme });
     }
    render() { 
        return (
            <ThemeContext.Provider value={{...this.state,toggleTheme:this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;



//USING HOOKS
// const ThemeContextProvider = (props) => {
//     const [isLightTheme,setIsLightTheme] = useState(true);
//     const [light,setLight] = useState({ syntax:'#555', ui:'#ddd' ,bg:'#eee'});
//     const [dark,setDark] = useState({syntax:'#ddd' , ui:'#333' ,bg:'#555'});
//     return ( 
//         <ThemeContext.Provider value={{isLightTheme,light,dark }}>
//             {/* {this.props.children} */}
//             {props.children}

//         </ThemeContext.Provider>
//      );
// }
 
// export default ThemeContextProvider;
