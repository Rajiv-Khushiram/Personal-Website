import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Menu from '../Menu';

// import { Redirect } from "react-router-dom";
import Header from "../Header";
// import background from '../../Assets/background.jpg';
import styled from "styled-components";
import Footer from "../Footer";

// import moment from "moment";
import './index.css';
import { Spin } from "antd";
const { formatDate, toDateTime } = require("../Utilities");



const ContentContainer = styled.div`
padding-top: 40px;
padding-bottom: 50px;`

const Content = styled.div`
  max-width: 980px;
  margin: auto;
  width: 70%;
  line-height: 1.4;
  font-size: 1.3em;
  display: flex;
  text-align: left;
  justify-content: space-between;
  @media (max-width: 876px) {
    flex-wrap: wrap;
    width: 80%;
  }

  a {
    color: blue;
  }
`;

const BlogDetails = props => {
  const { blog } = props;

  //   if (!auth.uid) return <Redirect to='/signin' />
  if (blog) {
    const text = blog.content;
    return (
      <div>
        <Header
          background={blog.background}
          heading={blog.title}
          blog
          iconWrapper
          subtitle={formatDate(toDateTime(blog.createdAt.seconds))}
        />
                        <div id="menu">
   <Menu navigation/></div>

        {/* //{moment(blog.createdAt.toDate()).calendar()} */}
        <div id="blogs"> <ContentContainer>
          <Content id="about">
            <div dangerouslySetInnerHTML={{ __html: text }} />
          </Content>
        </ContentContainer></div>
        <Footer background={blog.background} />
      </div>
    );
  } else {
    return (
      <div style={{ paddingTop: "90px" }} className="container center">
        <Spin size="large" />
        <br></br> <br></br>
        <p>Loading blog...</p>
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
