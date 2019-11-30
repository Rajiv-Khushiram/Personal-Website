const initState = {
  error:false,
  blogsList:[]
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

      case "LIST_BLOG_SUCCESS":
        return {
          ...state,
          blogsList: action.query,
          error:false,

        };

        case "GET_NEXT_BLOG_LIST":
          console.log(action.query)
          return {
            ...state,
            blogsList: action.query,
            error:false,
  
          };
          
      default:
        return state;
    }
};



export default blogReducer;