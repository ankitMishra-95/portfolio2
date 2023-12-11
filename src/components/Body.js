import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './Homepage'
import About from './About'
import Header from './inc/Header'
import Footer from './inc/Footer'
import Work from './Work'

const Body = () => {
    
  return (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
  )
}

export default Body