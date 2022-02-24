import '../../../assets/css/Kyc/tab.css'
import WebcamCapture from '../WebCam';
import sampleImage from '../../../assets/images/photo-id.jpg'
import Empty from '../../../assets/images/empty-photo.png'
import WebCamModal from '../../../utils/modal/webcam'
import { useState } from 'react';
const Index = ()=>{
    const [open,setOpen] = useState(false);
    const [CapturedImage,setCapturedImage] = useState();
    console.log('CapturedImageSent',CapturedImage)
    return (
        <div className="formAccount">
            {open && <WebCamModal closeModal={setOpen} CapturedImage={setCapturedImage}/>}
            <div className="formAccount_form">
                <label>Select ID Card Type</label>
                <select className="form-control">
                    <option>Select Bank</option>
                    <option>International Passport</option>
                    <option>NIMC</option>
                    <option>Drivers Licence</option>
                </select>
            </div>

            <div className="formAccount_form">
                <label>Unique Number</label>
                <input type="text" className="form-control" placeholder="ID Card Number"/>
            </div>

            <div className="formAccount_form">
                
                <input type="submit" className="form-control btn-secondary" value="Take A Photo With Your ID Card" onClick={()=>{setOpen(true)}}/>
            </div>

            <div className='selfieDiv'>
                <div className='flex1'>
                    <div className='samplepictureText'>Sample Picture</div>
                    <img src={sampleImage} />
                </div>
                <div className='flex2'>
                    <div className='samplepictureText'>Your Picture</div>
                    <img src={Empty}/>
                </div>
            </div>

            {/* <div>
                <WebcamCapture/>
            </div> */}
{/* 
            <div className="formAccount_form">
                
                <input type="submit" className="form-control" value="Save"/>
            </div> */}
            
        </div>
    )
}

export default Index;