import Header from '../../component/changeHeader'
import '../../assets/css/changepassword/change.css'
import Cookies from 'js-cookie';
import {AiFillUnlock} from 'react-icons/ai'
import { useEffect, useState } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import axios from 'axios';

const Index = ()=>{
    
    const [myloader,setmyloader] = useState(false)
    const Base_url = process.env.REACT_APP_BACKEND_URL
    const getSession=async ()=>{
        await axios({
            method: "GET",
            url: `${Base_url}/user/getSession/data`,
            headers:{
                'Content-Type':'application/json',
                'Authorization':reactLocalStorage.get('token')
            },
           // data:JSON.stringify({userid:reactLocalStorage.getObject('user')._id})
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

    useEffect(()=>{
        getSession();
    },[])
    return(
        <div className='changepassword'>
            <Header changepassword={5}/>
            <div className='passwordResetFormDiv'>
                <div className='circularPassword'>
                    <AiFillUnlock size={30}/>
                </div>
                
                <div className='form'>
                    <div className='form-group'>
                                <input type='password' className='form-control' placeholder='New Password' required/>
                        </div>
                        <div className='form-group'>
                                <input type='password' className='form-control' placeholder='Confirm Password' required/>
                        </div>

                        <div className='form-group'>
                            <input type='submit' className='form-control btn-primary'/>
                        </div>
                </div>
                   
            </div>

            
        </div>
    )
}

export default Index;