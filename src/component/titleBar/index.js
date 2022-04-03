import '../../assets/css/TitleBar/title.css'
import Logo from '../../assets/images/logo.png'
import {CgMenu} from 'react-icons/cg'
import { useState } from 'react'
import {MdOutlineLogout} from 'react-icons/md'
import { reactLocalStorage } from 'reactjs-localstorage'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
const Index=({handle,currentHandle})=>{
    const[open, setOpen] = useState(true)
    // const sidebarHandler = ()=>{
    //     setOpen(!open);
    //     handle(open)
    // }
    // console.log('myhandler',currentHandle)
    const history = useHistory();
    const logout =()=>{
       reactLocalStorage.remove('user');
       reactLocalStorage.remove('token');
       reactLocalStorage.remove('kyc');
       history.push('/client/login')
    }
    
    return(
        <div className="titlebar">
           <div className="title_bar_logo">
                <img src={Logo} className="d_img"/>
                <CgMenu className="menu" size={30} onClick={()=>handle(!currentHandle)}/>
           </div>
           
            <div>
                <button className="btn btn-md bg-success shadow-lg" onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Index;