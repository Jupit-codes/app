import { reactLocalStorage } from 'reactjs-localstorage';
import '../../../assets/css/Kyc/tab.css'
const Index = ()=>{
    return (
        <div className="formAccount">
            
            <div className="formAccount_form">
                <label>Email Address</label>
                <input type="text" className="form-control" placeholder="Account Number" value={reactLocalStorage.getObject('kyc').level1[0].email} disabled/>
            </div>
            
        </div>
    )
}

export default Index;