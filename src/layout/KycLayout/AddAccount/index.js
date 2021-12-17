import '../../../assets/css/Kyc/tab.css'
const Index = ()=>{
    return (
        <div className="formAccount">
            <div className="formAccount_form">
                <label>Select Bank</label>
                <select className="form-control">
                    <option>Select Bank</option>
                </select>
            </div>

            <div className="formAccount_form">
                <label>Account Number</label>
                <input type="text" className="form-control" placeholder="Account Number"/>
            </div>

            <div className="formAccount_form">
                <label>Account Number</label>
                <input type="number" className="form-control" placeholder="Account Number"/>
            </div>
            <div className="formAccount_form">
                <label>Account Name</label>
                <input type="number" className="form-control" placeholder="Account Number" disabled/>
            </div>

            <div className="formAccount_form">
                <label>Bank Verification Number</label>
                <input type="number" className="form-control" placeholder="Account Number"/>
            </div>
           
            
        </div>
    )
}

export default Index;