import React, { useState } from 'react'
import { Row } from 'react-bootstrap';
import { projects } from '../Components/Data'
import ProjMenu from '../Components/ProjMenu';
import { Link } from 'react-router-dom';
import ProjectLink from '../Components/ProjectLink';
import ProjectDisplay from '../Components/ProjectDisplay';
import { categories } from '../Components/ProjMenu';


function Project() {
    const [activeCategory, setActiveCategory] = useState('all')

    const filteredProjects = activeCategory === "all"
      ? projects
      : projects.filter(project => project.category === activeCategory)
  return (
    <>
    <ProjMenu
    activeCategory={activeCategory}
    setActiveCategory={setActiveCategory}
    categories={categories}/>
            
            <Row className="align-items-center pb-3">
                {filteredProjects.map((project => {
                    const{id, image, title, description} = project;
                    return(
                        <div key={project.id} className="col-md">
                        <div className="card bg-light text-dark">
                            <div className="card-body text-center">
                                <img className="img-fluid project-img" src={image} alt={title}/>
                                <div className="project-info">
                                    <h3 className="card-title mb-3"><a href="">{title}</a></h3>
                                    <p className="card-text">
                                       {description}
                                    </p>
                                    {/* <ProjectLink projectId={id} onClick={handleProjectClick}/>
                                    
                                     {projectId && <ProjectDisplay projectId={id}/>} */}
                                </div>
                            </div>
                        </div>
                    </div>
                    )

                    }))}
                {/* {projects.map((project)=>{
                    const{id, image, title, description} = project;
                    return(
                        <div key={project.id} className="col-md">
                        <div className="card bg-light text-dark">
                            <div className="card-body text-center">
                                <img className="img-fluid project-img" src={image} alt={title}/>
                                <div className="project-info">
                                    <h3 className="card-title mb-3"><a href="">{title}</a></h3>
                                    <p className="card-text">
                                       {description}
                                    </p>
                                    <ProjectLink projectId={id} onClick={handleProjectClick}/>
                                    
                                     {projectId && <ProjectDisplay projectId={id}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })} */}
               
            </Row>
            
            </>

  )
}


export default Project