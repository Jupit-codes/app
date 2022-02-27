import {MdOutlineSecurity} from 'react-icons/md'

import QRcode from 'qrcode'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { reactLocalStorage } from 'reactjs-localstorage';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Index = ({Next})=>{
    const [src,setSrc]= useState('')
    const [address, setAddress] = useState('');
    const [copied,setCopied] = useState(false)
    const [qrcode, setqrcode] = useState();
    const [token, setToken] = useState();
    const Base_url = process.env.REACT_APP_BACKEND_URL
   const twoFActorFetch = async ()=>{
        let userid = reactLocalStorage.getObject('user')._id;

        await axios({
            method: "POST",
            url: `${Base_url}/users/2fa`,
            headers:{
                'Content-Type':'application/json',
                'Authorization':reactLocalStorage.get('token')
            },
            data:JSON.stringify({userid:userid})
        })
        .then((res)=>{
            
            reactLocalStorage.setObject('2fa',res.data)
            
            
        })
        .catch((err)=>{
        
            console.log(err);
            twoFActorFetch();
            
        })
    }

    // useEffect(()=>{
    //     twoFActorFetch();
    // },[])



    useEffect(()=>{
        twoFActorFetch();
        console.log(reactLocalStorage.getObject('2fa'))
        QRcode.toDataURL(reactLocalStorage.getObject('2fa').otpauth_url).then((data)=>{
            setSrc(data)
        })
        //setAddress(reactLocalStorage.getObject('user').btc_wallet[0].address)
        
    },[])

  

    return(
        <div>
            <div className='welcome2fa-section slide-right'>
                 <p>
                    - Input Token Generated From the Authenticatior App.
                </p> 
                
                <div className='barcodeAuth'>
                    <input type="text" value={token} onChange={(e)=>setToken(e.target.value)} />
                </div>      
            </div>

            <div className='TabInput SubmitModal mt-4'>
               Confirm
                
            </div>
        </div>
    )
}
export default Index;