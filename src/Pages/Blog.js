import React from 'react'
import { blogs } from '../Components/Data'
import RecentBlog from '../Components/RecentBlog'

function Blog() {
  return (
    <section className="blog bg-dark text-light p-5 welcome-section">
    <div className="container">
        <div className="row">
        <h2 classNameName='text-center'>Blog Posts</h2><hr/>
            <div className="col-md-9">
                <div className="blog-posts">
                    <div className="row">
                        {blogs.map((post) => (
                            <div className="col-md-12">
                            <div className="blog-post pb-5 mb-3">
                                <img src={post.image} alt=""/>
                                <div className="blog-content mt-3">
                                    <h2>{post.title}</h2>
                                    <p>{post.content}</p>
                                    <div className="tags-share">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <ul className="more">
                                                    <a href={post.link}>Read more</a>
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                        
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="side-bar">
                    <div className="search pt-3">
                        <fieldset>
                            <input name="search" type="text" className="form-control text-light" id="search"
                                placeholder="Search..." required=""/>
                        </fieldset>
                    </div>
                    <RecentBlog/>
                    {/* <div className="categories">
                        <div className="sidebar-heading">
                            <h2>Categories</h2>
                        </div>
                        
                        <ul>
                            <li><a href="#">Lifestyle (7)</a></li>
                            <li><a href="#">Branding (9)</a></li>
                            <li><a href="#">Nature (14)</a></li>
                            
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Blog