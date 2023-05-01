import React, { useEffect, useState } from 'react'

function ProjectDisplay({projectId}) {
  const [project, setProject] = useState(null)
  const{id, image, title, description} = project;
  useEffect(() => {
    fetch(`/Data/project/${project.id}`)
    .then(response => response.json())
    .then(data => setProject(data))
  }, [id])
  if (!project){
    return <div>Loading ...</div>
  }
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectDisplay