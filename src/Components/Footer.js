import React from 'react'
import { SocialLinks } from './SocialLinks';
function Footer() {
  return (
    <footer>
    <div className="footercol">
        <div className="container">
            <hr/>
            <SocialLinks/>
          
            <div className="copyrightCol">
                <p>Copyright ©2024 All rights reserved. Developed by <span>Cynthia Aoko</span></p>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer