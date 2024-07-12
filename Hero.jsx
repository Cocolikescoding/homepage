import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <div className='hero'>
            <div className='title'>
                <p>Receive exclusive discounts from our products partners when you try our service.</p>
            </div>

            <div className='title1'>
                <p>End your search frustrations today.</p>
                <p>Find the top 1% to solve your problem.</p>
            </div>
            <div className='titledesc'>
                <p>We eliminate the stress of locating the best service provider for your problem. Selected directly from our </p>
                <p>quality-assured network of companies that are leading the way in restoring trust in commerce.</p>
            </div>

                <div className='maincontainer'>  
                        <div className='Requests'>
                            <div className='miniquestion'>
                                    <p>What do you need?</p>
                                    <p className='p2'>Available Requests:<p className='p3'>100</p></p>
                            </div>

                            <div className='MainSearch'>
                                <div className='search'>
                                        <input type ='text' placeholder = 'Service' className='input-filed'/>
                                        <select className='dropdown'></select>
                                </div>
                                <div className='search1'>
                                        <input type ='text' placeholder = 'Industry' className='input-filed'/>
                                        <select className='dropdown'> </select>
                            </div>
                                        <button className='go-btn'>Go</button>
                        </div> 
                                            
                        </div>

                        <div className='measures'>
                                    <div className='measure-item'>
                                        <h2>What measures do we take?</h2>
                                        <p  className='measure-description'>When you're trying to find the ideal fit, use our service:</p>
                                        <button className='find-out-more-btn'>Find out more</button>
                                    </div>
                                <div className='measure-description'>
                                        <p>We prioritize your confidence in our services by ensuring every provider in our network undergoes a rigorous vetting process. This includes <b>comprehensive background checks, verification of qualifications,</b> and <b>regular performance reviews</b> to maintain high standards of service.</p> <br></br>
                                        <p><b>We only partner with providers who consistently demonstrate exceptional commitment to quality and customer satisfaction.</b></p>
                                    </div>
                        </div>  
                </div>
            
    </div>
  )
}

export default Hero
