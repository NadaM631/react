import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Copyright from '../Copyright/Copyright';
import { Outlet } from 'react-router-dom';
export default function Layout() {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
        <Copyright />

    </>
  )
}
