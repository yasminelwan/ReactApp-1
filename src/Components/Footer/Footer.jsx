import React from 'react'
import styel from './Footer.module.css'

export default function Footer() {
    return (
        <div  className='footer bg-dark text-white  text-center p-2 '>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-md-4'>
                        <h2>LOCATION </h2>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className='col-md-4'>
                        <h2>AROUND THE WEB </h2>
                        <div className='icons'>
                            <div className='row justify-content-center d-flex mx-auto'>
                                
                                    <div className={`${styel.icon}`}>
                                        <a href='#' className='text-decoration-none'>
                                            <div className={`${styel.inner}`}>
                                                <i className="fa-brands fa-facebook"></i>
                                            </div>
                                        </a>
                                    </div>

                                
                                
                                    <div className={`${styel.icon}`}>
                                        <a href='#' className='text-decoration-none'>
                                            <div className={`${styel.inner}`}>
                                                <i className="fa-brands fa-twitter"></i>
                                            </div>
                                        </a>
                                    </div>
                                
                                
                                    <div className={`${styel.icon}`}>
                                        <a href='#' className='text-decoration-none'>
                                            <div className={`${styel.inner}`}>
                                                <i className="fa-brands fa-linkedin-in"></i>
                                            </div>
                                        </a>
                                    </div>
                                
                                
                                    <div className={`${styel.icon}`}>
                                        <a href='#' className='text-decoration-none'>
                                            <div className={`${styel.inner}`}>
                                                <i className="fa-solid fa-globe"></i>
                                            </div>
                                        </a>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <h2>ABOUT FREELANCER </h2>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
            <div className='bg-second py-4 text-center text-white bg-dark text-capitalize'>copyright &copy;  Your Website 2021</div>
        </div>
    )
}
