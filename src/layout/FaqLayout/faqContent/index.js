import React from "react"
import '../../../assets/css/faq/faqcontent.css'
import { Accordion,Card } from 'react-bootstrap-accordion'
import blog1 from '../../../assets/images/learn/1.webp'
const Index = ()=>{
    return(
        <div className="faqcontent">
                         <div className="faqSection shadow-lg" style={{height:150,borderRadius:10}}>
                            <div className="cardBody" style={{display:'flex',justifyContent:'center',alignItems:'center',fontFamily:'candara',fontSize:22,fontWeight:'bold'}}>
                               HOW DO I GET STARTED<br/> WITH JUPIT?
                            </div>
                            
                        </div>

                        <div className="faqSection shadow-lg" style={{height:150,borderRadius:10}}>
                            <div className="cardBody" style={{display:'flex',justifyContent:'center',alignItems:'center',fontFamily:'candara',fontSize:22,fontWeight:'bold'}}>
                                HOW DO I MAKE MONEY<br/> WITH JUPIT?
                            </div>
                            
                        </div>

                        <div className="faqSection shadow-lg" style={{height:150,borderRadius:10}}>
                            <div className="cardBody" style={{display:'flex',justifyContent:'center',alignItems:'center',fontFamily:'candara',fontSize:22,fontWeight:'bold'}}>
                                 HOW DO I GET STARTED<br/> WITH JUPIT?
                            </div>
                            
                        </div>
                        
                
        </div>
    )
}

export default Index;