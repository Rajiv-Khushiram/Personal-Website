import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const BlogDetails = props => {
  const { blog, auth } = props;
  //   if (!auth.uid) return <Redirect to='/signin' />
  if (blog) {
    return (
      <div>
        <span className="card-title">{blog.title}</span>
        <p style={{ color: "grey", fontStyle: "italic" }}>
          {moment(blog.createdAt.toDate()).calendar()}{" "}
          <span style={{ paddingLeft: "20px" }}> {blog.timeToRead}</span>
        </p>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading blogs...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const blogs = state.firestore.data.blogs;
  const blog = blogs ? blogs[id] : null;
  return {
    blog: blog,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "blogs"
    }
  ])
)(BlogDetails);
