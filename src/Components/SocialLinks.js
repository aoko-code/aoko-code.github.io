import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export const SocialLinks = () => {
  return (
    <div className='social-links'>
      <h2>Connect with me</h2>
        <a href='https://github.com/aoko-code' target='_blank' rel='noopener noreferrer'>
            <FaGithub/>
        </a>
        <a href='https://linkedin.com/in/cynthia-aoko ' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin/>
        </a>
        <a href='https://twitter.com/AokoCynthia' target='_blank' rel='noopener noreferrer'>
            <FaTwitter/>
        </a>
    </div>
  )
}
