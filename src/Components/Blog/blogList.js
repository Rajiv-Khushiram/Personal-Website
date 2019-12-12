import React from 'react'
import BlogSummary from './blogSummary'

const BlogList = ({blogs}) => { 
    return (
        <React.Fragment>
            { blogs && blogs.map(blog => {
                return(
                      <BlogSummary key={blog.id} 
                      blog={blog} />
                )
            })}  
            </React.Fragment>
    )
}

export default BlogList