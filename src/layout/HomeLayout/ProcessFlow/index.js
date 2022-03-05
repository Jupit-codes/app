import '../../../assets/css/Process/process.css'
import {BsWhatsapp} from 'react-icons/bs'
const Index = ()=>{
    return (
        <div className="process" id="process">
                 <div className="process-parallax"></div>
                 <div className='stepDiv'>
                    <h1>How to Get Started</h1>
                    
                    <div className='underline'><hr/></div>
                    <div className='buildStep'>
                        <div className='step'>
                            <div className='count'>01</div>
                            <div className='countDetails'>
                                <div className='countDetailsTitle'>SignUp For Jupit</div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.</p>
                            </div>
                        </div>
                        <div className='step'>
                        <div className='count'>02</div>
                            <div className='countDetails'>
                                <div className='countDetailsTitle'>Connect To Bank</div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.</p>
                            </div>
                        </div>
                        <div className='step'>
                        <div className='count'>03</div>
                            <div className='countDetails'>
                                <div className='countDetailsTitle'>Start Trading</div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly.</p>
                            </div>
                        </div>
                    </div>
                    <a href="https://wa.me/2348088213177" target='_blank' className='whatsapp-process'>
                        <div className='whatsappButton'><BsWhatsapp size={60} color="#25D366" /><span>Click To Talk To Our Team</span></div>
                    </a>
                 </div>
        </div>
    )
}

export default Index