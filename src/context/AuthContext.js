import React, { Component ,createContext} from 'react';
 
export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = { 
        isLogged:false
     } 
     toggleLogged = () => {
         this.setState({isLogged:!this.state.isLogged});
     };
    render() { 
        return (
            <AuthContext.Provider value={{...this.state,toggleLogged:this.toggleLogged}}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}
 
export default AuthContextProvider;
