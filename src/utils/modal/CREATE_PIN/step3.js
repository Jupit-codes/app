import { useState } from "react"
import axios from "axios"
import { reactLocalStorage } from "reactjs-localstorage"
import { ToastContainer, toast } from 'react-toastify';
const Index=({pageContent,createdpin,closeModal,callback})=>{
const [otp,setotp] = useState('');
const [error,seterror] = useState('')

const [disable,setdisable] = useState(false)

    const _handleOTPPIN = (e)=>{
        setotp(e.target.value)
    }

    const savepin = ()=>{
        const Base_url = process.env.REACT_APP_BACKEND_URL;
        setdisable(true)
        axios({
            method: "POST",
            url: `${Base_url}/save/pin`,
            headers:{
                'Content-Type':'application/json',
                'Authorization':reactLocalStorage.get('token')
            },
            data:JSON.stringify({otp:otp,createdpin:createdpin,userid:reactLocalStorage.getObject('user')._id})
        })
        .then((res)=>{

           
            if(res.data.status){
                toast.success(res.data.message,"SUCCESS")
                callback(true)
                closeModal(false)

            }
   
        })
        .catch((err)=>{
            
            toast.error(err.response.data,"ERROR")
            console.log('error',err.response.data)
            
        })
    }

    
    return (
        <div className='PinInputDiv'>
            {error && <div className="pinerror">{error}</div>}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
            <span><i>A code has been sent to your registered email address</i></span>
            <input type="number"  className='form-control' placeholder='Enter OTP Code' value={otp} onChange={_handleOTPPIN}/>
            <input type="submit" className="buttonNext" value="Submit" onClick={savepin} />
        </div>
    )
}

export default Index