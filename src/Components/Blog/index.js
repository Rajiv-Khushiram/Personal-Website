import React, { Component } from "react";
import Bloglist from "./blogList";
import { connect } from "react-redux";
import { compose } from "recompose";
import Header from "../Header";

import styled from "styled-components";
import Footer from "../Footer";
import Raj from "../Menu/RajLogo";
import background from '../../Assets/background.jpg';


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

const Wrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 0px;


  @media (max-width: 600px) {
    padding-bottom: 70px;
  }
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
      <Header background={background} heading="Raj-K" subtitle={"A diary of Learning"}/>

        {/* <Menu /> */}
        <WrapperLeft>
          <Raj />
        </WrapperLeft>
          <Wrapper>

            {/* <Spin size="large" />
            <br></br> <br></br>
            <p>Loading blogs...</p> */}
          </Wrapper>
          <Footer  background={background} />
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
