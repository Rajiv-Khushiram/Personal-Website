import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { Form, Button, Input } from "antd";
import { createBlog } from "../../actions/blogAction";

const { TextArea } = Input;

const Wrapper = styled.div`

`;

class CreateBlog extends Component {
  state = {
    background: "",
    content: "",
    summary: "",
    title: "",
    timeToRead: "",
    codecontent:"",
    subtitle:"",

    loading: false,
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };


  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.setState({ loading: true });
        e.target.reset();
        this.props.createBlog(this.state);
        setTimeout(() => {
          if (this.props.blog.submitted && !this.props.blog.error) {
            this.openNotification();
          }
          this.setState({ loading: false });
        }, 2000);
      }
    });
  };

  openNotification() {
    alert("Blog added.");
  }

  render() {
    const { editorState } = this.state;


    return (
      <Wrapper>
        <Form onSubmit={this.handleSubmit}>
        <Form.Item>
            <Input
              id="title"
              type="text"
              onChange={this.handleChange}
              size="large"
              style={{ width: "100%" }}
              placeholder="title"
            />
          </Form.Item>

          <Form.Item>
            <Input
              id="subtitle"
              type="text"
              onChange={this.handleChange}
              size="large"
              style={{ width: "100%" }}
              placeholder="subtitle"
            />
          </Form.Item>
          <Form.Item>
            <Input
              id="summary"
              type="text"
              onChange={this.handleChange}
              size="large"
              style={{ width: "100%" }}
              placeholder="summary"
            />
          </Form.Item>
          <Form.Item>
            <Input
              id="timeToRead"
              type="text"
              onChange={this.handleChange}
              size="large"
              style={{ width: "100%" }}
              placeholder="timeToRead"
            />
          </Form.Item>
          <Form.Item>
            <Input
              id="background"
              type="text"
              onChange={this.handleChange}
              size="large"
              style={{ width: "100%" }}
              placeholder="background"
            />
          </Form.Item>
          <Form.Item>
      
        <TextArea
        placeholder="Autosize height based on content lines" autoSize 
          id="codecontent"
          style={{ width: "100%" }}
          onChange={this.handleChange}
        />
          </Form.Item>
          <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                loading={this.state.loading}
              >
                Submit
              </Button>
            </Form.Item>
        </Form>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    blog: state.blog
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBlog: blog => dispatch(createBlog(blog)),
    dispatch
  };
};

export default Form.create()(
  connect(mapStateToProps, mapDispatchToProps)(CreateBlog)
);
