import {useState,useEffect} from 'react'
import React from 'react'
import '../../../assets/css/Modal/modal.css'
import {IoClose} from 'react-icons/io5'
import { reactLocalStorage } from 'reactjs-localstorage'
import {FiEye,FiEyeOff} from 'react-icons/fi'
import { toast } from 'react-toastify'
import axios from 'axios'
// import QRcode from 'qrcode'
// import { reactLocalStorage } from 'reactjs-localstorage'
// import {CopyToClipboard} from 'react-copy-to-clipboard';
const Index = ({closethis,openmodal})=>{

    const [page,setpage]= useState('');
    const [pin,setpin]= useState('');
    const [error,seterror] = useState('');
    const [visibility,setvisibility] =useState(false);
    const [visibility1,setvisibility1] =useState(false);
    const [visibility2,setvisibility2] =useState(false);
    const [oldpin,setoldpin] = useState('');
    const [newpin,setnewpin] = useState('');
    const [confirmpin,setconfirmpin] = useState('');
    const [change,setchange] = useState('Change Pin')
    const Base_url = process.env.REACT_APP_BACKEND_URL
    const _handleoldpin=(e)=>{
        setoldpin(e.target.value)
    }
    const _handlenewpin=(e)=>{
        setnewpin(e.target.value)
    }

    const _handleconfirmpin=(e)=>{
        setconfirmpin(e.target.value)
    }
    const makeVisible = ()=>{
        setvisibility(!visibility)
    }
    const makeVisiblea = ()=>{
        
        setvisibility1(!visibility1)
    }
    const makeVisibleb = ()=>{
        setvisibility2(!visibility2)
    }

    const handleSubmit = async ()=>{

        if(newpin && confirmpin && oldpin){
            if(newpin !== confirmpin){
                toast.error('Newpin and Confirmpin not Corresponding','error')
            }
            else{
                if(change === "Change Pin"){
                    setchange('Please Wait')
                
                    await axios({
                        method: "POST",
                        url: `${Base_url}/verify/change/wallet/pin`,
                        headers:{
                            'Content-Type':'application/json',
                            'Authorization':reactLocalStorage.get('token')
                        },
                        data:JSON.stringify({userid:reactLocalStorage.getObject('user')._id,oldpin,newpin})
                    })
                    .then((res)=>{
                        
                        
                        
                        if(res.data.status){
                            
                            toast.success('Pin Successfully Changed','SUCCESS');
                            setnewpin('')
                            setoldpin('')
                            setconfirmpin('')
                            closethis(false)
                           
                        }
                    
                    })
                    .catch((err)=>{
                        console.log(err.response);
                        setchange('Change Pin');
                        toast.error(err.response.data.message,'error')
                        //setErr(err.response? err.response.data:'NO Connecetion')
                        
                    })
                }
                
            }
        }

        
    
    }

    return (
        <div className="modalBackground">
            <div className='modalchangepin'>
                <div className='modalHeader'>
                    <div className='modalText'>
                        <div className='receiveText'>
                            Change Pin
                        </div>
                        
                        <IoClose size={25} onClick={()=>{closethis(false)}} />
                    </div>
                    
                    <div><hr/></div>
                </div>
                
                <div className='modalbodyPin'>
                    <div className='pin-info'>
                       <strong><i> Follow the below process for your wallet pin change</i></strong>

                    </div>
                    <div className='PinInputDiv changePin'>
                            {/* {geterror && <div className="pinerror">{geterror}</div>} */}
                            <div className="myInput" style={{marginBottom:10}}>
                                <input type={visibility? 'text': 'password'}  className='form-control' placeholder='Enter Your Old PIN' value={oldpin} onChange={_handleoldpin} maxLength={6}/>
                                {visibility ? <FiEye  className="iconoff" onClick={makeVisible}/> : <FiEyeOff  className="iconoff" onClick={makeVisible}/> }
                            </div>
                            <div className="myInput" style={{marginBottom:10}}>
                                <input type={visibility1? 'text': 'password'}  className='form-control' placeholder='Enter Your New PIN' value={newpin} onChange={_handlenewpin} maxLength={6}/>
                                {visibility1 ? <FiEye  className="iconoff" onClick={makeVisiblea}/>: <FiEyeOff  className="iconoff" onClick={makeVisiblea}/> }
                            </div>
                            <div className="myInput" style={{marginBottom:10}}>
                                <input type={visibility2? 'text': 'password'}  className='form-control' placeholder='Confirm New PIN' value={confirmpin} onChange={_handleconfirmpin} maxLength={6}/>
                                {visibility2 ? <FiEye  className="iconoff" onClick={makeVisibleb}/> : <FiEyeOff  className="iconoff" onClick={makeVisibleb}/> }
                            </div>
                        
                        <input type="submit" value={change}  className="buttonNext" onClick={()=>handleSubmit()} />
                    </div>

                    
                   

                
                </div>
                <div className='modalFooter'>
                   
                </div>
                
            </div>
        </div>
    )
}

export default Index;