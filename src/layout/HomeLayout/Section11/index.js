import React from "react";
import '../../../assets/css/Home/section11.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {GiPlagueDoctorProfile} from 'react-icons/gi'
import {GiRamProfile} from 'react-icons/gi'
const Index = ()=>{
    return(
        <section className="section11">
            <div className="testimonia">
                Testimonia
                
                <OwlCarousel 
                        className='owl-theme'
                        
                        items={1}
                        center
                        loop={true}
                        nav
                        >
                    <div className='item'>
                      Esse laborum aliquip ad nulla ut officia duis incididunt sunt. Aute sint incididunt consequat consequat.<br/> Fugiat id eiusmod ex id. Adipisicing veniam ut duis esse aute voluptate sint cupidatat officia in.
                      <br/><br/>
                      <div style={{marginTop:30}}>- <GiRamProfile size={20}/>Oluwatosin Ajayi</div>

                        
                    </div>
                    <div className='item'>
                    Esse laborum aliquip ad nulla ut officia duis incididunt sunt. Aute sint incididunt consequat consequat.<br/> Fugiat id eiusmod ex id. Adipisicing veniam ut duis esse aute voluptate sint cupidatat officia in.
                        <br/><br/>
                      <div style={{marginTop:30}}>- <GiPlagueDoctorProfile size={20}/>Temiloluwa Odewumi</div>
                    </div>
                    <div className='item'>
                    Esse laborum aliquip ad nulla ut officia duis incididunt sunt. Aute sint incididunt consequat consequat.<br/> Fugiat id eiusmod ex id. Adipisicing veniam ut duis esse aute voluptate sint cupidatat officia in.
                      <br/><br/>
                      <div style={{marginTop:30}}>- <GiPlagueDoctorProfile size={20}/>Geofffery Enioluwa</div>
                    </div>
                    
                </OwlCarousel>
            
                
                
            </div>
          

                    
        </section>
    )
}

export default Index;