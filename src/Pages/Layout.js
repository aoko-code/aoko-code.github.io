import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import Topbar from '../Components/Navbar'


function Layout() {
  return (
    <>
    <Topbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout