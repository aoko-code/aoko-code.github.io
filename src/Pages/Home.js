import React from 'react'
import { Container } from 'react-bootstrap'
import Certs from '../Components/Certs'
import Post from '../Components/Post'
import Skills from '../Components/Skills'
import Project from './Project'

function Home() {
  return (
    <>
    <section classNameName="bg-light text-dark p-lg-0 text-center text-sm-start welcome-section">
        <Container>
            <div classNameName="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1>Hi, I'm Cynthia Aoko
                         </h1>
                    <h2>
                            Web Developer
                        
                    </h2>
                    <p classNameName="lead"> Am a Computer Science graduate from Rongo University.  While waiting to graduate I had been doing various web development projects and taking various online courses. I have undergone an extensive Web Development bootcamp with Lakehub-Kisumu through the Femidevs program.  I wish to pursue a career in Software Development.</p>

                    <a download href="./files/CV.pdf"><button classNameName="btn btn-lg more">Download Cv</button></a>
                    <a href=""><button classNameName="btn btn-lg more">Contact Me</button></a>
                    
                </div>
                <img classNameName="img-fluid w-50 d-none d-sm-block" src="" alt="pic"/>
            </div>
        </Container>
    </section>
    <Skills/>
    <Certs/>
    <Project/>
    <Post/>
    </>
  )
}

export default Home