import '../../assets/css/newFooter/newfooter.css'
import {IoMdSend} from 'react-icons/io'
import {AiFillLinkedin,AiFillFacebook,AiFillTwitterSquare,AiFillInstagram} from 'react-icons/ai'
const Index = ()=>{
    return(
        <div className="newFooter">
            <h1>Subcribe To Our NewsLetter</h1>
            <div className='subscribeText'>
                <IoMdSend className='icon' color='#fff' size={25}/>
                <input type="text" className='form-control' placeholder='Provide Your Email Address' />
            </div>

            <div className='socialmedia'>
               <div>
                     <AiFillLinkedin size={25} color="#fff"/>
                </div> 
                <div>
                    <AiFillFacebook size={25} color="#fff"/>
                </div>
                <div>
                    <AiFillTwitterSquare size={25} color="#fff"/>
                </div>
                <div>
                    <AiFillInstagram size={25} color="#fff"/>
                </div>
            
            </div>
            <div className='footerText'>
                © Jupit, 2022. POwered By Jupit Dev. Team
            </div>
        </div>
    )
}

export default Index;