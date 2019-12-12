import React, { Component } from "react";
import Title from "../SectionTitle";
import Layout from "./Layout";
import Wrapper from "../SectionWrapper";
import Header from "../Header";
import background2 from '../../Assets/backgroundoriginal.jpeg';

import Footer from "../Footer";

class BlogRenew extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
    this.onEnter = this.onEnter.bind(this);
    this.onLeave = this.onLeave.bind(this);
  }
  onEnter() {
    this.setState({ active: true });
  }
  onLeave() {
    this.setState({ active: false });
  }
  render() {
    return (
      <React.Fragment>
        <Header
          background={background2}
          heading="Raj-K"
          subtitle={"A diary of Learning"}
        />

        <Wrapper id="projects">
          <Title text="My Blogs" icon="book" color="ff4f81" />
          <Layout
            onEnter={this.onEnter}
            onLeave={this.onLeave}
            active={this.state.active}
          />
        </Wrapper>
        <Footer background={background2} />
      </React.Fragment>
    );
  }
}

export default BlogRenew;
