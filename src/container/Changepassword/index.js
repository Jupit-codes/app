import Header from '../../component/changeHeader'
import '../../assets/css/changepassword/change.css'
import Cookies from 'js-cookie';
import {AiFillUnlock} from 'react-icons/ai'
import { useEffect, useState } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { toast,ToastContainer } from 'react-toastify';
const Index = ()=>{
    
    const [myloader,setmyloader] = useState(false)
    const [password,setpassword] = useState('');
    const [error,setError] = useState();
    const [confirmpassword,setconfirmpassword] = useState('')
    const [mydisable,setmydisable]=useState(false);
    const [submitbutton,setsubmitbutton] = useState('Change')
    const Base_url = process.env.REACT_APP_BACKEND_URL

    const changePassword=async ()=>{
        if(submitbutton === "Password Successfully Updated"){
            toast.info('This Link Has Already Been Used', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return false;
        }

        if(!password){
            //alert('Password Cannot Be NULL');
            toast.info('Password cannot be Empty', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return false;
        }
        if(!confirmpassword){
            
            toast.info('Confirm Password cannot be Empty', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            return false;
        }
        if(password === confirmpassword){
            setmydisable(true);
            setsubmitbutton('Please Wait...')
            await axios({
                method: "POST",
                url: `${Base_url}/user/changepassword/data`,
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':reactLocalStorage.get('token')
                },
               data:JSON.stringify({userid:reactLocalStorage.getObject('user')._id,password:password})
            })
            .then((res)=>{
                
                console.log(res.data)
                setmydisable(true);
                setsubmitbutton(res.data.message)
                
              
            })
            .catch((err)=>{
                setmydisable(false);
                
                //setErr(err.response? err.response.data:'NO Connecetion')
                
            })
        }
        else{
            setError('Password and ConfirmPassword Not Corresponding');
        }

        
    }

    const handleConfirmPassword =(e)=>{
        setconfirmpassword(e.target.value)
    }
    const handlePassword =(e)=>{
        setpassword(e.target.value)
    }
    useEffect(()=>{
        
    },[])
    return(
        <div className='changepassword'>
                <ToastContainer/>
            <Header changepassword={5}/>
            { myloader ? <div className='Chartloader'> </div>: <div className='passwordResetFormDiv'>
                <div className='circularPassword'>
                    <AiFillUnlock size={30}/>
                </div>
                
                <div className='form'>

                        <div className='form-group'>
                                <input type='password' className='form-control' placeholder='New Password' value={password} onChange={handlePassword} required/>
                        </div>
                        <div className='form-group'>
                                <input type='password' className='form-control' placeholder='Confirm Password' onChange={handleConfirmPassword} value={confirmpassword} required/>
                        </div>

                        <div className='form-group'>
                            <input type='submit' className='form-control btn-primary' value={submitbutton} onClick={()=>changePassword()} disabled={mydisable}/>
                        </div>

                        {error && <div className ='errorChangepwd'>{error}</div>}
                </div>
                   
            </div> }
            

            
        </div>
    )
}

export default Index;