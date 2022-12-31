import {useState,useEffect} from 'react'
import React from 'react'
import '../../assets/css/Modal/modal.css'
import {IoClose} from 'react-icons/io5'
import QRcode from 'qrcode'
import { reactLocalStorage } from 'reactjs-localstorage'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios from 'axios'
const Index = ({closeModal})=>{
    
    const [src,setSrc]= useState('')
    const [address, setAddress] = useState();
    const [copied,setCopied] = useState(false)
    useEffect(async ()=>{
        console.log(reactLocalStorage.getObject('user')._id)
        const Base_url = process.env.REACT_APP_BACKEND_URL;
        await axios({
            method: "POST",
            url: `${Base_url}/threshold/checkwalletaddress`,
            headers:{
                'Content-Type':'application/json',
                'Authorization':reactLocalStorage.get('token')
            },
            data:JSON.stringify({
                address:reactLocalStorage.getObject('user').btc_wallet[0].address,
                wallet_type:"BTC",
                userid:reactLocalStorage.getObject('user')._id
            })
        })
        .then((res)=>{
            console.log('WalletCheck',res.data)
            if(res.data.status){
                
                setAddress(reactLocalStorage.getObject('user').btc_wallet[0].address)
                QRcode.toDataURL(reactLocalStorage.getObject('user').btc_wallet[0].address).then((data)=>{
                    setSrc(data)
                })
            }
            else{
                
                setAddress('Invalid Wallet Address..Kindly login afresh')
                QRcode.toDataURL("Invalid Wallet Address..Kindly login afresh").then((data)=>{
                    setSrc(data)
                })
            }
           
            
            
        })
        .catch((err)=>{

            console.log(err)
           
            
        })
       
    },[])
    return (
        <div className="modalBackground">
            <div className='modalContainer'>
                <div className='modalHeader'>
                    <div className='modalText'>
                        <div className='receiveText'>
                            Receive Bitcoins
                        </div>
                        
                        <IoClose size={25} onClick={()=>{closeModal(false)}} />
                    </div>
                    
                    <div><hr/></div>
                </div>
                
                <div className='modalbody'>
                    <img src={src}/>
                </div>
                <div className='modalFooter'>
                    <input type="text" value={address} disabled/>
                    <CopyToClipboard text={address}
                    onCopy={() => {setCopied(true)}}>
                    <div className={copied ? 'Copy' :'Copied'}>{copied ? 'Copied' :'Copy'}</div>
                    </CopyToClipboard>
                </div>
                <div className='modalClose' >
                    <input type="submit" value="Close" onClick={()=>{closeModal(false)}}/>
                </div>
            </div>
        </div>
    )
}

export default Index;