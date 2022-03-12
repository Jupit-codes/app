import '../../../assets/css/Step/step.css'
import Phone from '../../../assets/images/landingpage/bg/89347.png'
const Index = ()=>{
    return(
        <div className="step">
            <div className="process-parallax"></div>
            <div className='containery'>
                <img src={Phone}/>

            </div>

            <div className='containerx'>
                <div className='stepTitle'>
                    Get started in 3 easy steps
                </div>
                <div className='timeline'>
                    <ul>
                        <li>
                            <div className='timeline-content'>
                                    <h1>Signup to Jupit</h1>
                                    <p>
                                        Signup with just username,email address and password.
                                    </p>
                            </div>
                        </li>
                        <li>
                            <div className='timeline-content'>
                                    <h1>Email Confirmation</h1>
                                    <p>
                                        Confirm your email and login into your account.
                                    </p>
                            </div>
                        </li>
                        <li>
                            <div className='timeline-content'>
                                    <h1>Start Trading</h1>
                                    <p>
                                    Setup your Walletsafety password (WSP).
                                    </p>
                                    <p>
                                    Fund Your wallet and Start Trading.
                                    </p>
                            </div>
                        </li>
                        
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Index;