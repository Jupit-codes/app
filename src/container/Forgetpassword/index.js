import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../assets/css/Auth/auth.css'
import logoArea from '../../assets/images/IMG.png'
import Jupit from '../../assets/images/utility/logo_new.svg'
import sendLogin from '../../context/actions/sendLogin'
import Loader from '../../utils/loader/loader'
import {GlobalContext} from '../../context/Provider'
import AlertDismissible from '../../utils/alert/alertDisplay'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {reactLocalStorage} from 'reactjs-localstorage';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from 'axios'
import {BiArrowBack} from 'react-icons/bi'

const Index=()=>{
    // const {authDispatch,authState:{auth:{loading,data,error,errorAlert}}} = useContext(GlobalContext)
    const history = useHistory();
    const [section,setsection] = useState('Section1');
    const [emailSection,setEmailSection] = useState();
    const [passwordSection,setPasswordSection] = useState();
    const [check,setcheck] =useState(true)
    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);
    const [emailaddress,setemail]  = useState('')
    const [loading,setloading] = useState(false);
    const [errorAlert,seterrorAlert] = useState()
    const [error,seterror] = useState()
    const [data,setdata] = useState()


    const handleEmail = (e)=>{
        setemail(e.target.value)
    }

    const reset = (e)=>{
        e.preventDefault()
        setloading(true)
        seterror('')
        setdata('')

    const Base_url = process.env.REACT_APP_BACKEND_URL;
    axios({
        method: "POST",
        url: `${Base_url}/users/resetpassword`,
        headers:{
            'Content-Type':'application/json',
            'Authorization':reactLocalStorage.get('token')
        },
        data:JSON.stringify({email:emailaddress})
    })
    .then((res)=>{
        setloading(false)
        setdata(res.data.message)
        setemail('')
      
    })
    .catch((err)=>{
        setloading(false)
        seterror(err.response ? err.response.data.message : 'No Connection')
        console.log(err.response)
        
    })
}
 
    const back = ()=>{
        history.push('/client/signin')
    }
  


    return(
        <div className="auth">
                <ToastContainer/>
                <div class="divCover">
                        <div className="authCardReset">
                            <div className="mylogo_new"><Link to='/client/signin'><img src={Jupit}  className="mylogo_me"/></Link></div>
                            <div className="welcomeback"> PASSWORD RESET</div>
                           <div className="formClass">
                                    <BiArrowBack  size={20} onClick={()=>back()} style={{cursor:'pointer'}}/>&nbsp;Back
                           </div>
                            <div className="customerror">{error && <AlertDismissible itemData={error} itemState="error"/>}</div>
                            <div className="customerror">{data && <AlertDismissible itemData={data} itemState="success"/>}</div>
                            <div className="formArea">
                                <div className="formClass">
                                
                                    <ToastContainer/>
                                    {loading && <Loader />}
                                    <form className="form-input">
                                        <div className="divForm"> 
                                            <input type="email" className="form-control myform" placeholder="Email Address" onChange={handleEmail} value={emailaddress} required/>
                                        </div>
                                        

                                        <div className="divForm">
                                            <input type="submit" className="form-control mybtn"  onClick={(e)=>reset(e)} value="Reset"/>
                                        </div>
                                       
                                    </form>
                                </div>
                            </div>
                        </div>
                </div>    
        </div>
    )
}

export default Index;