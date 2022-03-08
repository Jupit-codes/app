import { useState } from 'react'
import '../../../assets/css/Products/productSection.css'
import logo from '../../../assets/images/logo_black.png'
const Index = ()=>{
    const [tabClick, settabClick] = useState(false)
    const [type, settype] = useState()
    const _handleClick = (type)=>{
        switch(type){
            case 'p2p':
                
                settabClick(true);
                settype(type)
                break;
            case 'giftcard':
                settabClick(true);
                settype(type)
               
                break;
            case 'otc':
                settabClick(true);
                settype(type)
            
            break;
        }
    }
    return (
        <div className="productSection">
            
            <div className="productFlex1">
                <h1>Our Products</h1>
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
            </div>
        </div>
    )
}

export default Index;