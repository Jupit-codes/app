import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../../assets/css/Auth/auth.css'
import logoArea from '../../../assets/images/IMG.png'
import Jupit from '../../../assets/images/logo.png'
import sendLogin from '../../../context/actions/sendLogin'
import Loader from '../../../utils/loader/loader'
import {GlobalContext} from '../../../context/Provider'
import AlertDismissible from '../../../utils/alert/alertDisplay'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {reactLocalStorage} from 'reactjs-localstorage';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {FiEye,FiEyeOff} from 'react-icons/fi'
const Index=({Next,setUserPassword,setUserEmail})=>{
    const {authDispatch,authState:{auth:{loading,data,error,errorAlert}}} = useContext(GlobalContext)
   
    const [emailaddress,setemailaddress] = useState('');
    const [password,setpassword] = useState('');
    const [loaderPlus,setloaderPlus] = useState(false);
    const [section,setsection] = useState('Section1')
    const [show,setshow] = useState(false)
    const history = useHistory();

    const handleEmail =(e)=>{
        setemailaddress(e.target.value)
        setUserEmail(e.target.value)
    }
    const handlePassword =(e)=>{
        setpassword(e.target.value)
        setUserPassword(e.target.value)
    }

    const notify = ()=> toast(error);

    const submitLogin =(e)=>{
        e.preventDefault();
        const items={
            "email":emailaddress,
            "password":password
        }
        sendLogin(items)(authDispatch)
        
    }

    const passwordreset = ()=>{
       history.push('/reset/password')
    }
    

    useEffect(()=>{
        if(reactLocalStorage.get('token') && reactLocalStorage.get('user')){
            history.replace('/client')
        }
        else{
            if(data && data !== "Token is Required"){
               
                reactLocalStorage.set('token',data.token);
                reactLocalStorage.setObject('user',data.docs);
                history.replace('/client');
            }
            else if(data === "Token is Required"){
                Next('Section2')
            }
            
        }
        

    },[data])
    return (
        <div className="formClass">
                    <ToastContainer/>
                    {loading && <Loader />}
                    <form className="form-input">
                        <div className="divForm"> 
                            <input type="email" className="form-control myform" placeholder="Email Address" onChange={handleEmail} value={emailaddress} required/>
                        </div>
                        <div className="divForm passwordForm">
                            <div className="eyepassword" onClick={()=>{setshow(!show)}}>
                                    {show ? <FiEye/> : <FiEyeOff  /> }
                            </div>
                            <input type={show ? 'text':'password'} className="form-control myform" placeholder="Password" onChange={handlePassword} value={password} required/>
                            <small className="forgetpassword" onClick={()=>passwordreset()} style={{cursor:"pointer"}}>Forget Password?</small>
                        </div>

                        <div className="divForm">
                            <input type="submit" className="form-control mybtn" onClick={submitLogin} value="Login"/>
                        </div>
                        <div className="additional">
                            <span className="new-customer">New Customer? </span><Link style={{textDecoration:'none'}} to='/client/signup'><span className="create_account">Create an Account</span></Link>
                        </div>
                        
                    </form>
                </div>
    )
}

export default Index;