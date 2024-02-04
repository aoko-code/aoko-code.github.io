import React from "react"
import { Link } from 'react-router-dom';

function ProjectLink({projectId, onClick}){
    const handleClick = (event) => {
        event.preventDefault()
        onClick(projectId)
    }
    return(
        <Link className='btn more' onClick={handleClick}>Visit site</Link>
    )
}

export default ProjectLink