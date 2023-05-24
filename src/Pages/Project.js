import React, { useState } from 'react'
import { Row } from 'react-bootstrap';
import { projects } from '../Components/Data'
import ProjMenu from '../Components/ProjMenu';
import { Link } from 'react-router-dom';
import ProjectLink from '../Components/ProjectLink';
import ProjectDisplay from '../Components/ProjectDisplay';


function Project() {
    const {projectId, setProjectId} = useState(null)
  const handleProjectClick = (id) => {
    setProjectId(id)
  }
  return (
    <>
    <ProjMenu/>
            
            <Row className="align-items-center pb-3">
                {projects.map((project)=>{
                    const{id, image, title, description} = project;
                    return(
                        <div className="col-md">
                        <div className="card bg-light text-dark">
                            <div className="card-body text-center">
                                <img className="img-fluid project-img" src={image} alt={title}/>
                                <div className="project-info">
                                    <h3 className="card-title mb-3"><a href="">{title}</a></h3>
                                    <p className="card-text">
                                       {description}
                                    </p>
                                    <ProjectLink projectId={id} onClick={handleProjectClick}/>
                                    {/* <Link classNameName='btn more' to={`/single_proj/${project.id}`}>Visit site</Link>
                                     */}
                                     {projectId && <ProjectDisplay projectId={id}/>}
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
               
            </Row>
            
            </>

  )
}


export default Project