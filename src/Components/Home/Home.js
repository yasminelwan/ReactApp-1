import React from 'react'
import homeImage from '../../Assets/Images/avataaars.svg'


import Star from '../Star/Star'

export default function Home() {
    return (
        <>
            <section className='home bg-main  '>
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="row">
                        <div className="photo w-25 mx-auto mt-5 rounded-circle rounded">
                            <img src={homeImage} alt="man" className={` w-100 `} />
                        </div>                        
                        <h1 className='text-center mt-3 text-white fw-bolder'>START FRAMEWORK</h1>
                        <Star/>
                        <div className='text text-white mb-5  text-center'>
                            <p>Graphic Artist - Web Designer - Illustrator</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}