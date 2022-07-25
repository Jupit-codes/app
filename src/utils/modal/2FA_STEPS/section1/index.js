import {MdOutlineSecurity} from 'react-icons/md'
import axios from 'axios'
import { reactLocalStorage } from 'reactjs-localstorage'
import { useEffect, useState } from 'react'
import { toast,ToastContainer } from 'react-toastify'
import LoaderModal from '../../../loader/loader.js'
const Index = ({Next})=>{
    const Base_url = process.env.REACT_APP_BACKEND_URL
    const [err,setErr] = useState();
    const [data,setData] = useState();
    const [Loader,setLoader] = useState(false)
    const activate = async()=>{
        setLoader(true)
        await axios({
            method: "POST",
            url: `${Base_url}/2FA`,
            headers:{
                'Content-Type':'application/json',
                'Authorization':reactLocalStorage.get('token')
            },
            data:JSON.stringify({userid:reactLocalStorage.getObject('user')._id,email:reactLocalStorage.getObject('user').email})
        })
        .then((res)=>{
            
            // if(res.data === "Proceed"){
            //     Next('Section2')
            // }
            setLoader(false);
            setData(res.data);
            
            
        })
        .catch((err)=>{
            setLoader(false);
            setErr(err.response? err.response.data :'No Connection')
            
            
            
        })
        
    }

    useEffect(()=>{
            if(err){
                toast.error(err, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }

            if(data){
                Next('Section2');
            }
    },[err,data])
    

    return(
        <div>
            <div className='welcome2fa'>
                <ToastContainer/>
             {Loader && <LoaderModal/>}
                    <div className=''>
                            <MdOutlineSecurity size={100} color="#3498db"/>
                    </div>
                        Two-factor authentication or 2FA is an extra layer of security to protect your account from the vulnerabilities of a standard password-only approach. The 2FA feature is optional, but we strongly recommend that you enable it to protect your account.
                        <br/><br/>
                        To set up the authentication feature, click “Get started” below and follow the instructions carefully.
                    </div>
                    

                    <div className='TabInput SubmitModal' onClick={()=>activate()} >
                      Get Started
                
            </div>
        </div>
    )
}
export default Index;