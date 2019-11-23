export const createBlog = blog => {
  return (dispatch, getState, { getFirebase }) => {
    const db = getFirebase().firestore()
    let data = {
      title: blog.title,
      summary: blog.summary,
      timeToRead: blog.timeToRead,
      content: blog.codecontent,
      codecontent: blog.codecontent,
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
