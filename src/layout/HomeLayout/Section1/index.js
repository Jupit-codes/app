import React from "react";
import jupit from '../../../assets/images/section1/jupit.png'
import '../../../assets/css/Home/section1.css'
import Video from '../../../assets/images/section1/video.mp4';
import ReactPlayer from 'react-player'
import Poster from '../../../assets/images/section1/jupit_walk_access.png'
const Index = ()=>{
    return(
        <section className="section1">
            
            <div className="riderText">
                <div className="riderText-Title">
                    <img src={jupit}/> <span className="pundit">Pundit</span>
                </div>
                <div className="riderText-subheading">Lets Walk you through the world of crypto space.</div>
                <p className="riderText-p">
                    We like to think of ourselves as superheroes here at Jupit.<br/> We aren’t in the business of doing things just because they are routine.We are in the business of creating solutions that are simply mind-blowing.
                </p>
                
                <div>
                    <video 
                         width="600"
                         height="300"
                        controls 
                        autoPlay="true"
                        poster={Poster}
                        className="videoDiv"
                    >
                        <source src={Video} type="video/mp4"/>
                    </video>
                </div>
            </div>

        </section>
    )
}

export default Index;