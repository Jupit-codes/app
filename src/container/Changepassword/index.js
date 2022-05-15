import Header from '../../component/changeHeader'
import '../../assets/css/changepassword/change.css'
import Cookies from 'js-cookie';
import {AiFillUnlock} from 'react-icons/ai'
const Index = ()=>{
    console.log(Cookies.get('item'))
    return(
        <div className='changepassword'>
            <Header changepassword={5}/>
            <div className='passwordResetFormDiv'>
                <div className='circularPassword'>
                    <AiFillUnlock size={30}/>
                </div>
                
                <div className='form'>
                    <div className='form-group'>
                                <input type='password' className='form-control' placeholder='New Password' required/>
                        </div>
                        <div className='form-group'>
                                <input type='password' className='form-control' placeholder='Confirm Password' required/>
                        </div>

                        <div className='form-group'>
                            <input type='submit' className='form-control btn-primary'/>
                        </div>
                </div>
                   
            </div>

            
        </div>
    )
}

export default Index;