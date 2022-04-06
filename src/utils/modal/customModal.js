import {useState,useEffect} from 'react'
import React from 'react'
import '../../assets/css/Modal/modal.css'
import {IoClose} from 'react-icons/io5'
import QRcode from 'qrcode'
import { reactLocalStorage } from 'reactjs-localstorage'
import {CopyToClipboard} from 'react-copy-to-clipboard';
const Index = ({closeModal})=>{
    
    const [src,setSrc]= useState('')
    const [address, setAddress] = useState();
    const [copied,setCopied] = useState(false)
    useEffect(()=>{
        setAddress(reactLocalStorage.getObject('user').btc_wallet[0].address)
        console.log('BTC',reactLocalStorage.getObject('user'))
        QRcode.toDataURL(reactLocalStorage.getObject('user').btc_wallet[0].address).then((data)=>{
            setSrc(data)
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