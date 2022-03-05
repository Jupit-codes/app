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
                We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below.
            </div>
            <div className='contactDiv'>
                <div>
                    <div className="spaceOut">
                        <ImLocation2 size={30}/>
                        <div>The BuyCoin Company, LLC
32 Barnard St. #145, GA 80634</div>
                    </div>
                    <div className="spaceOut">
                        <BiTimeFive size={30}/>
                        <div>Mon- Fri (8am-6pm)</div>
                    </div>

                    <div className="spaceOut">
                        <MdOutlineMail size={30} color="#003300"/>
                        <div>support@jupitapp.co</div>
                    </div>

                    <div className="spaceOut">
                        <IoMdCall size={30}/>
                        <div>+2347080934005</div>
                    </div>

                    
                </div>

                <div>
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
                        <input type="submit" className='form-control' value="Send Message" className="submit"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Index