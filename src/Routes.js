import React, { Component } from "react";
import { connect } from "react-redux";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


import HomePage from "./Components/HomePage";
import Blog from "./Components/Blog";
import BlogDetails from "./Components/Blog/blogDetail";
import CreateBlog from "./Components/Blog/CreateBlog";

import SignIn from "./Components/Auth/SignIn";


const ProtectedRoute = ({ isAllowed, ...props }) =>
  isAllowed ? <Route {...props} /> : <Redirect to="/signin" />;


class Routes extends Component {
  render() {
    const { auth } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:id" component={BlogDetails} />
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
  