import '../../../assets/css/Nextgen/nextgen.css'
import Easy from '../../../assets/images/nextgen/easy.jpg'
import Secure from '../../../assets/images/nextgen/secure.jpg'
import Noloss from '../../../assets/images/nextgen/noloss.jpg'
import Support from '../../../assets/images/nextgen/support.jpg'
const Index = ()=>{
    return(
        <div className="nextgen">
                
                    <div className='titleSmall'>The Next Generation Digital</div>
                    <div className='titleBig'>Currency Exchange</div>

                    <div className='lightText'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis nisl porttitor, eleifend tortor sed, auctor libero. Proin quis purus eu mi fermentum blandit. Nam eget nisi ipsum. Nullam vitae
                    </div>

                    <div className='core'>
                            <div className='coreChild'>
                                
                                <img src={Easy}/>
                                <div className='nextGenTag'>
                                    Easy To Transact
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
                                <img src={Secure}/>
                                <div className='nextGenTag'>
                                    Safe & Secure
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
                                <div className='nextGenPeer' >Peer To Peer Transaction</div>
                                <div className='nextGenText'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation


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