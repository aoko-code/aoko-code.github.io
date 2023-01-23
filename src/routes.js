import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import Portfolio from './Pages/Portfolio'

function Routing() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='blog' element={<Blog/>}/>
            <Route path='portfolio' element={<Portfolio/>}/>
            <Route path='contact' element={<Contact/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing