import React from 'react'

function Blog() {
  return (
    <section class="blog bg-dark text-light p-5 welcome-section">
    <div class="container">
        <div class="row">
            <div class="col-md-9">
                <div class="blog-posts">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="blog-post pb-5 mb-3">
                                <img src="" alt=""/>
                                <div class="blog-content mt-3">
                                    <h2>Lorem, ipsum dolor.</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                        Voluptatum incidunt possimus consectetur fugit nostrum
                                        animi omnis beatae! Natus aliquid vel, libero aut
                                        illo consectetur, sequi ipsam magnam tenetur aliquam eos.</p>
                                    <div class="tags-share">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <ul class="share">
                                                    <li><a href=""><i class="fa fa-twitter"></i></a></li>
                                                    <li><a href=""><i class="fa fa-facebook-f"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="side-bar">
                    <div class="search pt-3">
                        <fieldset>
                            <input name="search" type="text" class="form-control text-light" id="search"
                                placeholder="Search..." required=""/>
                        </fieldset>
                    </div>
                    <div class="recent-posts">
                        <div class="sidebar-heading mt-2">
                            <h2>Recent Posts</h2>
                        </div>
                        <ul>
                            <li>
                                <a href="/pages/blog.html">
                                    <img src="" alt=""/>
                                    <div class="text">
                                        <h6>Lorem, ipsum dolor.</h6>
                                        <span>15 July 2022</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/pages/blog.html">
                                    <img src="" alt=""/>
                                    <div class="text">
                                        <h6>Lorem, ipsum dolor.</h6>
                                        <span>15 July 2022</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/pages/blog.html">
                                    <img src="" alt=""/>
                                    <div class="text">
                                        <h6>Lorem, ipsum dolor.</h6>
                                        <span>15 July 2022</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="categories">
                        <div class="sidebar-heading">
                            <h2>Categories</h2>
                        </div>
                        {/* <!-- add chevron icon --> */}
                        <ul>
                            <li><a href="#">Lifestyle (7)</a></li>
                            <li><a href="#">Branding (9)</a></li>
                            <li><a href="#">Nature (14)</a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Blog