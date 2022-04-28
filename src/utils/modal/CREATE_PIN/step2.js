import { useState } from "react"
import { reactLocalStorage } from "reactjs-localstorage"
import axios from "axios"
const Index=({pageContent,createdpin,seterror})=>{
const [confirmpin,setconfirmpin] = useState('')
const [error, setserror] = useState('')
const [loss_focus, set_loss_focus] = useState(false)
const [btn_name, set_btn_name] = useState('Next')
    const _handleConfirmCreatePIN = (e)=>{
        setconfirmpin(e.target.value)
    }

    const checkpin = ()=>{
        if(confirmpin){
            if(createdpin !== confirmpin){
            
                seterror('Pin not corresponding');
                pageContent('step1');
            }
            else{
    
                _sendmail();
               
            }
        }
        
    }

    const _sendmail = ()=>{
        set_loss_focus(true)
        set_btn_name('Please Wait..');
        axios({
            method: "POST",
            url: `https://myjupit.herokuapp.com/sendOTP/wallet/pin/creation`,
            headers:{
                'Content-Type':'application/json',
                'Authorization':reactLocalStorage.get('token')
            },
            data:JSON.stringify({userid:reactLocalStorage.getObject('user')._id,email:reactLocalStorage.getObject('user').email})
        })
        .then((res)=>{

            console.log(res.data.status)
            set_btn_name('Completed');
            if(res.data.status){
                
                pageContent('step3');
                set_loss_focus(false)
            }
            
            
        })
        .catch((err)=>{
            
            seterror(err.response)
            console.log('error',err)
            
        })
    }

    
    return (
        <div className='PinInputDiv'>
                {error && <div className="pinerror">{error}</div>}       
            <input type="password"  className='form-control' placeholder='Confirm PIN' onChange={_handleConfirmCreatePIN} maxLength={6}/>
            <input type="submit" value={btn_name} onClick={checkpin} className="buttonNext" disabled={loss_focus} />
        </div>
    )
}

export default Index