import React, { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import '../../assets/css/Auth/auth.css'
import logoArea from '../../assets/images/IMG.png'
import Jupit from '../../assets/images/logo.png'
import Loader from '../../utils/loader/loader'
import {GlobalContext} from '../../context/Provider'
import RegisterUI from "../../layout/Register";
import useForm from "./useForm";
import AlertDismissible from '../../utils/alert/alertDisplay'
import AlertSuccess from '../../utils/alert/success'
const Index=()=>{
    const {registerDispatch,registerState:{registerAuth:{loading,data,error,errorAlert}}} = useContext(GlobalContext);
    
    useEffect(() => {
        try {
          // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        } catch (error) {
          // just a fallback for older browsers
          window.scrollTo(0, 0);
        }
      }, [loading]);
    return(
        <div className="auth">
                {loading && <Loader/>}
                <div class="divCover">
                <div className="authCard">
                        <div className="mylogo_new"><Link to='/'><img src={Jupit}  className="mylogo_me"/></Link></div>
                        <div className="logincred">Fill the fields below to have an account with us.</div>
                        <div className="customerror">{errorAlert && <AlertDismissible itemData={error} itemState={errorAlert}/>}</div>
                        <div className="customsuccess">{data && <AlertSuccess itemData={data.message} itemState={true}/>}</div>
                        <RegisterUI Form={useForm()}/>
                </div>

                </div>
            
            
        </div>
    )
}

export default Index;