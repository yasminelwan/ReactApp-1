import React from 'react'
import style from './Section-Hreader.module.css'

export default function Star() {
    return (
        <>
            <div className='star-icon position-relative'>
                <div className={`${style.star} mx-auto  position-absolute start-50 translate-middle pb-4 `}>
                <i className='fa-solid fa-star text-black position-absolute translate-middle bg-white px-3 pb-1'></i>
                </div>
            </div>
            <hr className={`mx-auto border border-2 border-black opacity-100 mt-3 d-block ${style.hr}` }/>
        </>
    )
}