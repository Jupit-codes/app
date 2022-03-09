import { useState } from 'react'
import '../../../assets/css/Products/productSection.css'
import logo from '../../../assets/images/logo_black.png'
const Index = ()=>{
    const [tabClick, settabClick] = useState(true)
    const [type, settype] = useState('p2p');
    const [content,setcontent] =useState()
    const _handleClick = (type)=>{
        switch(type){
            case 'p2p':
                
                settabClick(true);
                settype(type);

                break;
            case 'giftcard':
                settabClick(true);
                settype(type);
               
                break;
            case 'otc':
                settabClick(true);
                settype(type)
            
            break;
        }
    }
    const _renderContent = ()=>{
        if(type === "p2p"){
            return <div className='tab-content'>We are in the business of simplifying your daily exchange. Although the goal post has changed more times than we can count but our goal to help you seamlessly and consistently convert your crypto to cash remains as same</div>
        }
        
        if(type === "giftcard"){
            return <div className='tab-content'>
                        Everything's becoming advanced nowadays and gift cards are no exception with the global market projected to reach $238 Billion by 2025.<br/>
                        It’s an established fact that about 7 out of every 10 birthday gift or retail incentive is a gift card.<br/>
                        Howbeit, for those gift cards to satisfy its spendable value, it needs to be converted to real cash and that’s where we positioned ourself at Jupit to help you seamlessly and securely trade your cards.
                    </div>
        }
        if(type === "otc"){
            return <div className='tab-content'>
                    A custom and classified service for enormous block exchanges that’s above $5,000.<br/>
                    All it takes is just to submit your request by filling the requirements beneath and we will hit you up straightaway!
        </div>
        }
    }
    
    return (
        <div className='product'>
            <h1>Our Products</h1>
            {/* <div className='titleTextOffer'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
            </div> */}
            <div className="productSection">
                
                <div className="productFlex1">
                    
                    <div className='ImageProd'>
                        
                            <img src={logo}/>
                    </div>
                </div>
                <div className="productFlex2">
                    <div className='tabs-products'>
                            <div className={tabClick && type==="p2p" ? 'p2p':''} onClick={()=>_handleClick('p2p')}>P2P crypto to cash</div>
                            <div className={tabClick && type==="giftcard" ? 'p2p':''} onClick={()=>_handleClick('giftcard')}>Gift Cards to Cash</div>
                            <div className={tabClick && type==="otc" ? 'p2p':''} onClick={()=>_handleClick('otc')}>OTC </div>
                    </div>
                    <div className='tab-content'>
                    {
                        tabClick && _renderContent()
                    }
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Index;