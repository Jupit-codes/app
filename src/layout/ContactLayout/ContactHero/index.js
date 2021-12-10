import React, { useState } from 'react';
import { useLocation } from 'react-router';
import '../../../assets/css/Contact/contactHero.css'
import * as Icon from 'react-bootstrap-icons'
import Iframe from 'react-iframe'
import { Form,FloatingLabel } from "react-bootstrap";
const Index = ()=>{
    const location = useLocation();
    const [fullname, setfullname] = useState();
    const [phonenumber, setphonenumber] = useState();
    const [message, setmessage] = useState();
    const handlefullname = (e)=>{
        setfullname(e.target.value)
    }
    const handlemessage = (e)=>{
        setmessage(e.target.value)
    }
    const handlephonenumber = (e)=>{
        
        setphonenumber(e.target.value)
    }
    return (
        <div className="contactHero">
            
            <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15858.900063825005!2d3.463236634912074!3d6.4293619999999905!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5a593be9def%3A0x5bba2956c5bbad6d!2s13%20Abayomi%20Durosinmi-Etti%20St%2C%20Eti-Osa%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1637533660725!5m2!1sen!2sng"
                width='100%'
                height="100%"
                id="myId"
                className="myClassname"
                display="initial"
                loading="lazy"
                position="relative"/>

            <div className="contactusMain">
                <div className="contactmain_1">
                    <div className="ContactTitle">CONTACT US</div>
                    <table>
                        <tr>
                            <td><Icon.TelephonePlus size="20" color="#1eae98"/>  </td>
                            <td>
                                <div className="table_text">PHONE NUMBER</div>
                                <a style={{textDecoration:'none',color:'#000'}}  href="tel:2348088213177">+234 80 8821-3177</a><br/>
                               
                            </td>
                        </tr>
                        <tr>
                            <td><Icon.Envelope size="20" color="#1eae98"/>  </td>
                            <td><div className="table_text">EMAIL</div>
                                    <a style={{textDecoration:'none',color:'#000'}} className="table_text" href="malito:contact@jupit.app">contact@jupit.app</a>
                            </td>
                        </tr>
                        <tr>
                            <td><Icon.GeoAltFill size="20" color="#1eae98"/>  </td>
                            <td><div className="table_text">LOCATION</div>
                                    Plot 13 Block 125c, Abayomi durosinmi,<br/> Oniru Lekki Lagos.
                            </td>
                        </tr>
                        <tr>
                            <td><Icon.Whatsapp size="20" color="#1eae98"/>  </td>
                            <td><div className="table_text">SOCIAL MEDIA</div>
                                    <a style={{textDecoration:'none',color:'#000'}} className="table_text" href="https://wa.me/2349040006000">+2349040006000</a>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="contactmain_2">
                    <div className="message">SEND US A MESSAGE</div>
                    
                        {/* <ToastContainer /> */}
                        <Form className="text-align-left" >
                            
                            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label >Fullname</Form.Label>
                                <Form.Control type="text" placeholder="Fullname" required/>
                            </Form.Group> */}
                            
                            <FloatingLabel className="mb-2" controlId="floatingPassword" label="Fullname">
                                <Form.Control type="text" placeholder="Fullname" onChange={handlefullname} value={fullname} required />
                            
                            </FloatingLabel>

                            <FloatingLabel  className="mb-2" controlId="floatingPassword" label="Mobile Number">
                                <Form.Control type="number" placeholder="Mobile Number" onChange={handlephonenumber} value={phonenumber} required />
                            
                            </FloatingLabel>
                            
                            {/* <Row className="g-2">
                                <Col md>
                                    <FloatingLabel  className="mb-2" controlId="floatingPassword" label="Company Name">
                                        <Form.Control type="text" placeholder="Company Name" />
                                    </FloatingLabel>
                                </Col>
                                <Col md>
                                    <FloatingLabel  className="mb-2" controlId="floatingPassword" label="Position">
                                        <Form.Control type="text" placeholder="Position" />
                                    </FloatingLabel>
                                </Col>
                            </Row> */}

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={handlemessage} value={message} required/>
                                
                            </Form.Group>

                            <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                                
                                <Form.Control type="submit" value="Submit"  className="btn btn-success"  />
                            </Form.Group>
                        </Form>
                    </div>

            
                </div>
            </div>
    )
}


export default Index;
