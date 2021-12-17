import '../../../assets/css/Kyc/tab.css'
const Index = ()=>{
    return (
        <div className="formAccount">
            <div className="formAccount_form">
                <label>Select ID Card Type</label>
                <select className="form-control">
                    <option>Select Bank</option>
                    <option>International Passport</option>
                    <option>NIMC</option>
                    <option>Drivers Licence</option>
                </select>
            </div>

            <div className="formAccount_form">
                <label>Unique Number</label>
                <input type="text" className="form-control" placeholder="ID Card Number"/>
            </div>

            <div className="formAccount_form">
                
                <input type="submit" className="form-control" value="Save"/>
            </div>
            
        </div>
    )
}

export default Index;