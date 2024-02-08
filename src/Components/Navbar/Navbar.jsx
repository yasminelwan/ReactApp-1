import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'








export default function Navbar() {
    useEffect(() =>{
        document.body.style.paddingTop = `${document.querySelector('nav').clientHeight}px`
        document.body.style.backgroundColor = '#FFFFFF !important'
    })

    document.addEventListener("scroll" ,function(){
        if(window.scrollY > 10){
            document.querySelector("nav").classList.remove("py-4")
        }
        else{
            document.querySelector("nav").classList.add("py-4")
        }
    })

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark fixed-top text-uppercase py-4 transition ">
                <div className="container">
                    <Link className="navbar-brand text-white text-uppercase fw-bold fs-2" to="">Start Framework </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className={`${styles.navPills} navbar-nav nav-pills `}  >
                            <li className="nav-item">
                                <Link className={`${styles.navLink} nav-link`} to="about">about</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${styles.navLink} nav-link`} to="portfolio">portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${styles.navLink} nav-link`} to="contact">contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
