import '../../../assets/css/settings/account.css'
import {AiOutlineEdit} from 'react-icons/ai'
import {RiLockPasswordFill} from 'react-icons/ri'
import {Si1Password} from 'react-icons/si'
import { reactLocalStorage } from 'reactjs-localstorage';
const Index = ()=>{
    return(
        <div className="TabBodySecurity">
           <div className='TabInput SubmitModal'>
               <RiLockPasswordFill size={20} style={{marginRight:10}}/> Change Password
                
             </div>
             <div className='TabInput SubmitModal'>
                 
                <Si1Password size={20} style={{marginRight:10}}/>Enable 2FA
            </div>
        </div>
    )
}

export default Index;