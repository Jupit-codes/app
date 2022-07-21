import axios from "axios";
import { useState } from "react";
import {IoIosArrowBack} from 'react-icons/io'
import LoaderModal from '../../../utils/loader/loader.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory, } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";

const Index = ({Next,userEmail,userPassword})=>{
    const [token,setToken] = useState('')
    const [loader, setloader] = useState(false);
    const [mydata,setmydata] = useState();
    const [myerror,setmyerror] = useState();
    const history = useHistory();
    const submitToken = async ()=>{
       const Base_url = process.env.REACT_APP_BACKEND_URL
       setloader(true);
        await axios({
            method: "POST",
            url: `${Base_url}/login/2FA`,
            headers:{
                'Content-Type':'application/json',
                
            },
            data:JSON.stringify({email:userEmail,password:userPassword,token:token})
        })
        .then((res)=>{
            setloader(false)
            setmydata(res.data)

            console.log(res.data)
            
            if(res.data && res.data !== "Token is Required"){
               
                reactLocalStorage.set('token',res.data.token);
                reactLocalStorage.setObject('user',res.data.docs);
                history.push('/client');
            }
            
        
        })
        .catch((err)=>{
            setloader(false)
            setmyerror(err.response ? err.response.data : 'No Connection')
            toast.error(err.response.data , {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
           
            
        })
    }
    return(
        <div>
            <ToastContainer/>
            {loader && <LoaderModal/>}
            <div className="formClass">
                <div className="divForm">
                        <input type="number" className="form-control myform" placeholder="Input Authenticator Token" onChange={(e)=>setToken(e.target.value)} value={token} required/>
                        
                </div>
                <div className="divForm">
                        <input type="submit" className="form-control mybtn" onClick={submitToken} value="Process Token"/>
                </div>
            
            </div>
            {/* <div className="return" onClick={()=>Next('Section1')}>
                <IoIosArrowBack/><span> return to login</span>
            </div> */}
        </div>
            
    )
}

export default Index;