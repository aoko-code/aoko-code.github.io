import React from 'react'
import { IconName } from "react-icons/ai";
function Footer() {
  return (
    <footer>
    <div classNameName="footercol">
        <div classNameName="container">
            <hr/>
            <ul classNameName="socialcol">
                <li><a href="" aria-label="twitter"><i classNameName="fa fa-twitter"></i></a></li>
                <li><a href="" aria-label="facebook"><i classNameName="fa fa-facebook-f"></i></a></li>
                <li><a href="" aria-label="linkedin"><i classNameName="fa fa-linkedin-in"></i></a></li>
            </ul>
            <div classNameName="copyrightCol">
                <p>Copyright ©2023 All rights reserved. Designed by <a href="#">Cynthia Aoko</a></p>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer