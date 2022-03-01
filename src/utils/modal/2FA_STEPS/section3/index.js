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
    const [faData, setfaData] = useState();
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
            setfaData(res.data)
            
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
        
        QRcode.toDataURL(reactLocalStorage.getObject('2fa').otpauth_url).then((data)=>{
            setSrc(data)
        })
        //setAddress(reactLocalStorage.getObject('user').btc_wallet[0].address)
        
    },[reactLocalStorage.getObject('2fa')])

  

    return(
        <div>
            <div className='welcome2fa-section slide-right'>
                 <p>
                    - Scan the barcode/Qrcode below with the Authenticator as Installed on your mobile device or Click on the secret key button to copy for manual setup on the Authenticator.
                </p> 
                <div className='barcodeAuth'>
                    <img src={src}/>
                </div>
                <div className='barcodeAuth'>
                    <input type="text" value={reactLocalStorage.getObject('2fa').base32 || ''} disabled />
                    <CopyToClipboard text={reactLocalStorage.getObject('2fa').base32}
                    onCopy={() => {setCopied(true)}}>
                    <div className={copied ? 'Copy' :'Copied'}>{copied ? 'Copied' :'Copy Secret'}</div>
                    </CopyToClipboard>
                </div>      
            </div>

            <div className='TabInput SubmitModal mt-4' onClick={()=>Next('Section4')}>
               Click To Proceed After Authenticator SetUp
                
            </div>
        </div>
    )
}
export default Index;