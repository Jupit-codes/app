import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import '../../assets/css/Auth/auth.css'
import logoArea from '../../assets/images/IMG.png'
import Jupit from '../../assets/images/logo.png'
import Loader from '../../utils/loader/loader'
import {GlobalContext} from '../../context/Provider'
const Index=()=>{
    const {registerDispatch,registerState:{registerAuth:{loading,data,error,errorAlert}}} = useContext(GlobalContext);
    console.log('RegisterError',error)
    return(
        <div className="auth">
             { loading && <Loader/>}
            <div className="logoArea">
                <img src={logoArea}/>
                
            </div>



            <div className="formarea">
            <div><Link to='/'><img src={Jupit} /></Link></div>
                
                <div className="logincred">Fill the form below to have an account with us.</div>
                <div className="formClass">
                    <form className="form-input">
                    <div className="divForm"> 
                            <input type="email" className="form-control myform" placeholder="Username" required/>
                        </div>
                        <div className="divForm"> 
                            <input type="email" className="form-control myform" placeholder="Email Address" required/>
                        </div>
                        <div className="divForm">
                            <input type="password" className="form-control myform" placeholder="Password" required/>
                            
                        </div>
                        <div className="divForm">
                            <input type="password" className="form-control myform" placeholder="Confirm Password" required/>
                            
                        </div>
                        <small className="forgetpassword">
                            By clicking the Create an Account button below, you agree to <br/><span className="create_account">Jupit's terms and service</span>
                        </small>


                        <div className="divForm">
                            <input type="submit" className="form-control mybtn" value="Create an Account"/>
                        </div>
                        <div className="additional">
                            <span className="new-customer">Already have an Account? </span><Link to='/client/signin'><span className="create_account">SignIn</span></Link>
                        </div>
                        
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Index;