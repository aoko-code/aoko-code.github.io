import React from 'react'
import { Container } from 'react-bootstrap'
import Skills from '../Components/Skills'

function Home() {
  return (
    <>
    <section className="bg-light text-dark p-5  m-5 p-lg-0 text-center text-sm-start welcome">
        <Container>
            <div className="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1>Hi, I'm Cynthia Aoko
                         </h1>
                    <h2>
                            Web Developer
                        
                    </h2>
                    <p className="lead"> Am a Computer Science graduate from Rongo University.  While waiting to graduate I had been doing various web development projects and taking various online courses. I have undergone an extensive Web Development bootcamp with Lakehub-Kisumu through the Femidevs program.  I wish to pursue a career in Software Development.</p>

                    <a download href="./files/CV.pdf"><button className="btn btn-lg more">Download Cv</button></a>
                    <a href=""><button className="btn btn-lg more">Contact Me</button></a>
                    
                </div>
                {/* <img className="img-fluid w-50 d-none d-sm-block" src="" alt="pic"/> */}
            </div>
        </Container>
    </section>
    <Skills/>
    </>
  )
}

export default Home