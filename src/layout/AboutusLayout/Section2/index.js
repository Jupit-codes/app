
import React from 'react'

import '../../../assets/css/About/section_aboutus_2.css'
const Index =()=>{
    return(
        <div className="section_aboutus_2">
            <div className="subscribe_newsletter">Subscribe To Our Newsletters</div>
            <div className="subscribe">
                <input type="email" className="form-control input" placeholder="Provide Email" required/>
                <input type="submit" value="Submit" className="submit btn btn-secondary"/>
            </div>
        </div>
    )
}

export default Index