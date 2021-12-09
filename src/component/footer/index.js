import React, { useEffect, useState } from "react";
import logo from '../../assets/images/logo.png';
import '../../assets/css/Home/footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Facebook,Instagram,Whatsapp,Linkedin, Twitter, Google, Github, Mailbox, Envelope, Phone, PhoneFill, Telephone, GeoAltFill} from 'react-bootstrap-icons'
import jupit from '../../assets/images/logo_white.png'
const Index=()=>{
    

    return (
        <footer className="text-center text-lg-start bg-dark text-muted">
  
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
    
    <div className="me-5 d-none d-lg-block" style={{color:'#fff'}}>
      <span>Get connected with us on social networks:</span>
    </div>
   
     <div>
      <a href="" className="me-4 text-reset">
        <Facebook size="20"  color="#fff"/>
      </a>
      <a href="" className="me-4 text-reset">
        <Twitter size="20"  color="#fff"/>
      </a>
      <a href="" className="me-4 text-reset">
        <Google size="20"  color="#fff"/>
      </a>
      <a href="" className="me-4 text-reset">
        <Instagram size="20" color="#fff"/>
      </a>
      
      <a href="" className="me-4 text-reset">
        <Whatsapp size="20"  color="#fff"/>
      </a>
    </div> 
   
  </section>
 

  
  <section className="">
    <div className="container-fluid text-center text-md-start mt-5">
      
      <div className="row mt-3">
      
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 footernav">
          
          <h6 className="text-uppercase fw-bold mb-4">
            <img src={jupit} className="jupit_footer"/>
          </h6>
          <p className="motto"> 
            ...Exchange well..Receive more
          </p>
        </div>
        

        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footernav">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Bitcoin</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Usdt</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Gift Cards</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Perfect Money</a>
          </p>
        </div>
       
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 footernav">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">About us</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Faq</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Blog</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Contact</a>
          </p>
        </div>
        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 footernav">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p> <GeoAltFill size="20" color="#fff" style={{marginRight:10}} />Lagos, Nigeria</p>
          <p>
            <Envelope size="20" color="#fff" style={{marginRight:10}}/>
            support@jupit.app
          </p>
          <p><Telephone size="20" color="#fff" style={{marginRight:10}}/> +234 80 8821-3177</p>
     
        </div>
        
      </div>
      
    </div>
  </section>
 
  <div className="text-center p-4" style={{color:'#fff'}}>
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://jupit.app/">Jupit.app</a>
  </div>
  
</footer>
    )
}

export default Index;