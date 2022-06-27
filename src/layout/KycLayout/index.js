
import { useContext, useEffect, useState }  from 'react';
import React from "react";

import '../../assets/css/Kyc/tab.css'
import AddAccount from './AddAccount'
import IDverification from './IDverification'
import AddressVerification from './AddressVerification'
import Email from './Email'
import {MdFileDownloadDone} from 'react-icons/md'
import {BsCheckCircle} from 'react-icons/bs'
import { reactLocalStorage } from 'reactjs-localstorage';
import axios from 'axios';
import Loader from '../../utils/loader/loader.js'
export default function Index() {
  const [value, setValue] = React.useState('one');
  const [content,setContent] = useState('')
  const [firstLevel, setfirstLevel] = useState();
  const [secondLevel, setsecondLevel] = useState();
  const [thirdLevel,setthirdLevel] = useState();
  const[disableFirstLevel,setdisableFirstLevel] = useState(true);
  const[disableSecondLevel,setdisableSecondLevel] = useState(true);
  const[disableThirdLevel,setdisableThirdLevel] = useState(true);
  const[scrollActive,setscrollActive] = useState();
  const[scrollActiveII,setscrollActiveII] = useState();
  const [docAccount,setdocAccount] = useState({})
  const [loaderState, setloaderState] = useState(true)

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setContent(newValue)
    
  };
  React.useEffect(()=>{
    getLatestUpdate();
    
  
  },[])
 const getLatestUpdate = async ()=>{
  const Base_url = process.env.REACT_APP_BACKEND_URL;
  
      await axios({
        method: "POST",
        url: `${Base_url}/users/kyc`,
        headers: {
          "Content-Type": "application/json",
          "Authorization":`Bearer ${reactLocalStorage.get('token')}`

        },
        data:JSON.stringify({userid:reactLocalStorage.getObject('user')._id})
      })
    .then(res=>{
        
      console.log(res.data)
        
        setfirstLevel(res.data.level1[0].status)
        setsecondLevel(res.data.level2[0].event_status);
        setthirdLevel(res.data.level3[0].callbackStatus)
        setdocAccount(res.data);
        setloaderState(false)
       
        
        if(res.data.level1[0].status === "Verified"){
          setdisableSecondLevel(false);
          setValue('two');
          setContent('Accountlinkage')
         

        }
        if(res.data.level2[0].event_status === "customeridentification.success"){
          setdisableThirdLevel(false)
          setValue('four');
          setContent('Idcard')

            
        }
        if(res.data.level1[0].status === "Verified" && res.data.level2[0].event_status === "customeridentification.success"){
          setscrollActiveII('activeTab')
        }
        else{
          setscrollActive('activeTab')
        }

       

        


    })
    .catch(err=>{
      setloaderState(false)
        console.log(err.response)
    })
 }

 

    const _renderComponentTab = ()=>{
        
        switch(content){
           case 'Email':
            return <Email/>
            break;        
            case 'Accountlinkage':
              return <AddAccount status={secondLevel} />
                break;
            case 'Idcard':
               return <IDverification />
                break;
            default:
                return <AddAccount/>
                
        }
        
        
        
    }
    const handleEmail = (e)=>{
      
      
      let x = e.target.parentElement;


      
      for (let i =0;i<x.children.length;i++){
        if(x.children[i].classList.contains('activeTab')){
          
          x.children[i].classList.remove('activeTab');
        }
        
    }
      e.target.classList.add('activeTab');
      setContent('Email');
    }
    const handleAcctLinkage= (e)=>{
      
      let x = e.target.parentElement;

      
      
      for (let i =0;i<x.children.length;i++){
          if(x.children[i].classList.contains('activeTab')){
            
            x.children[i].classList.remove('activeTab');
          }
          
      }
      
      e.target.classList.add('activeTab');
     
      setContent('Accountlinkage');
    }
    const handleIdverify = (e)=>{
      let x = e.target.parentElement;

      
      
      for (let i =0;i<x.children.length;i++){
          if(x.children[i].classList.contains('activeTab')){
            
            x.children[i].classList.remove('activeTab');
          }
          
      }
      
      e.target.classList.add('activeTab');
      
      setContent('Idcard');
    }

    const Active = (Content)=>{

    }

  return (

    <div className=''>
      {loaderState && <Loader/>}

        <div className='myTab'>
            <div onClick={(e)=>{handleEmail(e)}} className="checkactive" >
              Email Verification <span>{firstLevel === "Verified" && <BsCheckCircle size={20} color="#003300" />}</span>
            </div>
            <div onClick={(e)=>{handleAcctLinkage(e)}} className={disableSecondLevel ? 'disableDiv': `checkActive ${scrollActive}`} >
                Bank Verification <span>{secondLevel === "customeridentification.success" && <BsCheckCircle size={20} color="#003300" />}</span>
            </div>
            <div onClick={(e)=>{handleIdverify(e)}} className={disableThirdLevel ? 'disableDiv' : `checkActive ${scrollActiveII}`}>
                Idcard Verification <span>{thirdLevel === "Verified" && <BsCheckCircle size={20} color="#003300" />}</span>
            </div>
        </div>
        <div className='tab_content'>
            {_renderComponentTab()}
        </div>

    </div>

  );
}