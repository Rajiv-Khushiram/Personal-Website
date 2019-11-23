const initState = {
  error:false,
}
const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATED_BLOG_SUCCESS":
      return {
        ...initState,
        submitted:true,
        error:false,
        submitError:false,
      };

      default:
        return state;
    }
};

export default blogReducer;