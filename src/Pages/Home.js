import React from 'react'
import { Container } from 'react-bootstrap'
import Certs from '../Components/Certs'
import Post from '../Components/Post'
import Skills from '../Components/Skills'
import Project from './Project'
import { SocialLinks } from '../Components/SocialLinks'
import { bio } from '../Components/Data'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <section className="bg-light text-dark p-lg-0 text-center text-sm-start welcome-section">
        <Container>
          {bio.map((id) =>(
            <div className="d-sm-flex align-items-center justify-content-between">
                <div>
                    <h1>Hi, I'm {id.name}
                         </h1>
                    <h2>{id.profession}                    
                    </h2>
                    <p className="lead">{id.description}</p>

                    <a href={id.cvLink} target='_blank'><button className="btn btn-lg more">My CV</button></a>
                    <Link className='btn btn-lg more' to="/contact">Contact Me</Link>
                    {/* <a href="/contact"><button className="btn btn-lg more">Contact Me</button></a> */}
                    <SocialLinks/>
                    
                </div>
                <img className="img-fluid w-50 d-none d-sm-block cynthia" src={id.pic} alt="pic"/>
            </div>
            ))}
           
        </Container>
    </section>
    <Skills/>
    <Certs/>
    <Project/>
    </>
  )
}

export default Home