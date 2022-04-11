import { useState } from "react"

const Index=({pageContent})=>{
const [confirmpin,setconfirmpin] = useState('')

    const _handleConfirmCreatePIN = (e)=>{
        setconfirmpin(e.target.value)
    }

    
    return (
        <div className='PinInputDiv'>
            <span><i>A code has been sent to your registered email address</i></span>
            <input type="number"  className='form-control' placeholder='Enter OTP Code' onChange={_handleConfirmCreatePIN}/>
            <input type="submit" className="buttonNext" value="Submit" onClick={()=>pageContent('step3')} />
        </div>
    )
}

export default Index