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
            
            <Row classNameName="align-items-center pb-3">
                {projects.map((project)=>{
                    const{id, image, title, description} = project;
                    return(
                        <div className="col-md">
                        <div classNameName="card bg-light text-dark">
                            <div classNameName="card-body text-center">
                                <img classNameName="img-fluid project-img" src={image} alt={title}/>
                                <div classNameName="project-info">
                                    <h3 classNameName="card-title mb-3"><a href="">{title}</a></h3>
                                    <p classNameName="card-text">
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