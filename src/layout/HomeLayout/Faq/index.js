import '../../../assets/css/faq/faqhero.css'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapsible from 'react-collapsible';
import { useState } from 'react'
import {RiArrowDropDownFill} from 'react-icons/ri';
import {MdArrowDropUp} from 'react-icons/md'
const Index=()=>{
    const [isOpenEvent1, setOpenEvent1] = useState(false);
    const [isOpenEvent2, setOpenEvent2] = useState(false);
    const [isOpenEvent3, setOpenEvent3] = useState(false);
    const [isOpenEvent4, setOpenEvent4] = useState(false);
    const [isOpenEvent5, setOpenEvent5] = useState(false);
    const [isOpenEvent6, setOpenEvent6] = useState(false);
    const [isOpenEvent7, setOpenEvent7] = useState(false);
    const _handleOpen =(event)=>{
        console.log(event)
        switch (event) {
            case 'event1':
                setOpenEvent1(!isOpenEvent1)
                setOpenEvent2(false)
                setOpenEvent3(false)
                setOpenEvent4(false)
                setOpenEvent5(false)
                setOpenEvent6(false)
                setOpenEvent7(false)
                break;
            case 'event2':
                setOpenEvent2(!isOpenEvent2)
                setOpenEvent1(false)
                setOpenEvent3(false)
                setOpenEvent4(false)
                setOpenEvent5(false)
                setOpenEvent6(false)
                setOpenEvent7(false)

                break;
            case 'event3':
                setOpenEvent3(!isOpenEvent3)
                setOpenEvent2(false)
                setOpenEvent1(false)
                setOpenEvent4(false)
                setOpenEvent5(false)
                setOpenEvent6(false)
                setOpenEvent7(false)
                break;
            case 'event4':
                setOpenEvent4(!isOpenEvent4)
                setOpenEvent2(false)
                setOpenEvent3(false)
                setOpenEvent1(false)
                setOpenEvent5(false)
                setOpenEvent6(false)
                setOpenEvent7(false)
                break;
            case 'event5':
                setOpenEvent5(!isOpenEvent5)
                setOpenEvent2(false)
                setOpenEvent3(false)
                setOpenEvent1(false)
                setOpenEvent4(false)
                setOpenEvent6(false)
                setOpenEvent7(false)
                break;
            case 'event6':
                setOpenEvent5(false)
                setOpenEvent2(false)
                setOpenEvent3(false)
                setOpenEvent1(false)
                setOpenEvent4(false)
                setOpenEvent6(!isOpenEvent6)
                setOpenEvent7(false)
                break;
            case 'event7':
                setOpenEvent5(false)
                setOpenEvent2(false)
                setOpenEvent3(false)
                setOpenEvent1(false)
                setOpenEvent4(false)
                setOpenEvent6(false)
                setOpenEvent7(!isOpenEvent7)
                break;
                
            default:
                break;
        }
    }

    return (
        <div className="faq" id="faq">
           
               <div className="SoleHeader">

                    {/* <div className='mylogo'>
                        <img src={logo} style={{pointerEvents:'none'}}/>
                    </div> */}
                    <div className='myTitle'>
                        <br/>
                        <span>FAQ</span>
                    </div>

                </div>

            <div className="faq-resp">
                {/* <Accordion>
                    <Accordion.Item eventKey="0" >
                        <Accordion.Header>1. What does SS mean?</Accordion.Header>
                        <Accordion.Body style={{textAlign:'left'}}>
                        SS means Squireling Squirrels, which is the name of our project.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>2. What is NFT?</Accordion.Header>
                        <Accordion.Body style={{textAlign:'left'}}>
                         An NFT is a ‘non fungible token’, a unique digital asset, that can be verified on the blockchain.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What is SS build on?</Accordion.Header>
                        <Accordion.Body style={{textAlign:'left'}}>
                        We build SS to live on the Ethereum Blockchain and hosted on IPFS.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Pre sale and public sale date?</Accordion.Header>
                        <Accordion.Body style={{textAlign:'left'}}>
                            <span>Pre sale date is 22 Jan 2022</span><br/>
                            <span>Public sale date is 23 Jan 2022</span>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion> */}

                {/* <Collapsible trigger="Start here">
                    <p>
                        This is the collapsible content. It can be any element or React
                        component you like.
                    </p>
                    <p>
                        It can even be another Collapsible component. Check out the next
                        section!
                    </p>
                </Collapsible> */}
                <div className='faq-question'>
                    <div className='faq-title' onClick={()=>{_handleOpen('event6')}}>  
                    1.	&nbsp; What virtual currencies will be available on Jupit when it launches?
                    </div>
                    <div className='faq-icon'> 
                    {isOpenEvent6 ? <MdArrowDropUp size={25} color='#fff' onClick={()=>{_handleOpen('event6')}}/>:<RiArrowDropDownFill size={25} color='#fff' onClick={()=>{_handleOpen('event6')}}/> }
                    </div>
                    <div>
                        {isOpenEvent6&& 
                            <div className='faq-answer'>
                                     <p> 
                                      {/* Squirreling Squirrels will be comprised of 6,600 unique NFT’s on the Ethereum Blockchain. */}
                                      {/* Squirreling Squirrels will be comprised of 6,600 unique NFT’s on the Ethereum Blockchain & hosted on IPFS. */}
                                      Ans - With Jupit, you'll only be able to transact Bitcoin, USDT and Virtual Redeemable Cards.
                                    </p>
                                   
                            </div> 
                        }
                    </div>
                    
                </div>

                <div className='faq-question'>
                    <div className='faq-title' onClick={()=>{_handleOpen('event7')}}>  
                    2.	&nbsp; Will I be able to own a crypto-wallet?
                    </div>
                    <div className='faq-icon'> 
                    {isOpenEvent7 ? <MdArrowDropUp size={25} color='#fff' onClick={()=>{_handleOpen('event7')}}/>:<RiArrowDropDownFill size={25} color='#fff' onClick={()=>{_handleOpen('event7')}}/> }
                    </div>
                    <div>
                        {isOpenEvent7&& 
                            <div className='faq-answer'>
                                     <p> 
                                     Ans - Yes! With Jupit, you will be able to create a virtual wallet that’ll allow you send, receive and store your virtual asset.
                                     </p>
                                     
                            </div> 
                        }
                    </div>
                    
                </div>



                <div className='faq-question'>
                    <div className='faq-title' onClick={()=>{_handleOpen('event1')}}>  
                        3. &nbsp;	What region will Jupit offer its service?
                    </div>
                    <div className='faq-icon'> 
                    {isOpenEvent1 ? <MdArrowDropUp size={25} color='#fff' onClick={()=>{_handleOpen('event1')}}/>:<RiArrowDropDownFill size={25} color='#fff' onClick={()=>{_handleOpen('event1')}}/> }
                    </div>
                    <div>
                        {isOpenEvent1 && 
                            <div className='faq-answer'>
                                   <p>Ans - Jupit service will only available to Nigeria users at Launch. However, we anticipate to expand our service band across Africa afterwards.</p>
                                   
                            </div> 
                        }
                    </div>
                    
                </div>
                <div className='faq-question'>
                    <div className='faq-title' onClick={()=>{_handleOpen('event2')}}>  
                        4. &nbsp;	How can I trade with Jupit before its application launch?
                    </div>
                    <div className='faq-icon'> 
                    {isOpenEvent2 ? <MdArrowDropUp size={25} color='#fff' onClick={()=>{_handleOpen('event2')}}/>:<RiArrowDropDownFill size={25} color='#fff' onClick={()=>{_handleOpen('event2')}}/> }
                    </div>
                    <div>
                        {isOpenEvent2 && 
                            <div className='faq-answer'>
                                  <p>Ans - Our trading operations are currently done through our Business WhatsApp and our Instagram Page.</p>
                                  
                                 
                            </div> 
                        }
                    </div>
                    
                </div>

                <div className='faq-question'>
                    <div className='faq-title' onClick={()=>{_handleOpen('event3')}}>  
                        5. &nbsp;	When will Jupit launch its trading application? 
                    </div>
                    <div className='faq-icon'> 
                        {isOpenEvent3 ? <MdArrowDropUp size={25} color='#fff' onClick={()=>{_handleOpen('event3')}}/>:<RiArrowDropDownFill size={25} color='#fff' onClick={()=>{_handleOpen('event3')}}/> }
                    </div>
                    <div>
                        {isOpenEvent3 && 
                            <div className='faq-answer'>
                                    <p>
                                        {/* Squirreling Squirrels launch date is still TBA. We will be revealing the pre-launch date soon as well.! */}
                                        Ans - We’re doing a few exceptionally curious things to ensure our platform is develop with the safest components and that of course takes time by its stages. However, our PWA trading platform will be ready for public use by Q3 of 2022.
                                    </p>
                                    
                            </div> 
                        }
                    </div>
                    
                </div>
               
               

                



                
    
            </div>
           
        </div>
    )
}

export default Index;