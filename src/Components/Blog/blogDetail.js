import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Menu from "../Menu";

// import { Redirect } from "react-router-dom";
import Header from "../Header";
// import background from '../../Assets/background.jpg';
import styled from "styled-components";
import Footer from "../Footer";

// import moment from "moment";
import "./index.css";
import { Spin } from "antd";
const { formatDate, toDateTime } = require("../Utilities");

const FlexContainer = styled.div`
  display: flex;
`;

const LeftStickyContainer = styled.div`
  flex: 1;
  position: -webkit-sticky;
  position: sticky;
  top: 30%;
  align-self: flex-start;
  padding-top: 100px;
  // background-color: red;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

const RightStickyContainer = styled.div`
  flex: 2;
  position: -webkit-sticky;
  position: sticky;
  top:0;
  margin-left:20px;
  align-self: flex-start;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const ContentContainer = styled.div`
flex: 3;
`;

const Content = styled.div`
text-align: left;
font-size: 20px;
padding-top: 40px;
align-self: flex-start;
flex-basis:200px;
top: 30%
margin:64px;
@media only screen and (max-width: 1200px) {
  margin:64px;
}
@media only screen and (max-width: 680px) {
  margin:10px;
}`;

// const Content = styled.div`
//       // max-width: 980px;
//   // margin: auto;
//   // width: 70%;
//   line-height: 1.4;
//   font-size: 1.3em;
//   display: flex;
//   text-align: left;
//   justify-content: space-between;
//   @media (max-width: 876px) {
//     flex-wrap: wrap;
//     width: 80%;
//   }

//   a {
//     color: blue;
//   }
// `;
const Canvas = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 300px;
height: 300px;
position: relative;
`;

const TotalCount = styled(Canvas)`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
position: absolute;
margin-top: -45px;
color: gray;
font-family: sans-serif;
font-size: 16px;`;



const Clap = styled.div``;
const Clicker = styled.div``;

const SonarClap = styled.div``;

const ParticlesContainer = styled.div``;

const Triangle = styled.div``;
const Square = styled.div``;




const BlogDetails = props => {
  const { blog, blogs } = props;
  
  console.log(blogs)
  //   if (!auth.uid) return <Redirect to='/signin' />
  if (blog) {
    const text = blog.content;
    window.document.title = blog.title;

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
          <Menu navigation />
        </div>

        {/* //{moment(blog.createdAt.toDate()).calendar()} */}

        <div id="blogs">
          <FlexContainer>
            <LeftStickyContainer>
            <TotalCount></TotalCount>
            <Clap> <i className="clap-icon fa fa-hand-paper-o"></i></Clap>
            <Clicker></Clicker>
              </LeftStickyContainer>{" "}
            <ContentContainer>
              <Content id="about">
                <div dangerouslySetInnerHTML={{ __html: text }} />
              </Content>

            </ContentContainer>
            <RightStickyContainer>Sticky</RightStickyContainer>
          </FlexContainer>
        </div>
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
    blogs:blogs,
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
