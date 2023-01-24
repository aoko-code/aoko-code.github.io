import React from 'react'

function Contact() {
  return (
    <section class="contact p-5" id="contact">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <form id="contact-form" action="" method="post">
                    
                    <legend>Contact Me</legend>
                    <div class="col-md-12">
                        <label for="name">Name</label>
                        
            
                        <label for="email">Email</label>
                        
            
                        <label for="subject">Message</label>
                        
                    </div>
                    
                    <div class="col-md-4">
                        <input type="submit" class="bg-dark text-light control" name="send message" value="send Message"/>
                    </div>


                </form>
            </div>
            <div class="col-md-6">
                <div class="contact-image">
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Contact