import '../../../assets/css/Nextgen/nextgen.css'
import Easy from '../../../assets/images/nextgen/easy.png'
import Secure from '../../../assets/images/nextgen/secure.png'
import Noloss from '../../../assets/images/nextgen/noloss.png'
import Support from '../../../assets/images/nextgen/support.png'
import { scroller } from "react-scroll";
import { useState } from 'react'

const Index = ()=>{
    // const [scrollTop, setScrollTop] = useState();
    // const [scroll, setScroll] = useState(0);
    // const scrollToSection = () => { 
    //     scroller.scrollTo("nextgen", {
    //       duration: 800,
    //       delay: 0,
    //       smooth: "easeInOutQuart",
    //     });
    //   };
    //   const onScroll = () => {
    //     const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
    //     const scrollTopValue= this.myRef.current.scrollTop
    //     console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
    //         setScrollTop(scrollTopValue)
    //   }
    //   const scrollEvent =(e)=> {
    //     const target = e.target;
    //     console.log('Current scroll position:', target.scrollTop);
    // }
    // const onScroll = () => {
    //     const scrollY = window?.scrollY;
    //     const scrollTop = document.getElementById("nextgen").scrollTop;
    // console.log('ScrollTop',scrollTop)
    //     setScroll(scrollTop);
    //   };
    const [dropdown,setdropdown] = useState(false);
    const [dropdownSecure,setdropdownSecure] = useState(false)
    const [dropdownSupport,setdropdownSupport] = useState(false)
    const _handleClick = ()=>{
        setdropdown(!dropdown)
    }
    const _handleClickSecure = ()=>{
        setdropdownSecure(!dropdownSecure)
    }

    const _handleClickSupport = ()=>{
        setdropdownSupport(!dropdownSupport)
    }


    const _renderComponent = ()=>{
        return <div className="nextGenTextReadmore">
                    
                        The conventional cross-border payment infrastructure is designed to presuppose a long chain of intermediaries that must first approve the transaction before its being processed. Such wise, the conventional process often take between one to five business days to complete.<br/>
                        Conversely, virtual currencies eliminate such intermediaries from its structure. Any persons(s) can exchange digital currency without stressing over geographic distance.
                    
             </div>   
    }

    const _renderComponentSecure =()=>{
        return <div className="nextGenTextReadmore">
                    
                    Our platform is built to safeguard each step in the transaction infrastructure. Such wise, we are confident to say to you that your virtual assets is in a safe haven.
    
                </div>  
    }
    const _renderComponentSupport =()=>{
        return <div className="nextGenTextReadmore">
                    
                    As part of our core concentration, we’re distinctively conscious of what PROMPT interpret and we're not giving anything short of;<br/><br/>
                    P- prioritizing your satisfaction,<br/>
                    R - reliable service delivery to you, <br/>
                    O – outstanding interaction with you, <br/>
                    M - measuring your satisfaction to improve delivery, <br/>
                    P - personnel training, and <br/>
                    T - technologically focusing on new ways of getting things done.

    
                </div>  
    }
    return(
        <div className="nextgen" id='nextgen'>
                
                    <div className='titleSmall'>The Next Generation Digital</div>
                    <div className='titleBig'>Currency Exchange</div>
                    <div className='underline'><hr/></div>
                    <div className='lightText'>
                    {/* Despite all resistance, the global economy is gradually embracing a computerized eco-framework. From investment to settlement, everything is going paperless. The freshest and most encouraging expansion to the payment infrastructure is cryptographic money. */}
                    The global economy is gradually embracing a virtual eco-framework, despite many resistances.<br/>
                    From investment to settlement, everything is going digital. The emerging and innovative expansion to the payment infrastructure is <b>cryptographic money</b>
                    </div>
                    

                    <div className='core'>
                            <div className='coreChild'>
                                   
                                    <img src={Easy}/>
                                   
                               
                                <div className='nextGenTag'>
                                    Easy To Transact
                                </div >
                                {/* <div className='nextGenPeer' >Peer To Peer Transaction</div> */}
                                <div className='nextGenText'>
                                Conventional borderless payment can be unwieldy. But virtual currency is SEAMLESS!
                                {/* Conventional borderless payment can be stressful and frustrating, with every transaction involving long chain of intermediaries, that should approve the transaction before it gets to the beneficiary which may likely take between one to five days to hit . */}

                                {dropdown && _renderComponent()}
                                </div>
                                <div className='buttonNextGen' onClick={_handleClick} >
                                   {dropdown ? 'Read Less':'ReadMore'} 
                                </div>


                            </div>
                            <div className='coreChild'>
                                
                                <img src={Secure}/>
                                <div className='nextGenTag'>
                                    Safe & Secure
                                </div >
                                {/* <div className='nextGenPeer' >Peer To Peer Transaction</div> */}
                                <div className='nextGenText'>
                                    Security is of the highest importance to us.
                                    {/* Security is of the highest importance to us, and our platform is built to safeguard each step in the transaction lifecycle. */}
                                   
                                    {dropdownSecure && _renderComponentSecure()}
                                </div>
                                <div className='buttonNextGen'  onClick={_handleClickSecure}>
                                    {dropdownSecure ? 'Read Less':'ReadMore'} 
                                </div>
                            </div>
                            {/* <div className='coreChild'>
                                <img src={Noloss}/>
                                <div className='nextGenTag'>
                                    No Loss
                                </div >
                                <div className='nextGenPeer' >Peer To Peer Transaction</div>
                                <div className='nextGenText'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation


                                </div>
                                <div className='buttonNextGen'>
                                    Read More
                                </div>
                            </div> */}
                            <div className='coreChild'>
                                <img src={Support}/>
                                <div className='nextGenTag'>
                                    Prompt Support Service
                                </div >
                                {/* <div className='nextGenPeer' >Peer To Peer Transaction</div> */}
                                <div className='nextGenText'>
                                {/* As part of our core concentration conscious, we're distinctively conscious of what PROMPT interpret and we're not giving anything short of. */}
                                Security is of the highest importance to us.

                                {dropdownSupport && _renderComponentSupport()}

                                </div>
                                <div className='buttonNextGen' onClick={_handleClickSupport}>
                                    {dropdownSupport ? 'Read Less':'ReadMore'} 
                                </div>
                            </div>
                    </div>
                
        </div>
    )
}

export default Index;