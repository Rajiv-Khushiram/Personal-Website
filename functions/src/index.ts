import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

//Algolia
const algoliasearch = require("algoliasearch");
const ALGOLIA_ID = functions.config().algolia.appid;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.adminapikey;
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);
const ALGOLIA_INDEX_BLOGS = "blogs";

admin.initializeApp(functions.config().firebase);



// admin.initializeApp(functions.config().firebase);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

// // export const helloWorld = functions.https.onRequest((request, response) => {
// //  response.send("Hello from Firebase!");
// // });
