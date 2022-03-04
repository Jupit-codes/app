import '../../../assets/css/ouroffer/ouroffer.css'
import {BsWhatsapp} from 'react-icons/bs'
const Index = ()=>{
    return (
        <div className="ouroffer">
            <div className='titleOffer'>Our Offer</div>
            <div className='titleTextOffer'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
            </div>
            <div className='offerTable'>
                <div className='stakeholders'>
                   <div>
                        GET 0.0082 BTC 
                   </div>
                   <div>
                        @ 
                   </div>
                   <div>
                        &#36;520
                   </div>
                   <div>
                   <a href="https://wa.me/2348088213177" target='_blank'>
                        <button className='offerbuy'>Buy Now <BsWhatsapp size={15} className="myicon"/></button>
                    </a> 
                   </div>
                </div>
                <div className='stakeholders'>  
                   <div>Get 0.0165 BTC</div>
                   <div>
                        @ 
                   </div>
                   <div>
                        &#36;520
                   </div>
                   <div>
                    <a href="https://wa.me/2348088213177" target='_blank'>
                       <button className='offerbuy'>Buy Now <BsWhatsapp size={15} className="myicon"/></button>
                    </a>
                   </div>
                </div>
                <div className='stakeholders'>
                    <div>Get 0.0412 BTC</div>
                    <div>
                        @ 
                   </div>
                   <div>
                        &#36;520
                   </div>
                   <div>
                   <a href="https://wa.me/2348088213177" target='_blank'>
                       <button className='offerbuy'>Buy Now <BsWhatsapp size={15} className="myicon"/></button>
                    </a>
                   </div>
                </div>
                <div className='stakeholders nullBorder' >
                    <div>Get 0.0825 BTC</div>
                    <div>
                        @ 
                   </div>
                   <div>
                        &#36;520
                   </div>
                   <div>
                   <a href="https://wa.me/2348088213177" target='_blank'>
                       <button className='offerbuy'>Buy Now <BsWhatsapp size={15} className="myicon"/></button>
                    </a>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Index;