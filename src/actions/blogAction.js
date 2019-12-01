export const createBlog = blog => {
  return (dispatch, getState, { getFirebase }) => {
    const db = getFirebase().firestore()
    let data = {
      title: blog.title,
      summary: blog.summary,
      timeToRead: blog.timeToRead,
      content: blog.codecontent,
      background : blog.background,
      subtitle: blog.subtitle,
      createdAt: new Date()
      };

      var str = blog.title
      str = str.replace(/\s+/g, '-')
      
      db.collection('blogs').doc(str).set(data)
      .then(() => {
        console.log(
          "Blog data has been added succesfully"
        );
        return dispatch({ type: "CREATED_BLOG_SUCCESS", blog: blog });
      });
  };
};

export const nextPage = docSnap =>  {
  return (dispatch, getState, { getFirebase }) => {
    const db = getFirebase().firestore()
    const query = [];
    console.log(docSnap.createdAt)
    db.collection("blogs")
      .orderBy("createdAt", "desc")
      .startAfter(docSnap.createdAt)
      .limit(3)
      .get()
      .then(snapshot => {
        let blogObj = {}
        if (snapshot.empty) {
          console.log("No matching documents.");
          return;
        }
        snapshot.forEach(doc => {
          blogObj = {
            id : doc.id,
            background : doc.data().background,
            content : doc.data().content,
            title : doc.data().title,
            createdAt : doc.data().createdAt,
            timeToRead: doc.data().timeToRead,
            summary : doc.data().summary
          }
          query.push(blogObj);
        });
       return dispatch({ type: "GET_NEXT_BLOG_LIST", query});
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
    }
}


export const previousPage = docSnap =>  {
  return (dispatch, getState, { getFirebase }) => {
    const db = getFirebase().firestore()
    const query = [];
    db.collection("blogs")
      .orderBy("createdAt", "desc")
      .endBefore(docSnap.createdAt)
      .limitToLast(3)
      .get()
      .then(snapshot => {
        let blogObj = {}

        if (snapshot.empty) {
          console.log("No matching documents.");
          return;
        }
        snapshot.forEach(doc => {
          blogObj = {
            id : doc.id,
            background : doc.data().background,
            content : doc.data().content,
            title : doc.data().title,
            createdAt : doc.data().createdAt,
            timeToRead: doc.data().timeToRead,
            summary : doc.data().summary
          }
          query.push(blogObj);
        });
       return dispatch({ type: "GET_NEXT_BLOG_LIST", query});
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
    }
}

export const getBlogs = () =>  {
  return (dispatch, getState, { getFirebase }) => {
    const db = getFirebase().firestore()
    const query = [];
    db.collection('blogs').orderBy("createdAt", "desc")
    .limit(3)
    .get()
      .then((snapshot) => {
        let blogObj = {}

        snapshot.forEach(doc => {
          blogObj = {
            id : doc.id,
            background : doc.data().background,
            content : doc.data().content,
            title : doc.data().title,
            createdAt : doc.data().createdAt,
            timeToRead: doc.data().timeToRead,
            summary : doc.data().summary
          }
          query.push(blogObj);
        });
       return dispatch({ type: "LIST_BLOG_SUCCESS", query });
      })
    }
}