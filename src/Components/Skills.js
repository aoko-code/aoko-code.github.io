import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { oskillz, skillz, wskillz } from './Data'

function Skills() {
  return (
    <section id="skills" className=" p-5 ">
    <div className="container">
        <h2 className='text-center'>Skills</h2><hr/>
        <Row>
            <Col>
                <h3>Core Skills</h3>

                {skillz.map((item, itemIndex)=>{
                    const{id, image, title} = item;
                    return(
                        
                        <div className="card text-dark">
                            <div className="card-body">
                                <div className="mb-3">
                                    <img className='coreImg' src={image} alt={title}/>
                        </div>
                        <h6 className="card-text">{title}</h6>

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
                        
                        <div className="card text-dark">
                            <div className="card-body">
                                <div className="mb-3">
                                    <img className='coreImg' src={image} alt={title}/>
                        </div>
                        <h6 className="card-text">{title}</h6>

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
                        
                        <div className="card text-dark">
                            <div className="card-body">
                                <div className="mb-3">
                                    <img className='coreImg' src={image} alt={title}/>
                        </div>
                        <h6 className="card-text">{title}</h6>

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