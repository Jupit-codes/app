import '../../assets/css/TitleBar/title.css'
import Logo from '../../assets/images/jupit_100.png'
import {CgMenu} from 'react-icons/cg'
import { useState } from 'react'

const Index=(props)=>{
    const[open, setOpen] = useState(true)
    const sidebarHandler = ()=>{
        setOpen(!open);
        props.handle(open)
    }
    
    return(
        <div className="titlebar">
           <div className="title_bar_logo">
                <img src={Logo} className="d_img"/>
                <CgMenu className="menu" size={30} onClick={sidebarHandler}/>
           </div>
           
            <div>
                <button className="btn btn-md btn-primary shadow-lg">Balance:&#8358;0:00</button>
            </div>
        </div>
    )
}

export default Index;