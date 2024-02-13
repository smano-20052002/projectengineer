import React from 'react'
import '../Style/Insurance.css'
import claimimg from '../images/ergo-health_7-(1)_prev_ui.png';
import applyimg from '../images/unnamed_prev_ui.png';
import calculateimg from '../images/calculator.png';
function Insurance() {
    return (
        <div className=' Main' >

            <div className="Sub mx-5 row row-cols-1 row-cols-md-4 g-4" style={{ marginTop: '5vh', display: 'flex', flexDirection: 'row', gap: '5vw' }}>

                <div className='col' style={{ width: '27vw' }}>
                    <div className="card h-100">
                        <img className="card-img-top" src={applyimg} alt="Card image cap" width='100vw' height='180px'/>
                        <div className="card-body">
                            <h5 className="card-title">Apply Insurance</h5>
                            <p className="card-text">Secure Your Agricultural Future: Click the 'Apply Insurance' button to safeguard your farming endeavors. Provide essential details for personalized coverage and financial protection tailored to your unique farming needs."
                            </p>
                        </div>
                        <div className="ms-2 mb-2">
                            <button className='btn btn-outline-success'>Apply Now</button>

                        </div>
                    </div>
                </div>
                <div className='col' style={{ width: '27vw' }}>
                    <div className="card h-100">
                        <img className="card-img-top" src={calculateimg} alt="Card image cap" width='100vw' height='180px' />
                        <div className="card-body">
                            <h5 className="card-title">Calculate Insurance</h5>
                            <p className="card-text">Precision Planning for Protection: Utilize the 'Calculate Insurance' button to assess and tailor your insurance coverage based on your farming inputs. Input accurate details to receive a customized insurance plan, ensuring comprehensive protection for your agricultural ventures."
                            </p>
                        </div>
                        <div className="ms-2 mb-2">
                            <button className='btn btn-outline-success'>Calculate</button>

                        </div>
                    </div>
                </div>

                <div className='col' style={{ width: '27vw' }}>
                    <div className="card h-100">
                        <img className="card-img-top" src={claimimg} alt="Card image cap" width='100vw' height='180px' />
                        <div className="card-body">
                            <h5 className="card-title">Claim Insurance</h5>
                            <p className="card-text">Seamless Claims Process: Take charge of your financial security. Click the 'Claim Insurance Now' button to initiate a smooth and efficient claims process. Provide necessary details to ensure swift processing and receive the support you need during unforeseen events in your farming journey."

                                has context menu</p>
                        </div>
                        <div className="ms-2 mb-2">
                            <button className='btn btn-outline-success'>Claim Now</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Insurance