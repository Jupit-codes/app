import '../../../assets/css/Kyc/tab.css'
import WebcamCapture from '../WebCam';
import sampleImage from '../../../assets/images/photo-id.jpg'
import Empty from '../../../assets/images/empty-photo.png'
import WebCamModal from '../../../utils/modal/webcam'
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../context/Provider';
import idcard from '../../../context/actions/idcard';
import FormData from 'form-data'
import { S3Client, AbortMultipartUploadCommand } from "@aws-sdk/client-s3";
import S3 from 'react-aws-s3'
import { reactLocalStorage } from 'reactjs-localstorage';
import { toast,ToastContainer } from 'react-toastify';
import Loader from '../../../utils/loader/loader.js'

const Index = ()=>{
    const [open,setOpen] = useState(false);
    const [CapturedImage,setCapturedImage] = useState();
    const [cardType,setcardType] = useState();
    const [cardNumber,setcardNumber] = useState('');
    const {idCardState:{idcardVerification:{idcard_loading,idcard_data,idcard_error}},idCardDispatch} = useContext(GlobalContext)

    console.log(idcard_loading)
    const _handleIDCard = (e)=>{
        setcardType(e.target.value)
    }
    

    const config = {
        bucketName:process.env.REACT_APP_BUCKET_NAME,
        region:process.env.REACT_APP_REGION,
        accessKeyId:process.env.REACT_APP_AWS_KEY_ID,
        secretAccessKey:process.env.REACT_APP_AWS_SECRET_KEY
    }

    const ReactS3Client = new S3(config);
    const _handleNumber = (e)=>{
        setcardNumber(e.target.value)
    }

    const saveImageVerification = ()=>{
       
     
    //    console.log(config)

    //    return false;
        var decodedImg = decodeBase64Image(CapturedImage);
        var dataToBlob = dataURItoBlob(CapturedImage)
        // console.log(decodedImg)
        // console.log('DataToBlob',dataToBlob)
        var x = CapturedImage.toString().replace(/^data:image\/jpeg;base64,/, "")

        // console.log(atob(x)) ;
        // return false;
        const item = {
            CapturedImage:CapturedImage,
            cardNumber:cardNumber,
            cardType:cardType,
            userid:reactLocalStorage.getObject('user')._id
        }

        // ReactS3Client.uploadFile(Buffer.from(x, 'base64'),"Filename").then(data=>{
        //     console.log('DataSent',data);
        // })
        
        // let formData = new FormData();
        // formData.append('idcard',decodedImg.data);
        // formData.append('cardnumber',cardNumber);
        // formData.append('cardtype',cardType);
        idcard(item)(idCardDispatch);
    }

    function decodeBase64Image(dataString) {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
      response = {};
  
    if (matches.length !== 3) {
      return new Error('Invalid input string');
    }
  
    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');
  
    return response;
  }

  function dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
  for (var i = 0; i < binary.length; i++) {
     array.push(binary.charCodeAt(i));
  }
 return new Blob([new Uint8Array(array)], {
    type: 'image/jpg'
});
}
    useEffect(()=>{
            if(idcard_error){
                toast.error(idcard_error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }

            if(idcard_data){
                toast.success(idcard_data, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                    setCapturedImage('')
                    setcardNumber('')
                    setcardType('')
            }
    },[idcard_data,idcard_error,idcard_loading])

    
    
    return (
        <div className="formAccount">
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />

            {open && <WebCamModal closeModal={setOpen} CapturedImage={setCapturedImage}/>}
            {idcard_loading && <Loader/>}
            
            <div className="formAccount_form">
                <label>Select ID Card Type</label>
                <select className="form-control" value={cardType} onChange={_handleIDCard}>
                    <option>Select ID Card Type</option>
                    <option value="international-passport">International Passport</option>
                    <option value="nimc">NIMC</option>
                    <option value="driver">Drivers Licence</option>
                </select>
            </div>

            <div className="formAccount_form">
                <label>Unique Number</label>
                <input type="text" className="form-control" placeholder="ID Card Number" value={cardNumber} onChange={_handleNumber}/>
            </div>

            <div className="formAccount_form">
                
                <input type="submit" className="form-control btn-secondary" value={CapturedImage ? 'Retake Picture': 'Take A Photo With Your ID Card'} onClick={()=>{setOpen(true)}}/>
            </div>

            <div className='selfieDiv'>
                <div className='flex1'>
                    <div className='samplepictureText'>Sample Picture</div>
                    <img src={sampleImage} />
                </div>
                <div className='flex2'>
                    <div className='samplepictureText'>Your Picture</div>
                    {CapturedImage ? <img src={CapturedImage}/> : <img src={Empty}/>}
                </div>
            </div>

            {/* <div>
                <WebcamCapture/>
            </div> */}

            <div className="formAccount_form">
                
               {CapturedImage && <input type="submit" className="form-control btn-primary" value="Save" disabled={cardNumber && cardType ? false: true}  onClick={saveImageVerification}/> } 
            </div> 
            
        </div>
    )
}

export default Index;