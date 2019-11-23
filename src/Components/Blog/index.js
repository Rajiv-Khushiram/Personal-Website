import React, { Component } from "react";
import Bloglist from "./blogList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import Header from "../Header";
import Menu from "../Menu";
import styled from "styled-components";
import Footer from "../Footer"

const BlogSection = styled.div`
  text-align: left;
  box-sizing: border-box;
  display:block;
  position:relative;
  padding-right:15px;
  padding-left:15px;
  margin-left:auto;
  margin-right:auto;
  width:50%;
  line-height: 1.6;
  @media (max-width: 600px) {
    width:95%;
    padding-left:5px;
  }
`;

class Blog extends Component {

  componentDidMount() {
    document.body.style.backgroundColor="#F8F8F8";

  }
  render() {
    const { blogs } = this.props;
    return (
      <React.Fragment>
        <Header background="https://firebasestorage.googleapis.com/v0/b/raj-c-k.appspot.com/o/joshua-earle-K3V1WUkqBxM-unsplash.jpg?alt=media&token=f9edb71d-84cd-4b0f-8d56-469d5d6e9a74&fbclid=IwAR11x6B2Xdh_pK1yPZ3n-O9B6nLXP_NAax036kunYpASCqXVwBfX3RSqTM4" heading="Raj-K"  blog iconWrapper subtitle="Think before you speak. Read before you think."/>
        <BlogSection id='about'>
          <Bloglist  blogs={blogs} />
        </BlogSection>
       <Footer background="https://firebasestorage.googleapis.com/v0/b/raj-c-k.appspot.com/o/joshua-earle-K3V1WUkqBxM-unsplash.jpg?alt=media&token=f9edb71d-84cd-4b0f-8d56-469d5d6e9a74&fbclid=IwAR11x6B2Xdh_pK1yPZ3n-O9B6nLXP_NAax036kunYpASCqXVwBfX3RSqTM4"/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    auth: state.firebase.auth,
    blogs: state.firestore.ordered.blogs
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "blogs", orderBy: ['createdAt', 'desc'] }])
)(Blog);
