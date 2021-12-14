import React,{useState} from "react";
import TitleBar from '../../component/titleBar'
import Sidebar from '../../component/sidebar'
import Body from '../../container/Body'
import '../../assets/css/Dashboard/dashboard.css'
const Index=()=>{
    const [open, setOpen] = useState(true);
    const handleCallback =(value)=>{
        setOpen(value)
    }
    return (
        <div className="dashboard">
            <TitleBar  handle={handleCallback}/>
            
                <Sidebar openClose={open}/>
                <Body openClose={open}/>
            
            
        </div>
    )
}


export default Index;