import React from 'react'
import { Row } from 'react-bootstrap';
import { projects } from '../Components/Data'
import ProjMenu from '../Components/ProjMenu';
import { Link } from 'react-router-dom';


function Project() {
  return (
    <>
    <ProjMenu/>
            
            <Row className="align-items-center pb-3">
                {projects.map((project)=>{
                    const{id, image, title, description} = project;
                    return(
                        <div class="col-md">
                        <div className="card bg-light text-dark">
                            <div className="card-body text-center">
                                <img className="img-fluid project-img" src={image} alt={title}/>
                                <div className="project-info">
                                    <h3 className="card-title mb-3"><a href="">{title}</a></h3>
                                    <p className="card-text">
                                       {description}
                                    </p>
                                    <Link className='btn more' to={`/portfolio/${project.id}`}>Visit site</Link>
                                    
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