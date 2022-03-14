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
                     options={{
                        // strings: ['Hello', 'World'],
                        autoStart: true,
                        loop: true,
                      }}
                    onInit={(typewriter) => {
                        typewriter.typeString("The <strong>Safest.</strong>")
                        .pauseFor(2500)
                        .deleteChars(7)
                        .typeString('<strong>Easiest.</strong>')
                        .pauseFor(2500)
                        .deleteChars(8)
                        .typeString('<strong>Secure.</strong>')
                        .pauseFor(2500)
                        .start();
                        
                    }}
                />
            </div>
        </div>
    )
}

export default Index