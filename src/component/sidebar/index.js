import React, { useEffect, useState } from "react";
import '../../assets/css/Sidebar/sidebar.css'
import {MdDashboard} from 'react-icons/md'
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

import { sidebardata } from "./sidebardata";
const Index=({openClose})=>{
    const [large,setlarge] = useState()
    const location = useLocation();
    const path = location.pathname;
   
    // const RenderList=(value)=>{
    //     var active = value.path === path && 'active' 
    //     var listedClass = className({
    //         active:active,
    //     })
    //     return <div>Welcome</div>
    // }
   
    return(
        
        <div className="sidebar">

            
          <nav className={openClose ? 'showlarge':'showIcons'}>
                <ul className={openClose ? 'nav-menu-items':'nav-menu-items-collapse'}> 

                   {openClose ?


                            sidebardata.map((d,index)=>{
                                return (
                                    <li key={index} className={`nav-link ${path=== d.path && `active`}`}> 
                                        <Link to={d.path}>{d.Icon} <span className='span-text'>{d.title}</span></Link>
                                    </li>
                                )
                                
                            })
                        :
                            sidebardata.map((d,index)=>{
                                return (
                                    <li key={index} className={`nav-link-collapse ${path=== d.path && `active`}`}>
                                        
                                        <Link to={d.path} className='checks'>{d.Icon}</Link>
                                    
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