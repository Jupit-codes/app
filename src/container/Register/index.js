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
    console.log('RegisterError',error)
    
    return(
        <div className="auth">
             { loading && <Loader/>}
            <div className="logoArea">
                <img src={logoArea}/>
            </div>
            <div className="formarea">
            <div>{errorAlert && <AlertDismissible itemData={error} itemState={errorAlert}/>}</div>
            <div>{data && <AlertSuccess itemData={data.message} itemState={true}/>}</div>
            <div><Link to='/'><img src={Jupit} /></Link></div>
                
                <div className="logincred">Fill the form below to have an account with us.</div>
                <div className="formClass">
                    <RegisterUI Form={useForm()}/>
                </div>

            </div>
        </div>
    )
}

export default Index;