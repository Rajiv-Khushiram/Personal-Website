import React from 'react'
import BlogSummary from './blogSummary'

const BlogList = ({blogs}) => { 
    return (
        <div className="blog-list section">
            { blogs && blogs.map(blog => {
                return(
                      <BlogSummary key={blog.id} blog={blog} />
                )
            })}  
        </div>
    )
}

export default BlogList