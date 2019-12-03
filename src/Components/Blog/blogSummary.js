import React from "react";
import moment from "moment";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Box = styled.div`
  width: 100%;
  padding: 20px;
  background: #fff;
  margin: 10px auto;

  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
`;

const Summary = styled.p`
  line-height: 1.6;
  display: flex;
  align-items: center;
`;

/*

*/

const BlogSummary = ({ blog }) => {
  return (
    <div>
      <Box>
        <Link style={{ textDecoration:"none", color: "black" }} target="_blank" to={"/blog/" + blog.id} key={blog.id}>
          <h2 style={{ fontSize: '2em ', fontWeight:'800',paddingTop:"15px"}}>{blog.title}</h2>
        </Link>
        <p style={{color:"grey", fontStyle:"italic", lineHeight:'1.7'}}>
          {moment(blog.createdAt.toDate()).calendar()}{" "}
          <span className="fa fa-clock-o" style={{ paddingLeft: "20px", fontStyle:"italic" }}> {blog.timeToRead} mins</span>
        </p>
        <Summary>{blog.summary}</Summary>

        {/* <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
          <p className="grey-text">{moment({blog.createdAt}.toDate()).calendar()}</p> */}
        <br></br>
        <Link
          style={{ color: "black", fontStyle: "italic" }}
          target="_blank"
          to={"/blog/" + blog.id}
        >
          Read more...
        </Link>
      </Box>
    </div>
  );
};

export default BlogSummary;
