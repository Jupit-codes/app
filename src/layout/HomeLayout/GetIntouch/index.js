import '../../../assets/css/GetInTouch/getintouch.css'
import {ImLocation2} from 'react-icons/im'
import {BiTimeFive} from 'react-icons/bi'
import {MdOutlineMail} from 'react-icons/md'
import {IoMdCall} from 'react-icons/io'
const Index = ()=>{
    return(
        <div className="getIntouch" id="getIntouch">
            <div className='TitleGetInTouch'>
                 <h1>Get In Touch</h1>
            </div>
            <div className='lightTextTouch'>
                We are always open and we welcome and questions you have for our team.<br/> If you wish to get in touch, please fill out the form below.
            </div>
            <div className='contactDiv'>
                <div className='contactInfor'>
                    <div className="spaceOut">
                        <ImLocation2 size={30}/>
                        <div>Ajah Lagos, Nigeria</div>
                    </div>
                    <div className="spaceOut">
                        <BiTimeFive size={30}/>
                        <div>Mon- Fri (8am-6pm)</div>
                    </div>

                    <div className="spaceOut">
                        <MdOutlineMail size={30} color="#003300"/>
                        <div>hello@jupitapp.co</div>
                    </div>

                    <div className="spaceOut">
                        <IoMdCall size={30}/>
                        <div>(+234) 808 821 3177</div>
                    </div>

                    
                </div>

                <div className='contactForm'>
                    <div className='controlInput'>
                        <input type="text" className='form-control'  placeholder='Name'/>
                    </div>
                    <div className='controlInput'>
                        <input type="email" className='form-control' placeholder='Email Address'/>
                    </div>
                    <div className='controlInput'>
                        <textarea id="w3review" name="w3review" className='form-control' rows="4" cols="50">
                           
                        </textarea>
                    </div>
                    <div className='controlInput'>
                        <input type="submit" className='form-control submit' value="Send Message" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Index