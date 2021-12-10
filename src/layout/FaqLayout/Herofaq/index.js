import React from "react"
import '../../../assets/css/faq/faqhero.css'
const Index = ()=>{
    return(
        <div className="faqhero">
            <div className="learnTitle">Frequently Asked Questions.</div>
            <div></div>
            <div className="search">
                <div className="inputSearch">
                     <input type="text" placeholder="Enter Search" className="form-control"/>
                </div>
                
                <div className="create-button-readmore btnSearch">
                    Search
                </div>
               
            </div>
        </div>
    )
}

export default Index;