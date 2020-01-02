import React, { createContext, Component } from 'react'

export const PhotoContext = createContext();

// const AuthContext = React.createContext({
//     user:null,
// })

class PhotoContextProvider extends Component {
    state = { 
        isLoggedIn : false,
        isLight: true,
        data:[],
        
    }
    render() {
        return (
            <PhotoContext.Provider value ={{...this.state}}>{this.props.children}</PhotoContext.Provider>
        )

    }
}

export default PhotoContextProvider;