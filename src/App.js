import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore' // make sure you add this for firestore
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import configureStore from './store'
import { firebase as fbConfig, reduxFirebase as rfConfig } from './config'

import Header from './Components/Header';
import Menu from './Components/Menu/index';
import About from './Components/About';
import SkillSet from './Components/SkillSet';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


import './App.css'


const initialState = window && window.__INITIAL_STATE__ // set initial state here
const store = configureStore(initialState)
// Initialize Firebase instance
firebase.initializeApp(fbConfig)

// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//       <ReactReduxFirebaseProvider
//         firebase={firebase}
//         config={rfConfig}
//         dispatch={store.dispatch}
//         createFirestoreInstance={createFirestoreInstance}>
//       <BrowserRouter>
//         <div className="App">
//           <Navbar/>
//           <Switch>
//             <Route exact path='/' component={ Dashboard }/>
//             <Route path='/project/:id' component={ ProjectDetails } />
//             <Route path='/signin' component={ SignIn } />
//           </Switch>
//         </div>
//       </BrowserRouter>
//       </ReactReduxFirebaseProvider>
//     </Provider>
//     )
//   }
// }

const App = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={rfConfig}
      dispatch={store.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
      <div>
        <Header />
        <Menu />
        <About />
        <SkillSet />
        <Projects />
        <Footer />
      </div>
    </ReactReduxFirebaseProvider>
  </Provider>
);

export default App;
