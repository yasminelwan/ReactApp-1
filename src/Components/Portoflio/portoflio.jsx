import React, { useEffect, useState } from 'react'
import SectionHeader from './../Section-Header/Section-Header';
import home from '../../Assets/Images/img1.png'
import cake from '../../Assets/Images/img2.png'
import tent from '../../Assets/Images/img3.png'
import style from './Portoflio.module.css'

export default function Portoflio() {
    const [src , setSrc] = useState('')

    useEffect(() => {
        let projects = document.querySelectorAll(".project")
        for(let i = 0; i < projects.length; i++) {
            projects[i].addEventListener("click",function()  {
                setSrc(this.children[0].src)
                document.querySelector("#details").classList.remove("d-none")
            })
        }
        document.querySelector("#details").addEventListener("click",function(e)  {
            document.querySelector("#details").classList.add("d-none")
        })
        document.querySelector("#details img").addEventListener("click",function(e)  {
            e.stopImmediatePropagation()
        })

    })



    return (
        <>
            <div className="bg-white position-absolute top-0 bottom-0 start-0 end-0 z-n1"></div>

            <div id='details' className="d-none details bg-primary bg-opacity-50 d-flex justify-content-center align-items-center position-fixed  top-0 bottom-0 start-0 end-0 z-3">
                <div className="container">
                    <div className="inner w-50 mx-auto ">
                        <img src={src} alt="" className='w-100'/>
                    </div>
                </div>
            </div>

            <section className='portoflio mb-4'>
            <div className="container d-flex justify-content-center align-items-center flex-column">
                <div className='content'>
                    <h1 className='fw-bolder py-3 text-black'>PORTFOLIO COMPONENT</h1>
                    <SectionHeader/>
                </div>
                <div className='items '>
                    <div className='row gy-4 mt-1'>
                        <div className='col-lg-4 col-md-6'>
                            <div className={`${style.work} position-relative overflow-hidden rounded-3 project`}>
                                <img src={home} className='w-100 rounded-3' alt='home'></img>
                                <div className={`${style.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `}>
                                    <i className='fa-solid fa-plus text-white   display-1   '></i>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 '>
                            <div className={`${style.work} position-relative overflow-hidden rounded-3 project`}>
                                <img src={cake} className='w-100 rounded-3' alt='home'></img>
                                <div className={`${style.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `}>
                                    <i className='fa-solid fa-plus text-white   display-1   '></i>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6  '>
                            <div className={`${style.work} position-relative overflow-hidden rounded-3 project`}>
                                <img src={tent} className='w-100 rounded-3' alt='home'></img>
                                <div className={`${style.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `}>
                                    <i className='fa-solid fa-plus text-white   display-1   '></i>
                                </div>                        
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div className={`${style.work} position-relative overflow-hidden rounded-3 project`}>
                                <img src={home} className='w-100 rounded-3' alt='home'></img>
                                <div className={`${style.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `}>
                                    <i className='fa-solid fa-plus text-white   display-1   '></i>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div className={`${style.work} position-relative overflow-hidden rounded-3 project`}>
                                <img src={cake} className='w-100 rounded-3' alt='home'></img>
                                <div className={`${style.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `}>
                                    <i className='fa-solid fa-plus text-white   display-1   '></i>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                            <div className={`${style.work} position-relative overflow-hidden rounded-3 project`}>
                                <img src={tent} className='w-100 rounded-3' alt='home'></img>
                                <div className={`${style.green} bg-main position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center `}>
                                    <i className='fa-solid fa-plus text-white   display-1   '></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}
