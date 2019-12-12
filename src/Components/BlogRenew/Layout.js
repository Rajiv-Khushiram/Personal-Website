import React , { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Waypoint from 'react-waypoint';
import PropTypes from 'prop-types';
import { bounceInRight } from 'react-animations';
import Card from './Card';
import { useFirestore } from "react-redux-firebase";
import { Spin } from "antd";


const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3% 0;
  animation: ${props => (props.active ? keyframes`${bounceInRight}` : '')} 1s;
`;

//  const [data, setData] = useBlog();

// const Blogs = [  {
//   title: 'Hackathon 2019',
//   description:
//     `A prototype for grouping students in team projects. This project stacks React-Mongo-Db and hosting`,
//   link: 'https://reactrkfirebasegcp.firebaseapp.com',
//   githublink: 'https://github.com/Rajiv-Khushiram/reactrk'
// },{
//   title: 'Hackathon 2019',
//   description:
//     `A prototype for grouping students in team projects. This project stacks React-Mongo-Db and hosting`,
//   link: 'https://reactrkfirebasegcp.firebaseapp.com',
//   githublink: 'https://github.com/Rajiv-Khushiram/reactrk'
// },{
//   title: 'Hackathon 2019',
//   description:
//     `A prototype for grouping students in team projects. This project stacks React-Mongo-Db and hosting`,
//   link: 'https://reactrkfirebasegcp.firebaseapp.com',
//   githublink: 'https://github.com/Rajiv-Khushiram/reactrk'
// },{
//   title: 'Hackathon 2019',
//   description:
//     `A prototype for grouping students in team projects. This project stacks React-Mongo-Db and hosting`,
//   link: 'https://reactrkfirebasegcp.firebaseapp.com',
//   githublink: 'https://github.com/Rajiv-Khushiram/reactrk'
// }];

// const useData = useBlog()

// const blogs = useData();


const Layout = props =>  {
  const [data, setData] = useState([])
  const [errors, setErrors] = useState(false)
  const firestore = useFirestore();
  let query = [];  

  async function fetchData() {
    return firestore
    .collection("blogs")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let blogObj = {};
        blogObj = {
          id: doc.id,
          background: doc.data().background,
          content: doc.data().content,
          title: doc.data().title,
          createdAt: doc.data().createdAt,
          timeToRead: doc.data().timeToRead,
          summary: doc.data().summary
        };
        query.push(blogObj);
      });
    })
    .then(() => {
      setData(query);
      console.log("just once");
      console.log(query)
      return query;
    })
    .catch(err => setErrors(err));


    // const res = await fetch("https://swapi.co/api/planets/4/");
    // res
    //   .json()
    //   .then(res => setData(res))
    //   .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const Cards = data.map(blog => (
    <Card
      title={blog.id}
      summary={blog.summary}
      link={blog.title}
      githublink={blog.title}
      key={blog.id}
    />
  ));

  if (data.length > 0 ){
  return  (<Waypoint onEnter={props.onEnter} onLeave={props.onLeave}>
    <Wrapper active={props.active}>{Cards}</Wrapper>
  </Waypoint>)
  }
  else {
    return (<React.Fragment>
    <br></br> <br></br>
    <div style={{height:"100vh"}}>
    <p><Spin size="large" /> ...Loading blogs</p>
    </div></React.Fragment>

    )
  }
}

Layout.propTypes = {
  active: PropTypes.bool.isRequired,
  onEnter: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
};

export default Layout
