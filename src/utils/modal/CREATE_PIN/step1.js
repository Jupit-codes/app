import { useState } from "react"



const Index=({pageContent,pin,geterror})=>{


    const [createdpin,setcreatedpin] =useState('')

    const _handleCreatePIN = (e)=>{
        setcreatedpin(e.target.value)
    }
    
    const handlenext = ()=>{
        
        if(createdpin){
            pin(createdpin);
            pageContent('step2')
        }
        
    }
    
    return (
        <div className='PinInputDiv'>
                {geterror && <div className="pinerror">{geterror}</div>}
            <input type="number"  className='form-control' placeholder='Enter Your Wallet PIN' value={createdpin} onChange={_handleCreatePIN} max={4}/>
            <input type="submit" value="Next" onClick={handlenext} className="buttonNext" />
        </div>
    )
}

export default Index