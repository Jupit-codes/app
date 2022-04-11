import {useState,useEffect} from 'react'
import React from 'react'
import '../../../assets/css/Modal/modal.css'
import {IoClose} from 'react-icons/io5'
import { reactLocalStorage } from 'reactjs-localstorage'
import Step1 from './step1.js'
import Step2 from './step2.js'
import Step3 from './step3.js'
// import QRcode from 'qrcode'
// import { reactLocalStorage } from 'reactjs-localstorage'
// import {CopyToClipboard} from 'react-copy-to-clipboard';
const Index = ({closeModal})=>{

    const [page,setpage]= useState('step1');
    const [pin,setpin]= useState('');
    const [error,seterror] = useState('');
   
    
    




    const _renderComponent = ()=>{

        switch(page){
            case 'step1':
                return <Step1 pageContent={setpage} pin={setpin} geterror={error} />
                break;
             case 'step2':
                return <Step2 pageContent={setpage} createdpin={pin}  seterror={seterror} />
            break;

            case 'step3':
                return <Step3 pageContent={setpage}/>
                break;
        }


    }

    

    return (
        <div className="modalBackground">
            <div className='modalContainerCreatepin'>
                <div className='modalHeader'>
                    <div className='modalText'>
                        <div className='receiveText'>
                            Create Pin
                        </div>
                        
                        <IoClose size={25} onClick={()=>{closeModal(false)}} />
                    </div>
                    
                    <div><hr/></div>
                </div>
                
                <div className='modalbodyPin'>
                    <div className='pin-info'>
                       <strong><i> Follow the below process for your wallet pin creation</i></strong>

                    </div>

                    {_renderComponent()}
                   

                
                </div>
                <div className='modalFooter'>
                   
                </div>
                
            </div>
        </div>
    )
}

export default Index;