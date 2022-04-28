import { useState } from "react"
import {FiEye,FiEyeOff} from 'react-icons/fi'


const Index=({pageContent,pin,geterror})=>{


    const [createdpin,setcreatedpin] =useState('')
    const [visibility,setvisibility] =useState(false);
    const _handleCreatePIN = (e)=>{
        setcreatedpin(e.target.value)
    }
    
    const handlenext = ()=>{
        
        if(createdpin){
            pin(createdpin);
            pageContent('step2')
        }
        
    }
    const makeVisible = ()=>{
        setvisibility(!visibility)
    }
    
    return (
        <div className='PinInputDiv'>
                {geterror && <div className="pinerror">{geterror}</div>}
                <div className="myInput">
                    <input type={visibility? 'text': 'password'}  className='form-control' placeholder='Enter Your Wallet PIN' value={createdpin} onChange={_handleCreatePIN} maxLength={6}/>
                    {visibility ? <FiEye  className="iconoff" onClick={makeVisible}/> : <FiEyeOff  className="iconoff" onClick={makeVisible}/> }
                </div>
            {/* <input type="password"  className='form-control' placeholder='Enter Your Wallet PIN' value={createdpin} onChange={_handleCreatePIN} maxLength={6}/> */}
            <input type="submit" value="Next" onClick={handlenext} className="buttonNext" />
        </div>
    )
}

export default Index