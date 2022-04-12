import { useState } from "react"
import { reactLocalStorage } from "reactjs-localstorage"
import axios from "axios"
const Index=({pageContent,createdpin,seterror})=>{
const [confirmpin,setconfirmpin] = useState('')
const [error, setserror] = useState('')
    const _handleConfirmCreatePIN = (e)=>{
        setconfirmpin(e.target.value)
    }

    const checkpin = ()=>{
        if(createdpin !== confirmpin){
            console.log('c',createdpin)
            console.log('x',confirmpin)
            seterror('Pin not corresponding');
            pageContent('step1');
        }
        else{

            _sendmail();
           
        }
    }

    const _sendmail = ()=>{
        
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

            if(res.data.status){
                pageContent('step3');
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
            <input type="number"  className='form-control' placeholder='Confirm PIN' onChange={_handleConfirmCreatePIN}/>
            <input type="submit" value="Next" onClick={checkpin} className="buttonNext" />
        </div>
    )
}

export default Index