import '../../../assets/css/newHero/hero.css'
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Slider1 from '../../../assets/images/landingpage/bg/slider-1.jpg'
import Slider2 from '../../../assets/images/landingpage/bg/slider-2.jpg'
import Slider3 from '../../../assets/images/landingpage/bg/slider-3.jpg'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
const Index = ()=>{
    const content = [
        { 
            title: 'Welcome To Jupit CryptoExchange', 
            description: '..Speed..Service..Security',
            image:Slider1,
            button:'Speed'

        },
        { 
            title: 'Welcome To Jupit CryptoExchange', 
            description: '..Speed..Service..Security',
            image:Slider2,
            button:'Service'

        },
        { 
            title: 'Welcome To Jupit CryptoExchange', 
            description: '..Speed..Service..Security',
            image:Slider3,
            button:'Security'

        },
        
      ];
    return (
        <div className="hero">
           <Slider classNames={horizontalCss}>
            {content.map((item, index) => (
                <div
                    key={index}
                    style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                    <div className="center">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <button>{item.button}</button>
                    </div>
                </div>
            ))}
            </Slider>
        </div>
    )
}

export default Index