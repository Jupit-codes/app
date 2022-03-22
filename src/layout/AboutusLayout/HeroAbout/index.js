import React from 'react'

import '../../../assets/css/About/abouthero.css'
import path from '../../../assets/images/About/Path4.png'
import Typewriter from 'typewriter-effect';

const Index =()=>{
    return(
        <div className="aboutusHero">
            <h1>About Jupit</h1>
            <div className='heroSmallTitle'>
               
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString(" We 're all about simplifying your exchange.")
                        .pauseFor(10)
                        .deleteChars(8)
                        .typeString('<strong>daily exchange</strong>')
                        .start();
                        
                    }}
                />
            </div>
        </div>
    )
}

export default Index