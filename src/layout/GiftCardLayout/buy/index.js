import { useEffect, useState ,useCallback} from "react";
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
import Select from 'react-select'
import Countries from '../countries.js'
import { countries,hasFlag  } from 'country-flag-icons'
import Flags from 'country-flag-icons/react/3x2'
import Set1 from './set1.js'
import Set2 from './set2.js'

import { findRenderedComponentWithType } from "react-dom/test-utils";
import { FileUploader } from "react-drag-drop-files";
import {useDropzone} from 'react-dropzone'
import {IoLogoDropbox} from 'react-icons/io'
import {IoClose} from 'react-icons/io5'
import {SiHere} from 'react-icons/si'
import { LayoutTextSidebarReverse } from "react-bootstrap-icons";
import s from "react-aws-s3";
import Myloader from '../../../utils/loader/loader.js'
import Swal from 'sweetalert2'
const Index = ()=>{
    const fileTypes = ["JPG", "PNG", "GIF"];
    const [page,setpage] = useState('Step1')
    const [checkedOne,setcheckedOne] = useState(false);
    const [checkedTwo,setcheckedTwo] = useState(false)
    const [checkedThree,setcheckedThree] = useState(false)
    const [rate,setrate] = useState();
    const [selectbrand,setselectbrand] = useState("nobrand")
    const [selectedSetState,setselectedSetState]  = useState('SET1')

    const [checkedData,setcheckedData] = useState()
    const [loader,setloader] = useState(false);
    const [SelectOption,setSelectOption] = useState();
    const [buyrate,setbuyrate] = useState(0);

    const [pickedbrand,setpickedbrand] = useState();
    const[pickedCurrency,setpickedCurrency] = useState();
    const [pickedratepoint,setpickedratepoint] = useState();

    const [Files, setFiles] = useState();
    const [SelectedImage,setSelectedImage] = useState([]);
    const [images,setImages] = useState([])
    const [balance,setbalance] = useState(0)
    

    // const renderComponent = ()=>{
    //     switch(page){
    //         case 'Step1':
                
    //             return <Step1 stepPage={setpage} checked={setcheckedOne} rateSet={setrate} />
    //             break;
    //         case 'Step2':
                
    //             return <Step2 stepPage={setpage} checked={setcheckedTwo} acceptRate={rate}  />
    //             break;
    //         case 'Step3':
                
    //             return <Step3 stepPage={setpage} checked={setcheckedThree}/>
    //             break;
    //     }
    // }



    const handleChangeFile= (file) => {
        setFiles(file);
        console.log(console.log(file))
      };
   

    const _displayNullCard = ()=>{
        return (
            <div>
                    <div className="brandselectederror">
                        No Brand Selected
                    </div>
                    <div className="brandselectedSpan">Kindly select one of the brand</div>
            </div>
            

        )
    }
    const _displaySelectCountry = ()=>{
        return (
            <div>
                    <div className="brandselectederror">
                        Select Country.
                    </div>
                    <div className="brandselectedSpan">Select Country</div>
            </div>
            

        )
    }
    

   
    const handleChange = (e)=>{
        console.log(e.value)
        setSelectOption(e.value);
    }
    const selectSet = ()=>{
        switch(selectedSetState){
            case 'SET1':
                return <Set1 current={setselectedSetState} message={setselectbrand} setdata={setcheckedData}  pickedB={setpickedbrand}/>
                break;
            case 'SET2':
                return <Set2 current={setselectedSetState} message={setselectbrand} data={checkedData}  pickedC={setpickedCurrency} giftcardrate={setbuyrate}/>
                break;
           
            default:

        }
    }
    const options = [
        { value: 10, label: '10USD' },
        { value: 15, label: '15USD' },
        { value: 25, label: '25USD' },
        { value: 50, label: '50USD' },
        { value: 100, label: '100USD' },
       
        { value: 'others', label: 'Others' },
        
      ]

      const myoption = ()=>{
          return checkedData.map(d=>{
              return {'value':d,'label':d}
          })
      }


   
      const onDrop = useCallback( (acceptedFiles) => {
          console.log('acceptedFiles',acceptedFiles)
        //   const reader = new FileReader();
        //   reader.onload=()=>{
        //       setImages(prevState =>[...image,reader.result]);
        //   }
        //   reader.readAsDataURL(acceptedFiles);
            // setSelectedImage(acceptedFiles.map(file=>{
               
            //     return Object.assign(file,{preview:URL.createObjectURL(file)})
                
            // }))
          
            acceptedFiles.forEach(file=>{
                const reader = new FileReader();
                reader.onload=()=>{
                    setImages(prevState=> [...prevState,reader.result])
                }
                reader.readAsDataURL(file)
            })
            console.log('myImages',images)
            
      }, [])

      useEffect(()=>{
        console.log('images',images)
      },[images])
      const {getRootProps,getInputProps,isDragActive} = useDropzone({onDrop,accept: 'image/*'});

  const removeFile =(selectedFilesTobeDeleted)=>{
        console.log(selectedFilesTobeDeleted)
        return setImages(images.filter(item =>item != selectedFilesTobeDeleted));

  }

    const displaySelectedImages = ()=>{
            
        //         return SelectedImage && SelectedImage.map(file=>{
                    
        //                return <div className="selectedImagePrevDiv">
        //                    <div className="close"><IoClose size={15} color="#000" onClick={()=>removeFile(file.path)}/></div>
        //                             <img src={file.preview}  className="selectImagePrev" alt="preview"/>                  
        //                         </div>
        //    })

        return images && images.map((filebase64,index)=>{
            return <div className="selectedImagePrevDiv" key={index}>
                           <div className="close"><IoClose size={15} color="#000" onClick={()=>removeFile(filebase64)}/></div>
                                    <img src={filebase64}  className="selectImagePrev" alt="preview"/>                  
                            </div>
        })
    }
    const See = ()=>{
        // console.log(SelectOption)
        let counter = 0;
          SelectOption && SelectOption.map(d=>{
            counter += d.value
            
        })

        return counter;
 
    }

    const handlePaynow = async()=>{
        let total = document.getElementById('sumTotal').innerHTML
        setloader(true);
        Swal.fire({
          title: 'Message!',
          text: 'Success',
          icon: 'success',
          confirmButtonText: 'ok'
        })
        setloader(false);
     
        return false
        const Base_url = process.env.REACT_APP_BACKEND_URL;
        await axios({
            method: "POST",
            url: `${Base_url}/verify/addgiftcard/sell/request`,
            headers: {
              "Content-Type": "application/json",
              "Authorization":`Bearer ${reactLocalStorage.get('token')}`
    
            },
                data:JSON.stringify({
                    Userid:reactLocalStorage.getObject('user')._id,
                    Total:total,
                    SelectedAmount:SelectOption,
                    SelectedImage:images,
                    Country:pickedCurrency
                    
                })
            
          })
        .then(res=>{
           setloader(false);
           
           if(res.data.status){
            Swal.fire({
                title: 'Message!',
                text: res.data.message,
                icon: 'success',
                confirmButtonText: 'ok'
              })
           }
           setselectedSetState('SET1');
           setImages([]);
           setSelectOption()
           setselectbrand('nobrand');
           console.log(res.data);
           
        })
        .catch(err=>{
            setloader(false);
            console.log(err.response);
 
        })
    }

    const displayRateBoard=()=>{
        return   <div className="selectFormBuy">
                        <div className="sumbalanceDiv">
                            <div className="btn btn-primary sumbalance">
                                <div >Sum Total : 		&#8358;<span id="sumTotal">{See() * buyrate}</span>  </div>
                                {/* <div> Calculation:&nbsp;&nbsp;{See()} X 400 </div> */}
                                
                                
                                </div>
                            
                        </div>
                        <div className="buySelect">
                            <Select
                                defaultValue={SelectOption}
                                onChange={setSelectOption}
                                options={options}
                                className="form-control mySelect"
                                isMulti={true}
                                isSearchable={true}
                                
                            />

                        </div>
                        
                        {/* <div className="dropArea" >
                            <FileUploader handleChange={handleChangeFile} name="file" types={fileTypes} classes="dragndrop" />
                        </div> */}

                      
                        

                        <div className="submitGiftcardBuy">
                            {SelectOption  && <input type="submit" value="Pay now" className="form-control btn-primary" onClick={handlePaynow}/>}
                        </div>
                       
                        
                        

                        


                    </div>

    }
   

    return(
        <div className="sellbody">
            {loader && <Myloader />}
            <div className="giftCardDiv">
                    
                  {selectSet()}

            
            </div>
            <div className="FormDiv">
                
                {/* {renderComponent()} */}
               
                {selectbrand === "nobrand" && _displayNullCard()}
                {selectbrand === "nocurrency" && _displaySelectCountry()}
                {selectbrand === "norate" && displayRateBoard()}
                {/* {loader && <div className='Chartloader'></div>} */}
             

                

            </div>


    </div>
       
    )
}

export default Index;