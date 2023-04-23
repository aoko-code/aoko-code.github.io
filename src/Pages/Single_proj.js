import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { projects } from '../Components/Data'
import { useParams } from 'react-router-dom'

function Single_proj() {
  const {projectId} = useParams()
  const project = projects.find((project) => project.id === projectId)
  const{image, title, description} = project;
  return (
    <div className='single-proj'>
        <Container>
            <Row>
                <Col className='proj-head'>
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