import sdlc from '../img/sdlc.jpg'
import git from '../img/git.png'
import web from '../img/web.png'
import os from '../img/os.png'
import db from '../img/db.png'
import hcss from '../img/hcss.png'
import instal from '../img/instal.png'
import ms from '../img/ms.png'
import network from '../img/network.png'
import psql from '../img/psql.png'
import py from '../img/py.png'
import react from '../img/react.jpeg'
import webpack from '../img/webpack.jpg'
import plp from '../img/plp.jpeg'
import remas from '../img/remas.jpeg'
import bios from '../img/bios.jpeg'
import calc from '../img/calc.jpeg'
import cynthia from '../img/cynthia.jpg'
import lakehub from '../img/lakehub.png'

export const skillz = [
    {
        id: 1, 
        image:git,
        title: 'Version Control'
    },
    {
        id: 2, 
        image:sdlc,
        title: 'Full Software Development Cycle'
    },
    
    {
        id: 3, 
        image:web,
        title: 'Web Development'
    },
    {
        id: 4, 
        image:os,
        title: 'Operating Systems'
    },
    {
        id: 5, 
        image:db,
        title: 'Databases'
    },
    
]
export const oskillz = [
    {
        id: 1, 
        image:instal,
        title: 'IT Policies | Procedure Instalation'
    },
    {
        id: 2, 
        image:network,
        title: 'Networking'
    },
    {
        id: 3, 
        image:ms,
        title: 'Microsoft Office Packages'
    },
    
]
export const wskillz = [
    {
        id: 1, 
        image:py,
        title: 'Python | Django'
    },
    {
        id: 2, 
        image:react,
        title: 'JavaScript | ReactJs'
    },
    {
        id: 3, 
        image:webpack,
        title: 'Webpack | NodeJs'
    },
    {
        id: 4, 
        image:psql,
        title: 'PostgreSQL | MySQL'
    },
    {
        id: 5, 
        image:hcss,
        title: 'HTML5 | CSS | SASS | SCSS'
    }
]
export const cert = [
    {
        id: 1, 
        image:plp,
        title: 'PowerLearn Project Certificate',
        date: 'December, 2022',
        institution: 'Powerlearn Project'
    }, 
    {
        id: 2, 
        image:lakehub,
        title: 'FemiDev Web Development Bootcamp Certificate',
        date: 'November, 2022',
        institution: 'Lakehub'
    },   
]
export const projects = [
    {
        id: '1',
        category: 'cyber',
        image: remas,
        title:"Text Encryption App (AES)",
        description: "This is a web application that encrypts text and decrypts encrypted text using the AES algorithm",
        link: 'https://github.com/aoko-code/Tect-encryption'
    },
    {
        id: '1',
        category: 'web',
        image: remas,
        title:"ReMaS",
        description: "Learning resources platform",
        link: ''
    },
    {
        id: '2',
        category: 'design',
        image: calc,
        title:"Calculator design",
        description: "Basic calculator design using Figma",
        link: '/'
    }
   
]
export const blogs = [
    {
        id: '1',
        title:"BIOS AND UEFI",
        content: "Brief description of BIOS and UEFI boot modes",
        image: bios,
        date: '9th July 2023',
        link: 'https://medium.com/@khamcynthia/bios-and-uefi-97e3daf266ca'
    }

]
export const expe = [
    {
        id: 1,
        image: remas,
        title: "CPU INTERN",
        org: "HEALTHIT",
        period: "February 2023 - January 2024",
        responsibility: ("Technical Support", "Delivery of Project Activities", "Provide Project reports")
    }
]
export const bio =[
    {
        name: 'Cynthia Aoko',
        profession: 'Software Developer',
        description:'Am a detail-oriented and highly motivated individual with an academic background in Computer Science. This has equipped me with a solid foundation in data analysis and programming. I am a collaborative team player that thrives in a work environment that encourages knowledge-sharing and innovation. I would be thrilled to discuss my qualifications further and how I can add value to your team. ',
        cvLink: 'https://docs.google.com/document/d/1rzJj_1FWGwNA3YuxaesYj-6TvtcYogQY/edit?usp=sharing&ouid=103497638208663202641&rtpof=true&sd=true',
        pic: cynthia,
    }
]
