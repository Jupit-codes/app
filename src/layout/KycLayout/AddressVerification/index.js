import '../../../assets/css/Kyc/tab.css'
const Index = ()=>{
    return (
        <div className="formAccount">
            
            <div className="formAccount_form">
                <label>Upload  Your Utility Bill</label>
                <input type="file" className="form-control" placeholder=""/>
            </div>

            <div className="formAccount_form">
                
                <input type="submit" className="form-control" value="Upload"/>
            </div>

           
            
        </div>
    )
}

export default Index;