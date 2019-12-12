import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

//Algolia
// const algoliasearch = require("algoliasearch");
// const ALGOLIA_ID = functions.config().algolia.appid;
// const ALGOLIA_ADMIN_KEY = functions.config().algolia.adminapikey;
// const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);
// const ALGOLIA_INDEX_BLOGS = "blogs";

admin.initializeApp(functions.config().firebase);

// exports.indexBlog = functions.region("asia-northeast1")
//     .firestore.document("blogs/{blogId}")
//     .onCreate((snap, context) => {
//         // Get the note document
//         const blog = snap.data();
//         // Add an 'objectID' field which Algolia requires
//         if (blog) {
//             blog.objectID = context.params.blogId;
//             const index = client.initIndex(ALGOLIA_INDEX_BLOGS);
//             return index.saveObject(blog);
//         }
//         console.log("Algolia: Could not index blog indice")
//         return;
//     });

// exports.updateBlog = functions.firestore.document("blogs/{blogId}")
//     .onUpdate((change, context) => {
//         const blog = change.after.data();
//         if (blog) {
//             blog.objectID = context.params.blogId;
//             const index = client.initIndex(ALGOLIA_INDEX_BLOGS);
//             return index.saveObject(blog);
//         }
//         console.log("Algolia: Could not update blog indice")
//         return;
//     });

// exports.unIndexBlog = functions.region("asia-northeast1")
//     .firestore.document("blogs/{blogId}")
//     .onDelete((snap, context) => {
//         const blog = snap.data();
//         if (blog) {
//             blog.objectID = String(context.params.blogId);
//             const index = client.initIndex(ALGOLIA_INDEX_BLOGS);
//             return index.deleteObject(blog.objectID);
//         }
//         console.log("Algolia: Could not delete blog indice")
//         return;
//     });

// admin.initializeApp(functions.config().firebase);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

// // export const helloWorld = functions.https.onRequest((request, response) => {
// //  response.send("Hello from Firebase!");
// // });
