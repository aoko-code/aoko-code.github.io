import React from 'react'

function ProjMenu() {
  return (
    <>
    <div className="row text-center pb-3">
    <h3>Projects</h3>  
        
    </div>
    <div class="row align-items-center pb-3" data-aos="fade-up" data-aos-delay="100">
    <div class="col-lg-12 d-flex justify-content-center">
        <ul id="project-filters">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".app">App</li>
            {/* <li data-filter=".filter-card">Card</li> */}
            <li data-filter=".web">Web</li>
        </ul>
        
    </div>
</div>
</>
  )
}

export default ProjMenu