import {useState,useEffect} from 'react'
import React from 'react'
import '../../assets/css/Modal/modal.css'
import {IoClose} from 'react-icons/io5'
import ReactPlayer from 'react-player'
import Video from '../../assets/images/video.mp4'
const Index = ({closeModal})=>{
 
  
    return (
        <div className="modalBackground">
            <div className='modalContainerII videobody'>
                <div className='modalHeader'>
                    <div className='modalText'>
                        <div className='receiveText'>
                            Jupit Pundit
                        </div>
                        
                            <IoClose size={25} color="#fff" onClick={()=>closeModal(!closeModal)} />
                    </div>
                    
                    <div><hr/></div>
                </div>
                
                <div className='camerabody videobody'>
                 <ReactPlayer 
                 playing
                 controls
                 url={Video} 
                 style={{height:'100%'}}
                 
                 />
                   
                </div>
                <div className='modalFooter'>
                   
                </div>
                {/* <div className='modalClose' >
                    <input type="submit" value="Close" onClick={()=>closeModal(!closeModal)} />
                </div> */}
            </div>
        </div>
    )
}

export default Index;