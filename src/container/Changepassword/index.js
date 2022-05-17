import Header from '../../component/changeHeader'
import '../../assets/css/changepassword/change.css'
import Cookies from 'js-cookie';
import {AiFillUnlock} from 'react-icons/ai'
import { useEffect, useState } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { toast,ToastContainer } from 'react-toastify';
const Index = ()=>{
    const { userid,codeid } = useParams();
    
    const [myloader,setmyloader] = useState(false)
    const [password,setpassword] = useState('');
    const [error,setError] = useState();
    const [confirmpassword,setconfirmpassword] = useState('')
    const [mydisable,setmydisable]=useState(false);
    const [submitbutton,setsubmitbutton] = useState('Change');
    const [code,setcode] = useState('')
    const Base_url = process.env.REACT_APP_BACKEND_URL
    //const MySwal = withReactContent(Swal)
    // const getCode = async()=>{
    //     await axios({
    //         method: "POST",
    //         url: `${Base_url}/getCode/password`,
    //         headers: {
    //           "Content-Type": "application/json",
    //           "Authorization":`Bearer ${reactLocalStorage.get('token')}`
    
    //         },
    //         data:JSON.stringify({userid:userid})
    //       })
    //     .then(res=>{
            
    //         console.log('code',res.data)
    //         setcode(res.data)
           
           
    //     })
    //     .catch(err=>{
    //         console.log(err.response)
    //         setError(err.response.data)

    //     })
    // }

   

   

    const changePassword = async ()=>{

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
                    
                },
               data:JSON.stringify({userid:userid,password:password,code:codeid})
            })
            .then((res)=>{
                
                console.log(res.data)
                setmydisable(true);
                setsubmitbutton(res.data.message);
                if(res.data.status){
                    Swal.fire({
                        title: 'Password Update!',
                        text: 'Password Successfully Updated',
                        icon: 'success',
                        confirmButtonText: 'ok'
                      })
                      reactLocalStorage.clear();
                      window.location='/client/signin'
                }
                
              
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
                
                {error && <div className ='errorChangepwd'>{error}</div>}
                
                   
            </div> }
            

            
        </div>
    )
}

export default Index;