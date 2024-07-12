import React from 'react'
import './Features.css'
const Feature = () => {
  return (
    <div className='Feature'>
                <div className="Maintitle">
                    <h3 className='MainTitle'>Features</h3> </div>
                    <div className="features-grid">
                        
                                <div className="first-container">
                                        <div className="schedule-box">
                                            <h3 className='minititle'>Scheduling Support</h3>
                                            <p className='desc'>We arrange meetings with providers based on your availability and theirs also.</p>
                                        </div>

                                        <div className="Over-box">
                                            <h3 className='minititle'>Over £10,000.00 worth of product discounts</h3>
                                            <p className='desc'>Exclusive product discounts from our partner network when you search - worth over £10,000.00 </p>
                                        </div>
                                </div>

                                <div className="second-container">
                                        <div className="even-box">
                                            <h3 className='minititle1'>Even Playing Field - Choose Ethically</h3>
                                            <p className='desc'>We ensure fairness by not allowing companies to pay for greater visibility. Choose a provider because they deserve it, not advertising.</p>
                                        </div>
                                </div>

                                <div className="third-container">
                                        <div className="solution-box">
                                            <h3 className='minititle'>Solution Guarantee</h3>
                                            <div className="desc">Find effective solutions for any inquiry, every time. If we can’t solve it within our network, we will go out and look on your behalf, for free.</div>
                                        </div>
                                        <div className="nest">
                                                <div className="personalised-box">
                                                    <h3 className='minititle'>Personalised Insights</h3>
                                                    <p className='desc'>Tailored data to help you understand why a particular provider is a good match for your specific needs.</p>
                                                </div>

                                                <div className="Expert-box">
                                                    <h3 className='minititle'>Expert Access</h3>
                                                    <p className='desc'>Access to a pre-selected network of companies who know what appreciate service quality.</p>
                                                </div>
                                        </div>    
                                </div>
                        </div>

                                                                       {/* Next Section */}
                            <div className="last-section">
                                <h3 className='last-section-title'>Providing service providers you can trust.</h3>
                                <div className="last-section-container">
                                    <div className="blog">
                                        <h3 className='digits'>4.7</h3>
                                        <p className='digits-desc'>average Trust pilot rating from our network</p>
                                    </div>

                                    <div className="blog">
                                        <h3 className='digits'>90%</h3>
                                        <p className='digits-desc'>customer satisfaction rate from their service experience</p>
                                    </div>

                                    <div className="blog">
                                        <h3 className='digits'>50+</h3>
                                        <p className='digits-desc'>industries covered</p>
                                    </div>
                                </div>

                                

                          </div>
                        
                        
        


      
    </div>
  )
}

export default Feature
