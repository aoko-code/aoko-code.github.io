import React from 'react'
import { Container } from 'react-bootstrap'
import Certs from '../Components/Certs'
import Post from '../Components/Post'
import Skills from '../Components/Skills'
import Project from './Project'
import { SocialLinks } from '../Components/SocialLinks'

function Home() {
  return (
    <>
    <section className="bg-light text-dark p-lg-0 text-center text-sm-start welcome-section">
        <Container>
            <div className="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1>Hi, I'm Cynthia Aoko
                         </h1>
                    <h2>
                            Web Developer
                        
                    </h2>
                    <p className="lead"> Am a Computer Science graduate from Rongo University.  While waiting to graduate I had been doing various web development projects and taking various online courses. I have undergone an extensive Web Development bootcamp with Lakehub-Kisumu through the Femidevs program.  I wish to pursue a career in Software Development.</p>

                    <a href=""><button className="btn btn-lg more">My CV</button></a>
                    <a href="/Contact"><button className="btn btn-lg more">Contact Me</button></a>
                    
                </div>
                <img className="img-fluid w-50 d-none d-sm-block" src="" alt="pic"/>
            </div>
            <SocialLinks/>
        </Container>
    </section>
    <Skills/>
    <Certs/>
    <Project/>
    </>
  )
}

export default Home