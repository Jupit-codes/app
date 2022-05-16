import Header from '../../component/changeHeader'
import '../../assets/css/changepassword/change.css'
import Cookies from 'js-cookie';
import {AiFillUnlock} from 'react-icons/ai'
import { useEffect, useState } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import axios from 'axios';
import { toast } from 'react-toastify';

const Index = ()=>{
    
    const [myloader,setmyloader] = useState(false)
    const [password,setpassword] = useState('');
    const [error,setError] = useState();
    const [confirmpassword,setconfirmpassword] = useState('')
    const [mydisable,setmydisable]=useState(false);
    const Base_url = process.env.REACT_APP_BACKEND_URL

    const changePassword=async ()=>{
        if(!password){
            alert('Password Cannot Be NULL');
            return false;
        }
        if(!confirmpassword){
            alert('Confirm Password Cannot Be NULL');
            return false;
        }
        if(password === confirmpassword){
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
                
                setmyloader(false)
                console.log(res.data)
                
              
            })
            .catch((err)=>{
                setmyloader(false)
                console.log(err.response)
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
                            <input type='submit' className='form-control btn-primary' onClick={()=>changePassword()} disabled={mydisable}/>
                        </div>

                        {error && <div className='errorChangepwd'>{error}</div>}
                </div>
                   
            </div> }
            

            
        </div>
    )
}

export default Index;