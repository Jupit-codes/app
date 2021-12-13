import React from "react";
import { Link } from "react-router-dom";
import '../../assets/css/Auth/auth.css'
import logoArea from '../../assets/images/IMG.png'
import Jupit from '../../assets/images/logo.png'
const Index=()=>{
    return(
        <div className="auth">
            <div className="logoArea">
                <img src={logoArea}/>
                
            </div>



            <div className="formarea">
                <div><Link to='/'><img src={Jupit} /></Link></div>
                <div className="welcome-back">Welcome Back!</div>
                <div className="logincred">Kindly provide your login credentials.</div>
                <div className="formClass">
                    <form className="form-input">
                        <div className="divForm"> 
                            <input type="email" className="form-control myform" placeholder="Email Address" required/>
                        </div>
                        <div className="divForm">
                            <input type="password" className="form-control myform" placeholder="Password" required/>
                            <small className="forgetpassword">Forget Password?</small>
                        </div>

                        <div className="divForm">
                            <input type="submit" className="form-control mybtn" value="Login"/>
                        </div>
                        <div className="additional">
                            <span className="new-customer">New Customer? </span><Link to='/client/signup'><span className="create_account">Create an Account</span></Link>
                        </div>
                        
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Index;