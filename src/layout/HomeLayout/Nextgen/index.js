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
   
    return(
        <div className="nextgen" id='nextgen'>
                
                    <div className='titleSmall'>The Next Generation Digital</div>
                    <div className='titleBig'>Currency Exchange</div>

                    <div className='lightText'>
                    Despite all resistance, the global economy is gradually embracing a computerized eco-framework. From investment to settlement, everything is going paperless. The freshest and most encouraging expansion to the payment infrastructure is cryptographic money.
                    </div>

                    <div className='core'>
                            <div className='coreChild'>
                                   
                                    <img src={Easy}/>
                                   
                               
                                <div className='nextGenTag'>
                                    Easy To Transact
                                </div >
                                {/* <div className='nextGenPeer' >Peer To Peer Transaction</div> */}
                                <div className='nextGenText'>
                                Conventional borderless payment can be stressful and frustrating, with every transaction involving long chain of intermediaries, that should approve the transaction before it gets to the beneficiary which may likely take between one to five days to hit (in the case of cross border payment.)


                                </div>
                                <div className='buttonNextGen'>
                                    Read More
                                </div>


                            </div>
                            <div className='coreChild'>
                                
                                <img src={Secure}/>
                                <div className='nextGenTag'>
                                    Safe & Secure
                                </div >
                                {/* <div className='nextGenPeer' >Peer To Peer Transaction</div> */}
                                <div className='nextGenText'>
                                    Security is of the highest importance to us, and our platform is built to safeguard each step in the transaction lifecycle.


                                </div>
                                <div className='buttonNextGen'>
                                    Read More
                                </div>
                            </div>
                            <div className='coreChild'>
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
                            </div>
                            <div className='coreChild'>
                                <img src={Support}/>
                                <div className='nextGenTag'>
                                    Prompt Support Service
                                </div >
                                {/* <div className='nextGenPeer' >Peer To Peer Transaction</div> */}
                                <div className='nextGenText'>
                                As part of our core concentration conscious, we're distinctively conscious of what PROMPT interpret and we're not giving anything short of.


                                </div>
                                <div className='buttonNextGen'>
                                    Read More
                                </div>
                            </div>
                    </div>
                
        </div>
    )
}

export default Index;