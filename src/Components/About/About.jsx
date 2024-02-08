import React from 'react'
import Star from '../Star/Star'

export default function About() {
    return (
        <div  className='about py-5 text-center bg-main text-white'>
            <div className='container d-flex justify-content-center align-items-center flex-column mt-5'>
                <div className='content w-50 pt-5'>
                    <h1 className='fw-bolder'>ABOUT COMPONENT</h1>
                    <Star/>
                </div>
                <div className='row text-start px-5 pb-5 mb-5 mt-4'>
                    <div className='col-md-6'>
                        <p>
                        Freelancer is a free bootstrap theme created by Route. The
                        download includes the complete source files including HTML, CSS,
                        and JavaScript as well as optional SASS stylesheets for easy
                        customization.
                        </p>
                    </div>
                    
                    <div className='col-md-6'>
                        <p>
                        Freelancer is a free bootstrap theme created by Route. The
                        download includes the complete source files including HTML, CSS,
                        and JavaScript as well as optional SASS stylesheets for easy
                        customization.
                        </p>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}