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
                        Welcome to Jupit 2FA Authentication SetUp.
                        Click on the Button Below to get Started, while we walk you through a seamless pipeline to activating the process.
                    </div>

                    <div className='TabInput SubmitModal' onClick={()=>activate()} >
                      Activate 2FA
                
            </div>
        </div>
    )
}
export default Index;