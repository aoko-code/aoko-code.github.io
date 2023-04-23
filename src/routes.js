import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Experience from './Pages/Experience'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import Portfolio from './Pages/Portfolio'
import Project from './Pages/Project'
import Single_proj from './Pages/Single_proj'

function Routing() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='blog' element={<Blog/>}/>
            <Route path='portfolio' element={<Portfolio/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='experience' element={<Experience/>}/>
            <Route path='project' element={<Project/>}/>
            <Route path='single_proj' element={<Single_proj/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing