import React from 'react'
import { IconName } from "react-icons/ai";
function Footer() {
  return (
    <footer>
    <div className="footercol">
        <div className="container">
            <hr/>
            <ul className="socialcol">
                <li><a href="" aria-label="twitter"><i className="fa fa-twitter"></i></a></li>
                <li><a href="" aria-label="facebook"><i className="fa fa-facebook-f"></i></a></li>
                <li><a href="" aria-label="linkedin"><i className="fa fa-linkedin-in"></i></a></li>
            </ul>
            <div className="copyrightCol">
                <p>Copyright ©2023 All rights reserved. Designed by <a href="#">Cynthia Aoko</a></p>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer