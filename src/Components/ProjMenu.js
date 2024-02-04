import React from 'react'
export const categories=[
  {
      name: 'All',
      value: 'all'
  },
  {
      name: 'Web Development',
      value: 'web'
  },
  {
      name: 'UI/UX Design',
      value: 'design'
  },
  {
    name: 'API',
    value: 'api'
},
];

const ProjMenu = ({ activeCategory, setActiveCategory, categories}) => {
  return (
    <>
    <div className="row text-center pb-3">
    <h3>Projects</h3>  
    </div>
    <div className="project-menu">
        {categories.map((category) => (
    
    
        <button id="" 
        key={category.value}
        className={category.value === activeCategory ? 'active' : ''}
        onClick={() => setActiveCategory(category.value)}> {category.name}
          
        </button>
        
   
    


))}
</div>
</>
  )
}

export default ProjMenu