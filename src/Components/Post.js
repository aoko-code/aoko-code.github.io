import React from 'react'

function Post() {
  return (
    <section id="post" className="p-5 bg-dark">
    <div className="container">
        <div className="row text-center">
            <div className="col">
            <h3 className="text-light">Recent Posts</h3>
            </div>
            <div className="col-auto">
                <a href="" className="simpleLink">View all</a>
              </div>
              <div className="row">
                
            <div className="col-md">
                <div className="card bg-light text-dark">
                    <div className="card-body text-center">
                        <div className="h1 mb-3">
                            <i className="bi bi-reception-4"></i>
                        </div>
                        <h3 className="card-title mb-3"><a href="">name</a></h3>
                        <ul className="cardopt">
                            <li>date |</li>
                            <li>author</li>
                        </ul>
                        <p className="card-text">Description</p>
                        
                        <a href="" className="btn more">Learn More</a>

                    </div>
                </div>

            </div>
           
         
        </div>

        </div>
    </div>
</section>
  )
}

export default Post