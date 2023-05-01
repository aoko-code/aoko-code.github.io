import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { expe } from '../Components/Data'

function Experience() {
  return (
    <>
    <section classNameName='experience welcome-section'>
        <Container>
            <Row>
                {expe.map((item)=>{
                    const{image, title, org, period, responsibility} = item;
                    return(
                        <>
                        <Col>
                        <img classNameName='certImg' src={image} alt={title}/>
                        </Col>
                        <Col>
                        
                        </Col>
                        </>

                    )
                })}

            </Row>
        </Container>
    </section>
    </>
  )
}

export default Experience