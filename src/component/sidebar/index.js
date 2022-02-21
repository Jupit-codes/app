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
const Index=({openClose,notify})=>{

    const [large,setlarge] = useState()
    const[notifyLength,setnotify] = useState();
    const location = useLocation();
    const path = location.pathname;
   
    const {getnotificationState:{getnotification:{dataNotification}},getnotificationDispatch} = useContext(GlobalContext)
    
   
    return(
        
        <div className="sidebar">

            
          <nav className={openClose ? 'showlarge':'showIcons'}>
                <ul className={openClose ? 'nav-menu-items':'nav-menu-items-collapse'}> 

                   {openClose ?


                            sidebardata.map((d,index)=>{
                                return (
                                    <li key={index} className={`nav-link ${path=== d.path && `active`}`}> 
                                        <Link to={d.path}>{d.Icon} {d.title === "Notification" ? <span className='span-text'>{d.title}<Badge bg="secondary" pill={true}>{dataNotification}</Badge></span> : <span className='span-text'>{d.title}</span> }</Link>
                                    </li>
                                )
                                
                            })
                        :
                            sidebardata.map((d,index)=>{
                                return (
                                    <li key={index} className={`nav-link-collapse ${path=== d.path && `active`}`}>
                                        
                                       <Link to={d.path} className='checks'>
                                           {d.title === "Notification" ?
                                           
                                           <span>{d.Icon} <Badge bg="secondary" pill={true}>{dataNotification}</Badge></span>:
                                          
                                           <span>{d.Icon}</span>
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