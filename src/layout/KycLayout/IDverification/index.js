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
import axios from 'axios';

const Index = ()=>{
    const [open,setOpen] = useState(false);
    const [CapturedImage,setCapturedImage] = useState();
    const [cardType,setcardType] = useState();
    const [cardNumber,setcardNumber] = useState('');
    const [firstname,setfirstname] = useState('');
    const [lastname,setlastname] = useState('');
    const [dob,setdob] = useState('');
    const [disableBTX,setdisableBTX] = useState(false)
    const {idCardState:{idcardVerification:{idcard_loading,idcard_data,idcard_error}},idCardDispatch} = useContext(GlobalContext)

    
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
    const _handleFirstname = (e)=>{
        setfirstname(e.target.value)
    }
    const _handleLastname = (e)=>{
        setlastname(e.target.value)
    }
    const _handledob = (e)=>{
        setdob(e.target.value)
    }

    const getInfo = async ()=>{
        const Base_url = process.env.REACT_APP_BACKEND_URL;
    
            await axios({
              method: "POST",
              url: `${Base_url}/users/getIdcardverification`,
              headers: {
                "Content-Type": "application/json",
                "Authorization":reactLocalStorage.get('token')
      
              },
              data:JSON.stringify({userid:reactLocalStorage.getObject('user')._id})
            })
          .then(res=>{
              
            // console.log("IDCARD",res.data)
      
          
             if(res.data[0].status === "Verified"){

                  setcardType(res.data[0].cardtype);
                  setfirstname(res.data[0].firstname);
                  setlastname(res.data[0].lastname);
                  setdob(res.data[0].dob)
                  setcardNumber(res.data[0].cardnumber);
                  setdisableBTX(true)
                  setCapturedImage(res.data[0].imagepath)
                 
                    // setbank(res.data.bank_code)
                    // setaccountName(res.data.account_name);
                    // setaccountNumber(res.data.account_number);
                    // setBvn(res.data.bvn)
                    // setTextDisable(true)
                    // toast.success('Successfully Resolved','SUCCESS');
                    // update_validation();
                    // console.log('Veririfed')
             }
              
      
      
          })
          .catch(err=>{
      
          
          console.log("IDcard",err.response)
      
          })
       }


    const saveImageVerification = ()=>{
       
        var decodedImg = decodeBase64Image(CapturedImage);
        var dataToBlob = dataURItoBlob(CapturedImage)
        var x = CapturedImage.toString().replace(/^data:image\/jpeg;base64,/, "")
        const item = {
            CapturedImage:CapturedImage,
            cardNumber:cardNumber,
            firstname:firstname,
            lastname:lastname,
            dob:dob,
            cardType:cardType,
            userid:reactLocalStorage.getObject('user')._id,
            email:reactLocalStorage.getObject('user').email
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
        getInfo();
    },[])


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
                    setfirstname('')
                    setlastname('')
                    setdob('')
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
                <select className="form-control" value={cardType} onChange={_handleIDCard} disabled={disableBTX}>
                    <option>Select ID Card Type</option>
                    
                    {/* <option value="Nimc">NIMC</option> */}
                    {/* <option value="Driverslicense">Drivers Licence</option> */}
                    <option value="Intlpassport">International Passport</option>
                    <option value="Voterscard">Voter's Card</option>
                </select>
            </div>

            <div className="formAccount_form">
                <label>First Name</label>
                <input type="text" className="form-control" placeholder="First Name" value={firstname} onChange={_handleFirstname} disabled={disableBTX}/>
            </div>

            <div className="formAccount_form">
                <label>Last Name</label>
                <input type="text" className="form-control" placeholder="Last Name" value={lastname} onChange={_handleLastname} disabled={disableBTX}/>
            </div>
            <div className="formAccount_form">
                <label>Date Of Birth</label>
                <input type="date" className="form-control" placeholder="" value={dob} onChange={_handledob} disabled={disableBTX}/>
            </div>

            <div className="formAccount_form">
                <label>Number</label>
                <input type="text" className="form-control" placeholder="ID Card Number" value={cardNumber} onChange={_handleNumber} disabled={disableBTX}/>
            </div>

            <div className="formAccount_form">
                
                {!disableBTX && <input type="submit" className="form-control btn-secondary" value={ CapturedImage ? 'Retake Picture': 'Take A Photo With Your ID Card'} onClick={()=>{setOpen(true)}}/> }
            </div>

            <div className='selfieDiv'>
                <div className='flex1'>
                    <div className='samplepictureText'>Sample Picture</div>
                    <img src={sampleImage} />
                </div>
                <div className='flex2'>
                    <div className='samplepictureText'>Your Picture</div>
                    { CapturedImage ? <img src={CapturedImage}/> : <img src={Empty}/>}
                    
                </div>
            </div>

            {/* <div>
                <WebcamCapture/>
            </div> */}

            <div className="formAccount_form">
                
               {!disableBTX && CapturedImage && <input type="submit" className="form-control btn-primary" value="Save" disabled={cardNumber && cardType && !disableBTX ? false: true}  onClick={saveImageVerification}/> } 
            </div> 
            
        </div>
    )
}

export default Index;