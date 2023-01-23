import React from 'react'
import { skillz } from './Data'

function Skills() {
  return (
    <section id="skills" class=" p-5 ">
    <div class="container">
        <div class="d-sm-flex align-items-center justify-content-">
            <div>
                <h3>Speciality</h3>
                {skillz.map((item, itemIndex)=>{
                    const{id, image, title} = item;
                    return(
                        <div class="card text-dark">
                            <div class="card-body">
                                <div class="mb-3">
                                    <img src={image} alt={title}/>
                        </div>
                        <h4 class="card-text">{title}</h4>

                    </div>
                
                </div>
                    )
                })}
                
        
              
            </div>
            <div>
                <h2>Coding skills</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad alias commodi autem nobis unde sunt
                    dolorum libero minima totam ut!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptas amet dolor accusantium
                    exercitationem aspernatur odit dicta nulla aliquam sequi? Iste harum debitis voluptate beatae
                    delectus, hic minima natus commodi?</p>
                <button class="btn btn-sm mt-3 more">Read More</button>
            </div>
        </div>
    </div>
</section>
  )
}

export default Skills