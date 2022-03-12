import {AiFillLinkedin,AiFillFacebook,AiFillTwitterSquare,AiFillInstagram} from 'react-icons/ai'
import {IoMdSend} from 'react-icons/io'
import '../../assets/css/xfooter/xfooter.css'
const Index = ()=>{
    return(
        <div className="xfooter">
                <div className="socialmedias">
                  <div className='socialmedias-icons'>
                        <AiFillLinkedin size={30} color="#fff"/>
                        <AiFillFacebook  size={30} color="#fff"/>
                        <AiFillTwitterSquare  size={30} color="#fff"/>
                        <AiFillInstagram  size={30} color="#fff"/>

                  </div>
                </div>
                <div className="subcribe">
                <h1>Subcribe To Our NewsLetter</h1>
                    <div className='subscribeText'>
                        <IoMdSend className='icon' color='#fff' size={25}/>
                        <input type="text" className='form-control' placeholder='Provide Your Email Address' />
                    </div>
                </div>
                <div className="message">
                    <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat voluptatibus placeat nam.
                    </div>
                </div>
                <div className="link">
                    <div>
                        <h1>Products</h1>
                        <p>BTC</p>
                        <p>USDT</p>
                        <p>Gift Card</p>
                        <p>Perfect Money</p>
                    </div>
                    <div>
                        <h1>Links</h1>
                        <p>About Us</p>
                        <p>Wallet</p>
                        <p>Get Started</p>
                        <p>How It Works</p>
                        
                    </div>
                    <div>
                        <h1>Links</h1>
                        <p>How It Works</p>
                        <p>What We are Known For</p>
                        <p>Faq</p>
                        <p>Learn</p>
                    </div>
                    <div>
                        <h1>Contact</h1>
                        <p>
                            Address:Ajah, Lagos Nigeria.
                        </p>
                        <p>
                           <a href='tel:2348088213177'>
                            Contact Number:+2348088213177 
                            </a> 
                        </p>
                    </div>

                </div>
        </div>
    )
}
export default Index;