import React from 'react'

function Portfolio() {
  return (
    <section id="projects" class="p-5 projects welcome-section">
    <div class="container">
        <div class="row text-center pb-3">
            <h3>Projects</h3>
            <div class="row align-items-center pb-3" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-12 d-flex justify-content-center">
                    <ul id="project-filters">
                        <li data-filter="*" class="filter-active">All</li>
                        <li data-filter=".filter-app">App</li>
                        <li data-filter=".filter-card">Card</li>
                        <li data-filter=".filter-web">Web</li>
                    </ul>
                </div>
            </div>
           
            <div class="row align-items-center pb-3">
                <div class="col-md">
                    <div class="card bg-light text-dark">
                        <div class="card-body text-center">
                            
                            <div class="project-info">
                                <h3 class="card-title mb-3"><a href="">name</a></h3>
                                <p class="card-text">
                                    description
                                </p>
                                <a href="" class="btn more">
                                    <img class="img-fluid project-img" src="" alt="pro 1"/>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

           
           
        </div>
    </div>
</section>
  )
}

export default Portfolio