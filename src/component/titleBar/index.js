import '../../assets/css/TitleBar/title.css'
import Logo from '../../assets/images/logo.png'
import {CgMenu} from 'react-icons/cg'
import { useState } from 'react'
import {MdOutlineLogout} from 'react-icons/md'
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
                <button className="btn btn-md bg-light shadow-lg">Hello Temiloluwa!</button>
            </div>
        </div>
    )
}

export default Index;