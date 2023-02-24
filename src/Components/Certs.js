import React from 'react'
import { cert } from './Data'

function Certs() {
  return (
    <section id="certificates" class="p-5 bg-dark">
    <div class="container">
        <div class="row text-center">
            <h3 class="text-light">Certificates</h3>
            {cert.map((item, itemIndex)=>{
                const{id, image, title, date, institution} = item;
                return(
                      <div class="col-md">
                <div class="card bg-light text-dark">
                    <div class="card-body text-center">
                        <img className='certImg' src={image} alt={title}/>
                        <ul class="cardopt">
                            <li>{date} |</li>
                            <li>{institution}</li>
                        </ul>

                    </div>
                </div>
            </div>
                )
            })}
          
            
            
        </div>
    </div>
</section>
  )
}

export default Certs