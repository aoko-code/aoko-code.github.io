import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { projects } from '../Components/Data'


function Single_proj() {
  const {projectId, setProjectId} = useState(null)
  // const handleProjectClick = (id) => {
  //   setProjectId(id)
  // }
  const project = projects.find((project) => project.id === projectId)
  const{image, title, description} = project;
  return (
    <div classNameName='single-proj'>
        <Container>
            <Row>
                <Col classNameName='proj-head'>
                    <h2>{title}</h2>
                </Col>
                <Col>
                <p>{description}</p>
                <img src={image} alt={title}/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Single_proj