import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return <><nav className="navbar navbar-expand-lg bg-secondary text-uppercase text-white" id="mainNav">
            <div className="container">
                <NavLink className="navbar-brand" to="home">START FRAMEWORK</NavLink>
                <button className="navbar-toggler text-uppercase fw-bold bg-primary text-white rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <svg className="svg-inline--fa fa-bars fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-0 mx-lg-1"><NavLink className={({isActive})=> isActive ==true ? 'nav-link py-3 px-0 px-lg-3 rounded custom-active': 'nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'} to="about">About</NavLink></li>
                        <li className="nav-item mx-0 mx-lg-1"><NavLink className={({isActive})=> isActive ==true ? 'nav-link py-3 px-0 px-lg-3 rounded custom-active': 'nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'} to="portfolio">Portfolio</NavLink></li>
                        
                        <li className="nav-item mx-0 mx-lg-1"><NavLink className={({isActive})=> isActive ==true ? 'nav-link py-3 px-0 px-lg-3 rounded custom-active': 'nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'} to="contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}
