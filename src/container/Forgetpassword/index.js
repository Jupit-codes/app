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
import { setDatasets } from "react-chartjs-2/dist/utils";


const Index=()=>{
    // const {authDispatch,authState:{auth:{loading,data,error,errorAlert}}} = useContext(GlobalContext)
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

    const getbalance = ()=>{
        setloading(true)
    axios({
        method: "POST",
        url: `https://myjupit.herokuapp.com/users/resetpassword`,
        headers:{
            'Content-Type':'application/json',
            'Authorization':reactLocalStorage.get('token')
        },
        data:JSON.stringify({email:email})
    })
    .then((res)=>{
        setloading(false)
        setdata(res.data.message)
      
    })
    .catch((err)=>{
        seterror(err.response.message)
        console.log(err.response)
        
    })
}
 
 
  


    return(
        <div className="auth">
                <ToastContainer/>
                <div class="divCover">
                        <div className="authCardReset">
                            <div className="mylogo_new"><Link to='/'><img src={Jupit}  className="mylogo_me"/></Link></div>
                            <div className="welcomeback"> PASSSWORD RESET</div>
                           
                            <div className="customerror">{errorAlert && <AlertDismissible itemData={error} itemState={errorAlert}/>}</div>
                            <div className="customerror">{data && <AlertDismissible itemData={data} itemState={data}/>}</div>
                            <div className="formArea">
                                <div className="formClass">
                                    <ToastContainer/>
                                    {loading && <Loader />}
                                    <form className="form-input">
                                        <div className="divForm"> 
                                            <input type="email" className="form-control myform" placeholder="Email Address" onChange={handleEmail} value={emailaddress} required/>
                                        </div>
                                        

                                        <div className="divForm">
                                            <input type="submit" className="form-control mybtn"  value="Reset"/>
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