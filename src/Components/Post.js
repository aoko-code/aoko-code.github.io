import React from 'react'

function Post() {
  return (
    <section id="post" class="p-5 bg-dark">
    <div class="container">
        <div class="row text-center">
            <div class="col">
            <h3 class="text-light">Recent Posts</h3>
            </div>
            <div class="col-auto">
                <a href="" class="simpleLink">View all</a>
              </div>
              <div class="row">
                
            <div class="col-md">
                <div class="card bg-light text-dark">
                    <div class="card-body text-center">
                        <div class="h1 mb-3">
                            <i class="bi bi-reception-4"></i>
                        </div>
                        <h3 class="card-title mb-3"><a href="">name</a></h3>
                        <ul class="cardopt">
                            <li>date |</li>
                            <li>author</li>
                        </ul>
                        <p class="card-text">Description</p>
                        
                        <a href="" class="btn more">Learn More</a>

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