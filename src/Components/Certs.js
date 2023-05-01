import React from 'react'
import { cert } from './Data'

function Certs() {
  return (
    <section id="certificates" className="p-5 bg-dark">
    <div className="container">
        <div className="row text-center">
            <h3 className="text-light">Certificates</h3>
            {cert.map((item)=>{
                const{image, title, date, institution} = item;
                return(
                      <div className="col-md">
                <div className="card bg-light text-dark">
                    <div className="card-body text-center">
                        <img classNameName='certImg' src={image} alt={title}/>
                        <ul className="cardopt">
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