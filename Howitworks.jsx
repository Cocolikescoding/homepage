import React from 'react'
import './Howitworks.css'


const Howitworks = () => {
  return (
    <div className='Howitworks'>
      <div className="howitworks">
            <h3 className="title-steps"> How it works </h3>
         <div className="step">
            <div className="steps">
                <h3 className='numbering'>01</h3>
                <h3 className='steps-title'>A 2-min form </h3>
                <p>Fill out our 2-minute form to tell us what you need, and you'll get a list of our product partners featuring more than £15,000 worth of discounts.</p>
            </div>
            <div className="steps1">
                <h3 className='numbering'>02</h3>
                <h3 className='steps-title'>Your availability </h3>
                <p>Let us know your available time slots for a discovery call, and we will set the stage.</p>
            </div>
            <div className="steps2">
                <h3 className='numbering'>03</h3>
                <h3 className='steps-title'>Selection process </h3>
                <p>We get to work, selecting the top <b>3 </b>companies from our expansive network of over <b>1,000</b> businesses across <b>50+</b>  industries specifically suited to meet your requirements.</p>
            </div>
            <div className="steps3">
                <h3 className='numbering'>04</h3>
                <h3 className='steps-title'>Contact the company </h3>
                <p>Have a direct conversation with the companies to discuss your requirements in detail and assess their offerings.</p>
            </div>
          </div> 
       <div className="step-2">
       <div className="steps4">
                <h3 className='numbering'>05</h3>
                <h3 className='steps-title'>Your choice </h3>
                <p>Choose your preferred service provider and enjoy your new long-term service provider</p>
            </div>

            <div className="trynow">
              <p  className='trynow-decs'>Get in touch now to access 50+ industries</p>
              <button className='btn-trynow'>Try now</button>                             
            </div>
       </div>
       </div>
    </div>
  )
}

export default Howitworks
