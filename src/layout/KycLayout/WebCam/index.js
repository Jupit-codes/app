
  import Webcam from "react-webcam";
  import React, { useRef } from "react";
  import '../../../assets/css/Webcam/webcam.css'
  
const WebcamCapture = ({captured}) => {
        const webcamRef = React.useRef(null);
        const fileInput = useRef()
        const videoConstraints = {
            // width: 1280,
            // height: 720,
            // facingMode: "user"
            width: 500,
            height: 300,
            facingMode: "user"
        };
        const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            // var data = webcamRef.current.getScreenshot();
            
            captured(imageSrc);
        },
        [webcamRef]
        );

        const _handleFileInput = (e)=>{
            e.preventDefault()
            // console.log(fileInput.current.files[0])
        }

        
  
        return (
            <div className="webcamContainer">
                <div>
                    <Webcam
                    audio={false}
                    height={320}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={1280}
                    videoConstraints={videoConstraints}
                    />
                   
                </div>
                {/* <div>
                   <input type="file"  ref={fileInput}/>
                    <button onClick={_handleFileInput}>Check</button>
                </div> */}
                 
                
                <div className='modalClose' >
                    <input type="submit" value="Capture" onClick={capture}  />
                </div>
            </div>
        );
  };

  export default WebcamCapture;