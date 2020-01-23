import React, { Component } from "react";
import { connect } from "react-redux";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


import HomePage from "./Components/HomePage";
import BlogDetails from "./Components/Blog/blogDetail";
import CreateBlog from "./Components/Blog/CreateBlog";
import SignIn from "./Components/Auth/SignIn";
import BlogRenew from "./Components/BlogRenew"
import MediumClap from "./Components/Playground"

// import stateContext from "./Components/InfinityBlogLoader/Context"


const ProtectedRoute = ({ isAllowed, ...props }) =>
  isAllowed ? <Route {...props} /> : <Redirect to="/signin" />;


class Routes extends Component {
  render() {
    const { auth } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/blog" component={BlogRenew} />
          {/* <Route exact path="/blog/page/:id" component={useReactHookBlogHoc} />
          <Route exact path="/blog/test/:id" component={fireStoreHook} /> */}
          {/* <Route exact path="/Infinity/:id" component={IninityBlogLoader} /> */}

          <Route exact path="/blog/:id" component={BlogDetails} />
          <Route exact path="/playground" component={MediumClap} />

          <ProtectedRoute
            exact path="/addBlog"
            isAllowed={auth.uid}
            component={CreateBlog}
          />
          <Route path="/signin" component={SignIn} />
          {/* <Route path="/project/:id" component={ProjectDetails} />

{/* <Route exact path="/facial-Recognition-Project" component={FacialRecognitionProject} /> */}
          {/* <Route path="/project/:id" component={ProjectDetails} />
<Route path="/signin" component={SignIn} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}


const mapStateToProps = (state) => {
    return{
        auth:state.firebase.auth,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      dispatch
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Routes);
  