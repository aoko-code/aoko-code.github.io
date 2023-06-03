import React from 'react'
export const categories=[
  {
      id: 1,
      name: 'All',
      value: 'all'
  },
  {
      id: 2,
      name: 'Web Development',
      value: 'web'
  },
  {
      id: 3,
      name: 'UI/UX Design',
      value: 'design'
  },
]

function ProjMenu( activeCategory, setActiveCategory, categories) {
  return (
    <>
    <div className="row text-center pb-3">
    <h3>Projects</h3>  
    </div>
        {categories.map((category) => (
    <div className="row align-items-center pb-3" data-aos="fade-up" data-aos-delay="100">
    <div className="col-lg-12 d-flex justify-content-center">
        <button id="project-filters" 
        key={category.value}
        className={category.value === activeCategory ? 'active' : ''}
        onClick={() => setActiveCategory(category.value)}> {category.name}
          
        </button>
        
    </div>
    
</div>
))}
</>
  )
}

export default ProjMenu