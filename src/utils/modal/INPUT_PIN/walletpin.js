import { useState } from "react"


const Index=()=>{


    const [walletpin,setwalletpin] =useState('')

    const handleWalletPin = (e)=>{
        setwalletpin(e.target.value)
    }
    
   
    return (
        <div className='PinInputDiv'>
               <div className='pin-info'>
                       <strong> Enter Your Wallet PIN</strong>

                    </div>
            <input type="number"  className='form-control' placeholder='Wallet PIN' value={walletpin} onChange={handleWalletPin} max={4}/>
            <input type="submit" value="Confirm"  className="buttonNext" />
        </div>
    )
}

export default Index