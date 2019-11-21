import authReducer from './authReducer';
import projectReducer from './projectReducer'
import blogReducer from './blogReducer'


import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    auth: authReducer,
    blog: blogReducer,
    project: projectReducer,
    firebase:firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;