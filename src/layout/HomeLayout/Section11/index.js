import React from "react";
import '../../../assets/css/Home/section11.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Index = ()=>{
    return(
        <section className="section11">
            <div className="testimonia">Testimonia</div>
            <OwlCarousel 
                className='owl-theme'
                loop margin={10}
                items={1}
                nav>
            <div className='item' style={{textAlign:'center'}}>
                <div>
                    Best Site for trading Bitcoin
                </div>
                
            </div>
            <div className='item'>
                <h4>2</h4>
            </div>
            <div className='item'>
                <h4>3</h4>
            </div>
            
        </OwlCarousel>
         
        </section>
    )
}

export default Index;