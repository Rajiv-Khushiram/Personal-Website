import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import Header from '../Header';
import background from '../../Assets/background.jpg';
import styled from 'styled-components';
import Footer from '../Footer';

import moment from "moment";



const Content = styled.div`
max-width: 980px;
margin: auto;
width: 70%;
line-height: 1.4;
font-size:1.3em;
display: flex;
text-align:left;
justify-content: space-between;
@media (max-width: 876px) {
  flex-wrap: wrap;
  width: 80%;
}
`;


const BlogDetails = props => {
  const { blog, auth } = props;

  //   if (!auth.uid) return <Redirect to='/signin' />
  if (blog) {
    const text= blog.content
    return (
      <div> 
        <Header background={blog.background} heading={blog.title}
          blog iconWrapper 
          subtitle=""
          //  {moment(blog.createdAt.toDate()).calendar()}
           />
          
      <Content id='about'>
        <div dangerouslySetInnerHTML ={{ __html: text}} />
      </Content>
      <Footer  background={blog.background} />
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
  console.log(id)
  const blogs = state.blog.blogsList
  console.log(blogs)
  const blog = blogs ? blogs[id] : null;
  const test = blogs.findIndex(x => x.id === id);
  console.log(test)
  return {
    blog: blog,
    blogs: state.blog.blogList,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps)
)(BlogDetails);
