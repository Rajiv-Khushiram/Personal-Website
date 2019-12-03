import React, { Component } from "react";
import Bloglist from "./blogList";
import { connect } from "react-redux";
import { compose } from "recompose";
import Header from "../Header";
import {Icon, Button, Spin } from "antd";

// import Menu from "../Menu";
import styled from "styled-components";
import Footer from "../Footer";
import Raj from "../Menu/RajLogo";

import { getBlogs, nextPage, previousPage } from "../../actions/blogAction";

const BlogSection = styled.div`
  text-align: left;
  box-sizing: border-box;
  display: block;
  position: relative;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  line-height: 1.6;
  @media (max-width: 600px) {
    width: 95%;
    padding-left: 5px;
  }
`;

const WrapperLeft = styled.h3`
  position: fixed;
  left: 0;
  top: 0;
`;

class Blog extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#F8F8F8";
    Promise.all([this.props.getBlogs()]).then(allBlogs => {});
  }

  next = last => {
    var last_element = this.props.blog[this.props.blog.length - 1];
    this.props.nextPage(last_element);
  };

  previous = first => {
    var firstElement = this.props.blog[0];
    this.props.previousPage(firstElement);
  };

  render() {
    const { blog } = this.props;
    return (
      <React.Fragment>
        <Header
          background="https://firebasestorage.googleapis.com/v0/b/raj-c-k.appspot.com/o/joshua-earle-K3V1WUkqBxM-unsplash.jpg?alt=media&token=f9edb71d-84cd-4b0f-8d56-469d5d6e9a74&fbclid=IwAR11x6B2Xdh_pK1yPZ3n-O9B6nLXP_NAax036kunYpASCqXVwBfX3RSqTM4"
          heading="Raj-K"
          blog
          iconWrapper
          subtitle="Think before you speak. Read before you think."
        />
        {/* <Menu /> */}
        <WrapperLeft>
          <Raj />
        </WrapperLeft>
        {blog.length > 0 ? (
          <BlogSection id="about">
            <Bloglist blogs={blog} />

            <div>
              <Button onClick={() => this.previous()}>
              <Icon type="left" />
Previous</Button>

              <Button style={{ float: "right" }} onClick={() => this.next()}>
                Next
                <Icon type="right" />
              </Button>
            </div>

            <br></br>
          </BlogSection>
        ) : (
          <div style={{padding:"20px"}} className="container center">
            <Spin size="large" /><br></br> <br></br><p>Loading blogs...</p>
          </div>
        )}
        <Footer background="https://firebasestorage.googleapis.com/v0/b/raj-c-k.appspot.com/o/joshua-earle-K3V1WUkqBxM-unsplash.jpg?alt=media&token=f9edb71d-84cd-4b0f-8d56-469d5d6e9a74&fbclid=IwAR11x6B2Xdh_pK1yPZ3n-O9B6nLXP_NAax036kunYpASCqXVwBfX3RSqTM4" />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    auth: state.firebase.auth,
    blog: state.blog.blogsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBlogs: () => dispatch(getBlogs()),
    nextPage: docSnap => dispatch(nextPage(docSnap)),
    previousPage: docSnap => dispatch(previousPage(docSnap)),
    dispatch
  };
};
export default compose(connect(mapStateToProps, mapDispatchToProps))(Blog);
