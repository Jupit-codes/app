
  import Webcam from "react-webcam";
  import React from "react";
  import '../../../assets/css/Webcam/webcam.css'
  
const WebcamCapture = ({captured}) => {
        const webcamRef = React.useRef(null);
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
            captured(imageSrc)
        },
        [webcamRef]
        );
  
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
                 
                
                <div className='modalClose' >
                    <input type="submit" value="Capture" onClick={capture}  />
                </div>
            </div>
        );
  };

  export default WebcamCapture;