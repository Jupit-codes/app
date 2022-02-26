import '../../../assets/css/settings/account.css'
import {AiOutlineEdit} from 'react-icons/ai'
import {FaEdit} from 'react-icons/fa'
import { reactLocalStorage } from 'reactjs-localstorage';
const Index = ()=>{
    return(
        <div className="TabBody">
            <div className='TabInput'>
                <label>Username</label>
                <input type="text" className='form-control' placeholder='' value={reactLocalStorage.getObject('user').username}/>
            </div>
            <div className='TabInput'>
                <label>Email Address</label>
                <input type="text" className='form-control' placeholder='' value={reactLocalStorage.getObject('user').email}/>
            </div>

            <div className='TabInput'>
                 <label>Phonenumber</label>
                <input type="text" className='form-control' placeholder='' value={reactLocalStorage.getObject('user').phonenumber}/>
            </div>
            <div className='TabInput SubmitModal'>
                <FaEdit size={20}/>Edit Profile
               
            </div>
           
        </div>
    )
}

export default Index;