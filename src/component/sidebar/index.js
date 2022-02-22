import React, { useContext, useEffect, useState } from "react";
import '../../assets/css/Sidebar/sidebar.css'
import {MdDashboard} from 'react-icons/md'
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import {Badge} from 'react-bootstrap'
import { GlobalContext } from "../../context/Provider";
import getNotification from "../../context/actions/getNotification";
import { sidebardata } from "./sidebardata";
import { reactLocalStorage } from "reactjs-localstorage";
import FetchNotification from '../../context/actions/getNotification'
const Index=({openClose,notify})=>{

    const [large,setlarge] = useState()
    const[notifyLength,setnotify] = useState();
    const [manageRead,setManageRead] = useState([]);
    const [notificationLength,setnotificationLength] = useState()
    const location = useLocation();
    const path = location.pathname;
    const counter =[];
    const {getnotificationState:{getnotification:{loadingNotification},dataNotification,errorNotification}, getnotificationDispatch} = useContext(GlobalContext)
    

    useEffect(()=>{
        const addressBTC = reactLocalStorage.getObject('user').btc_wallet[0].address;
        const addressUSDT = reactLocalStorage.getObject('user').usdt_wallet[0].address
        const item ={
            addressBTC:addressBTC,
            addressUSDT:addressUSDT
        }
        FetchNotification(item)(getnotificationDispatch)
        if(dataNotification){
            if(dataNotification.length !== notificationLength){

                setManageRead(dataNotification);
                
               
                manageRead.map((d)=>{
                    if(d.read === "unread"){
                        counter.push(d);
                    }
                })
                setnotificationLength(counter.length)




            }
        }
       
    },[])
    return(
        
        <div className="sidebar">

            
          <nav className={openClose ? 'showlarge':'showIcons'}>
                <ul className={openClose ? 'nav-menu-items':'nav-menu-items-collapse'}> 

                   {openClose ?


                            sidebardata.map((d,index)=>{
                                return (
                                    <li key={index} className={`nav-link ${path=== d.path && `active`}`}> 
                                        <Link to={d.path}>{d.Icon} {d.title === "Notification" ? <div className='span-text'>{d.title}<Badge bg="secondary" pill={true} className="badge">{notificationLength && notificationLength}</Badge></div> : <div className='span-text'>{d.title}</div> }</Link>
                                    </li>
                                )
                                
                            })
                        :
                            sidebardata.map((d,index)=>{
                                return (
                                    <li key={index} className={`nav-link-collapse ${path=== d.path && `active`}`}>
                                        
                                       <Link to={d.path} className='checks'>
                                           {d.title === "Notification" ?
                                           
                                           <div>{d.Icon} <Badge bg="secondary" pill={true}>{notificationLength && notificationLength}</Badge></div>:
                                          
                                           <div>{d.Icon}</div>
                                        }
                                           
                                           
                                           </Link> 
                                       
                                    
                                    </li>
                                )
                            
                            })
                         
                         
                         } 

                     {/* {sidebardata.map((d,index)=>{
                        return (
                            <li key={index} className={`${d.path === path ? `active ${openClose ? ' nav-link':'nav-link-collapse'}` : 'nav-link'}`  }> 
                                <Link to={d.path}>{d.Icon} <span className={openClose ? 'span-text':'d-none'}>{d.title}</span></Link>
                            </li>
                        )
                        
                    })}  */}
                </ul>
          </nav>

        </div>
    );
}

export default Index;