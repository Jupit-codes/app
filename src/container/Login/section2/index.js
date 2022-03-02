import axios from "axios";
import { useState } from "react";
import {IoIosArrowBack} from 'react-icons/io'

const Index = ({Next})=>{
    const [token,setToken] = useState('')
    const [loader, setloader] = useState(false);
    const [mydata,setmydata] = useState([]);
    const [myerror,setmyerror] = useState([]);

    const submitToken = ()=>{
       
    }
    return(
        <div>
            <div className="formClassToken mt-4">
                <div className="divForm">
                        <input type="number" className="form-control myform" placeholder="Input Authenticator Token" onChange={(e)=>setToken(e.target.value)} value={token} required/>
                        
                </div>
                <div className="divForm">
                        <input type="submit" className="form-control mybtn" onClick={submitToken} value="Process Token"/>
                </div>
            
            </div>
            {/* <div className="return" onClick={()=>Next('Section1')}>
                <IoIosArrowBack/><span> return to login</span>
            </div> */}
        </div>
            
    )
}

export default Index;