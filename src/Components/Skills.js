import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { oskillz, skillz, wskillz } from './Data'

function Skills() {
  return (
    <section id="skills" classNameName=" p-5 ">
    <div classNameName="container">
        <h2 classNameName='text-center'>Skills</h2><hr/>
        <Row>
            <Col>
                <h3>Core Skills</h3>

                {skillz.map((item, itemIndex)=>{
                    const{id, image, title} = item;
                    return(
                        
                        <div classNameName="card text-dark">
                            <div classNameName="card-body">
                                <div classNameName="mb-3">
                                    <img classNameName='coreImg' src={image} alt={title}/>
                        </div>
                        <h6 classNameName="card-text">{title}</h6>

                    </div>
                
                </div>
                    )
                })}
            </Col>
            <Col>
                <h3>Web Development</h3>

                {wskillz.map((item, itemIndex)=>{
                    const{id, image, title} = item;
                    return(
                        
                        <div classNameName="card text-dark">
                            <div classNameName="card-body">
                                <div classNameName="mb-3">
                                    <img classNameName='coreImg' src={image} alt={title}/>
                        </div>
                        <h6 classNameName="card-text">{title}</h6>

                    </div>
                
                </div>
                    )
                })}
            </Col>
            <Col>
                <h3>Other Skills</h3>

                {oskillz.map((item)=>{
                    const{image, title} = item;
                    return(
                        
                        <div classNameName="card text-dark">
                            <div classNameName="card-body">
                                <div classNameName="mb-3">
                                    <img classNameName='coreImg' src={image} alt={title}/>
                        </div>
                        <h6 classNameName="card-text">{title}</h6>

                    </div>
                
                </div>
                    )
                })}
            </Col>
          
        </Row>
    </div>
</section>
  )
}

export default Skills