import React, { useContext } from "react";
import '../../assets/css/Auth/auth.css'
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/Provider";
import { Alert } from "react-bootstrap";
const RegisterUI = ({Form:{onChange,Form,RegisterValidForm,onSubmit}})=>{
    const {registerDispatch,registerState:{registerAuth:{error,email_error}}} = useContext(GlobalContext)

    
    return (
                <form className="formClass" >
                    <div className="divForm"> 
                            <input type="text" 
                                className="form-control myform" 
                                placeholder="Username" 
                                name="username"  
                                value={Form.username || ""}
                                onChange={onChange}
                                required/>
                        </div>
                        <div className="divForm"> 
                            <input type="text" 
                                className="form-control myform" 
                                placeholder="Firstname" 
                                name="firstname"  
                                value={Form.firstname || ""}
                                onChange={onChange}
                                required/>
                        </div>
                        <div className="divForm"> 
                            <input type="text" 
                                className="form-control myform" 
                                placeholder="Lastname" 
                                name="lastname"  
                                value={Form.lastname || ""}
                                onChange={onChange}
                                required/>
                        </div>
                        <div className="divForm"> 
                            <input type="email" 
                                className="form-control myform" 
                                placeholder="Email Address"  
                                name="email"   
                                value={Form.email || ""}
                                onChange={onChange}
                                required/>
                                <small >{email_error && <div className="error_red">{error}</div>}</small>
                        </div>
                        <div className="divForm"> 
                            <input type="text" 
                                className="form-control myform" 
                                placeholder="Phonenumber"  
                                name="phonenumber"  
                                value={Form.phonenumber || ""}
                                onChange={onChange}
                                required/>
                        </div>

                        <div className="divForm">
                            <input type="password"
                              className="form-control myform"
                              placeholder="Password" 
                              value={Form.password || ""}
                              onChange={onChange}
                              name="password"    
                              required/>
                            
                        </div>
                        <div className="divForm"> 
                            <input type="text" 
                                className="form-control myform" 
                                placeholder="Referral Username....optional"  
                                name="referral"  
                                value={Form.referral || ""}
                                onChange={onChange}
                                required/>
                        </div>
                        
                        <small className="acccept_terms_n_conditions">
                            By clicking the Create an Account button below, you have agreed to Jupit's terms and service.
                        </small>


                        <div className="divForm">
                            <input type="submit"
                                className="form-control mybtn" 
                                value="Create an Account"
                                disabled={RegisterValidForm}
                                onClick={onSubmit}
                              />
                        </div>
                        <div className="additional">
                            <span className="new-customer">Already have an Account? </span><Link to='/client/signin'><span className="create_account">SignIn</span></Link>
                        </div>
                        
                    </form>
    )
}

export default RegisterUI;