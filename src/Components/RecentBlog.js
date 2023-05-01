import React from 'react'
import { blogs } from './Data'
const RecentBlog = () => {
  return (
    <div className="recent-posts">
    <div className="sidebar-heading mt-2">
        <h2>Recent Posts</h2>
    </div>
    {blogs.map((post) => (
    <ul>
        <li>
            <a href="/pages/blog.html">
                <img src={post.image} alt=""/>
                <div className="text">
                    <h6>{post.title}.</h6>
                    <span>{post.date}</span>
                </div>
            </a>
        </li>
    </ul>
    ))}
</div>
  )
}

export default RecentBlog