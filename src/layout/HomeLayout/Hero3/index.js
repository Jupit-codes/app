import '../../../assets/css/newHero/hero.css'
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';


import Slider1 from '../../../assets/images/landingpage/bg/slider-1.jpg'
import Slider2 from '../../../assets/images/landingpage/bg/slider-2.jpg'
import Slider3 from '../../../assets/images/landingpage/bg/slider-3.jpg'
import { Dot } from 'react-bootstrap-icons';


const Index = ()=>{
    const items = {
        item:[
            <img src={Slider1} style={{width:'100vw',height:'100vh'}}/>,
            <img src={Slider2} style={{width:'100vw',height:'100vh'}}/>,
            <img src={Slider3} style={{width:'100vw',height:'100vh'}}/>,
        ]
    }

    const content = [
        {
            title:'World Best CryptoExchange PlatForm',
            img:<img src={Slider1} style={{width:'100vw',height:'100vh'}}/>,
            imgUrl:'../../../assets/images/landingpage/bg/slider-2.jpg',
            button:'Get Started'
        },
        {
            title:'We Buy And Sell',
            img:<img src={Slider1} style={{width:'100vw',height:'100vh'}}/>,
            imgUrl:'../../../assets/images/landingpage/bg/slider-1.jpg',
            button:'Get Started'
        }
    ]
    const options = {
        items: 1,
        nav: true,
        rewind: true,
        autoplay: true,
        dot:true,
        smartSpeed:1500
        
    };
    return (
        <div className='hero'>
            <OwlCarousel  
                nav
                loop 
                items={1}
                className="owl-theme" 
                margin={0}
                smartSpeed={1500}
                autoplay>

               {items.item}
               {/* {content.map((d,index)=>{
                    return <div key={index} className='item' style={{backgroundImage: `url(../../../assets/images/landingpage/bg/slider-1.jpg)` }}>
                                <h1>{d.title}</h1>
                            </div>
               })} */}
               
            </OwlCarousel>
        </div>
    )
}

export default Index