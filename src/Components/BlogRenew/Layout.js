import React , { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Waypoint from 'react-waypoint';
import PropTypes from 'prop-types';
// import { bounceInRight } from 'react-animations';
import Card from './Card';
import { useFirestore } from "react-redux-firebase";
import { Spin } from "antd";
import bounceInLeft from 'react-animations/lib/bounce-in-left';
// import { PhotoContext } from '../../Context/PhotoPageContext'


const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3% 0;
  animation: ${props => (props.active ? keyframes`${bounceInLeft}` : '')} 1s;
`;




const Layout = props =>  {
  const [data, setData] = useState([])
  // const [errors, setErrors] = useState(false)
  // const { blogInfo, someFunction } = useContext(PhotoContext);
  const firestore = useFirestore();


  useEffect(() => {
    let query = [];  
    const fetchData = async()  =>{
      
      return firestore
      .collection("blogs")
      .orderBy("createdAt", "desc")
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
         console.log("fetched data");
        return query;
      })
      .catch(err => {
        console.log(err)
      });
    }

    // const res = await fetch("https://swapi.co/api/planets/4/");
    // res
    //   .json()
    //   .then(res => setData(res))
    //   .catch(err => setErrors(err));
    

    fetchData();
  }, [firestore]);

  function toDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
  }
  
  function formatDate(date) {
    var monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    // var weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    var dateValue = date.getDate();
    // var day = date.getDay();
    var year = date.getYear() + 1900;
    var monthIndex = date.getMonth();
    //var year = date.getFullYear();
  
    return  " " + dateValue + " " + monthNames[monthIndex] + " "+ year ;
  }

  const Cards = data.map(blog => (
    <Card
      title={blog.id}
      summary={blog.summary}
      link={blog.title}
      githublink={blog.title}
      key={blog.id}
      timeToRead={blog.timeToRead}
      createdAt={formatDate(
        toDateTime(blog.createdAt.seconds))}
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
    <div style={{height:"80vh"}}>
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
