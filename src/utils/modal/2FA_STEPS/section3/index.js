import {MdOutlineSecurity} from 'react-icons/md'

import QRcode from 'qrcode'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { reactLocalStorage } from 'reactjs-localstorage';
import { useState } from 'react';
import { useEffect } from 'react';
const Index = ({Next})=>{
    const [src,setSrc]= useState('')
    const [address, setAddress] = useState();
    const [copied,setCopied] = useState(false)
    useEffect(()=>{
        setAddress(reactLocalStorage.getObject('user').btc_wallet[0].address)
        QRcode.toDataURL(reactLocalStorage.getObject('user').btc_wallet[0].address).then((data)=>{
            setSrc(data)
        })
    },[])
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
                    <input type="text" value={address} disabled />
                    <CopyToClipboard text={address}
                    onCopy={() => {setCopied(true)}}>
                    <div className={copied ? 'Copy' :'Copied'}>{copied ? 'Copied' :'Copy Secret'}</div>
                    </CopyToClipboard>
                </div>      
            </div>

            <div className='TabInput SubmitModal mt-4'>
               Click To Proceed After Authenticator SetUp
                
            </div>
        </div>
    )
}
export default Index;