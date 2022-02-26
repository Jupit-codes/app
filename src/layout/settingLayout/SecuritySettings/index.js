import '../../../assets/css/settings/account.css'
import {AiOutlineEdit} from 'react-icons/ai'
import {RiLockPasswordFill} from 'react-icons/ri'
import {Si1Password} from 'react-icons/si'
import { reactLocalStorage } from 'reactjs-localstorage';
import { useState } from 'react';
import TWO_FAmodal from '../../../utils/modal/2FAmodal'
const Index = ()=>{
    const [TwoFA,setTwoFA] = useState(false)
    return(
        <div className="TabBodySecurity">
            {TwoFA && <TWO_FAmodal closeModal={setTwoFA} />}
            <div className='CoverDIvSecurity'>
                <div className='reset'>Reset Your Password</div>
                <small>Click on the Button Below To Change Password</small>
                <div className='TabInput SubmitModal'>
                    <RiLockPasswordFill size={20} style={{marginRight:10}}/> Change Password
                
                </div>
            </div>

            <div className='CoverDIvSecurity'>
                <div className='reset'>Enable 2FA</div>
                <small>Click on the Button Below To Activate</small>
                <div className='TabInput SubmitModal' onClick={()=>setTwoFA(true)}>
                 
                    <Si1Password size={20} style={{marginRight:10}}/>Enable 2FA
                </div>
            </div>
           
             
        </div>
    )
}

export default Index;