import React, { Component } from "react";
// import logo from "./logo.svg";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore"; // make sure you add this for firestore
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import configureStore from './store'
import { firebase as fbConfig, reduxFirebase as rfConfig } from "./config";
import PhotoContextProvider from "./Context/PhotoPageContext"
import "./App.css";

import Routes from "./Routes"

const initialState = window && window.__INITIAL_STATE__; // set initial state here
const store = configureStore(initialState)
// Initialize Firebase instance
firebase.initializeApp(fbConfig);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={rfConfig}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}>
                <PhotoContextProvider >  <div className="App">
          <Routes/>
          </div></PhotoContextProvider>
          </ReactReduxFirebaseProvider>
  </Provider>
    );
  }
}


export default App;