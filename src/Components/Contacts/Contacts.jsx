import React from 'react'
import SectionHeader from './../Section-Header/Section-Header';
import styels from './Contacts.module.css'

export default function Contacts() {
    return (
        <>
            <div className="bg-white position-absolute top-0 bottom-0 start-0 end-0 z-n1"></div>
            <section className='contacts'>
                <div className="container d-flex justify-content-center align-items-center flex-column">
                <div className='content'>
                    <h1 className='fw-bolder py-3 text-black'>CONATCT SECTION</h1>
                    <SectionHeader/>
                </div>

                <form  className=' mx-auto mt-5 w-100' action="">
                    <div className={`${styels.text} mx-auto pb-1 mb-4 position-relative`}>
                      <input className={`form-control z-1 position-relative border-bottom border-0` } type="text" placeholder="userName" onInput={console.log("inputed")} />
                      <small id='userName' className={`${styels.textMain} position-absolute `}>userName :</small>
                    </div>   
      
                    <div className={`${styels.text} mx-auto pb-1 mb-4 position-relative`}>
                      <input className={`form-control z-1 position-relative border-bottom border-0`} type="text" placeholder="userAge"  />
                      <small id='userAge' className={`${styels.textMain} position-absolute `}>userAge :</small>
                    </div> 
      
                    <div className={`${styels.text} mx-auto pb-1 mb-4 position-relative`}>
                      <input className={`form-control z-1 position-relative border-bottom border-0`} type="text" placeholder="userEmail"  />
                      <small id='userEmail' className={`${styels.textMain} position-absolute `}>userEmail :</small>
                    </div> 
      
                    <div className={`${styels.text} mx-auto pb-1 mb-4 position-relative`}>
                      <input className={`form-control z-1 position-relative border-bottom border-0`} type="text" placeholder="userPassword"  />
                      <small id='userPassword' className={`${styels.textMain} position-absolute `}>userPassword :</small>
                    </div> 
      
                    <div className={`${styels.text} mx-auto mb-5`}>
                    <button  className='btn bg-main text-white  mx-auto d-block w-100' > submit </button>
                    </div>
      
                </form>
                </div>
            
            </section>        
        </>
    )
}

