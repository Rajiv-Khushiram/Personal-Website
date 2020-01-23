import React from "react";
import styled, { keyframes } from "styled-components";
import bounceInLeft from "react-animations/lib/bounce-in-left";
import { Link } from "react-router-dom";

const ChildWrapper = styled.div`
display: flex;
direction: row;
margin: px 0;
padding:4px 30px;
border-right: 3px solid black;

&:hover {
  background-color:white;
  color: #673ab7;
}
`
const RajLogo = styled(ChildWrapper)`
`

// const BlogLogo = styled.div`



// `;

const ProjectLogo = styled(ChildWrapper)`
 
border-radius:6px;
`;



const ParentLogo = styled.div`
top: 30px;
left: 40px;
color:black;
outline: none;
padding: 0;
position: fixed;
font-size: 18px;
font-weight: bolder;
display: flex;
flex-direction:row;
animation: ${keyframes`${bounceInLeft}`} 1s;
z-index: 999;
@media (max-width: 580px) {
  display: none;
}




`;

const TopNavLinks = (props, onBlogsDissaper ) => (
    <ParentLogo className="projectla
    ">
    <Link to={"/"}>
        <RajLogo className="navWrap">
        Rajiv
        </RajLogo>
 
    </Link>
    <Link  to={"/blog"}>
        <ChildWrapper className="navWrap"  >
        Blogs
        </ChildWrapper>
    </Link>
    {!onBlogsDissaper && 
    <a href='#projects'>
        <ProjectLogo className="navWrap" >
           Projects
        </ProjectLogo>
    </a>}
    </ParentLogo>
);


export default TopNavLinks;
