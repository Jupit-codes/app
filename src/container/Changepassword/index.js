import Header from '../../component/changeHeader'
import '../../assets/css/changepassword/change.css'
import Cookies from 'js-cookie';
const Index = ()=>{
    console.log(Cookies.get('item'))
    return(
        <div className='changepassword'>
            <Header changepassword={5}/>
            <div className='passwordResetFormDiv'>
                <div className='form'>
                    <div className='form-group'>
                                <input type='password' className='form-control' placeholder='New Password'/>
                        </div>
                        <div className='form-group'>
                                <input type='password' className='form-control' placeholder='Confirm Password'/>
                        </div>

                        <div className='form-group'>
                            <input type='submit' className='form-control'/>
                        </div>
                </div>
                   
            </div>

            
        </div>
    )
}

export default Index;