import { useEffect, useState ,useCallback} from "react";
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
import Select from 'react-select'
import Countries from '../countries.js'
import { countries,hasFlag  } from 'country-flag-icons'
import Flags from 'country-flag-icons/react/3x2'
import Step1 from './step1.js'
import Step2 from './step2.js'
import Step3 from './step3.js'
import Set1 from './set1.js'
import Set2 from './set2.js'
import Set3 from './set3.js'
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

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
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
    const [Form,setForm] = useState({})
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const [pickedbrand,setpickedbrand] = useState();
    const[pickedCurrency,setpickedCurrency] = useState();
    const [pickedratepoint,setpickedratepoint] = useState();

    const [Files, setFiles] = useState();
    const [SelectedImage,setSelectedImage] = useState([]);
    const [images,setImages] = useState([])
    const [balance,setbalance] = useState(0)
    const [sellrate,setsellrate] = useState(0);
    

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
                return <Set2 current={setselectedSetState} message={setselectbrand} data={checkedData}  pickedC={setpickedCurrency} giftcardrate={setsellrate}/>
                break;
            case 'SET3':
                return <Set3 current={setselectedSetState} />
                break;
            default:

        }
    }
    const options = [
        { value: 10, label: `10${pickedCurrency}` },
        { value: 15, label: `15${pickedCurrency}` },
        { value: 25, label: `25${pickedCurrency}` },
        { value: 50, label: `50${pickedCurrency}`},
        { value: 100, label: `100${pickedCurrency}` },
    
        
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

      const handleChangeInput = (e)=>{
        const {name,value} = e.target
        setForm({...Form,[name]:value});
        
    }
    
    const renderCart = ()=>{
        return SelectOption && SelectOption.length > 0 &&
        SelectOption.map((d,index)=>{
          
            return <div key={index} className="displaycard_cart form-group">
                            <div className="form-group">
                                {pickedbrand}
                            </div>
                            <div className="form-group">
                                {d.value}{pickedCurrency}
                            </div>
                            <div className="form-group">
                                <input type="number" name={index}  onChange={handleChangeInput} value={Form.index} className="form-control"/>
                            </div>
                           
                    </div>
        })
    }
    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

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
        // let counter = 0;
        //   SelectOption && SelectOption.map(d=>{
        //     counter += d.value
            
        // })


        // return counter;

        
        let counter = 0;
          SelectOption && SelectOption.map((d,index)=>{
            console.log(d.value);

            if(Form[index]){
                counter+= parseInt(d.value) * parseInt(Form[index]);
            }
            
            
            
        })
       

        return counter;
 
    }

    const handleSubmit = async()=>{
        console.log(SelectOption);
        let counter = 0;
        let cart = [];
        SelectOption.forEach((d,index)=>{
            if(Form[index]){
                let item = {
                    amount:d.value,
                    quantity:Form[index]
                }
                counter += d.value * Form[index]
                cart.push(item)
            }
        })
        
        let total = document.getElementById('sumTotal').innerHTML
        setloader(true);
        let random = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
        const Base_url = process.env.REACT_APP_BACKEND_URL;
        await axios({
            method: "POST",
            url: `${Base_url}/verify/addgiftcard/sell/request`,
            headers: {
              "Content-Type": "application/json",
              "Authorization":`Bearer ${reactLocalStorage.get('token')}`
    
            },
                data:JSON.stringify({
                    Cardname:pickedbrand,
                    Userid:reactLocalStorage.getObject('user')._id,
                    Email: reactLocalStorage.getObject('user').email,
                    Total:total,
                    SelectedAmount:SelectOption,
                    SelectedImage:images,
                    Country:pickedCurrency,
                    unique_id:random,
                    amountInusd:counter,
                    Cart:cart
                    
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
        if(windowDimensions.width <= 700){
            let x = document.querySelector('#sellbody');
        
            x.classList.remove('sellbody');
            x.classList.add('reverse')
        }
        else{
            let x = document.querySelector('#sellbody');
        
            x.classList.remove('reverse');
            x.classList.add('sellbody')
        }
       
        return   <div className="selectForm">
                        <div className="space">
                                <div className="buyrate">
                                    SellRate : &#x20A6;{sellrate}
                                </div>
                                <div className="sumbalanceDiv">
                                    <div className="btn btn-primary sumbalance">
                                        <div >Sum Total : 		&#8358;<span id="sumTotal">{See() * sellrate}</span>  </div>
                                        {/* <div> Calculation:&nbsp;&nbsp;{See()} X 400 </div> */}
                                        
                                        
                                        </div>
                                    
                                </div>
                        </div>
                            

                        <div>
                            <Select
                                defaultValue={SelectOption}
                                onChange={setSelectOption}
                                options={options}
                                className="form-control mySelect"
                                isMulti={true}
                                isSearchable={true}
                                
                            />

                        </div>
                        
                        {renderCart()}
                        
                        {/* <div className="dropArea" >
                            <FileUploader handleChange={handleChangeFile} name="file" types={fileTypes} classes="dragndrop" />
                        </div> */}

                        <div {...getRootProps()} className="dnd">
                            <input {...getInputProps()} /> 
                            {
                                isDragActive ? <div><p>Drop the Giftcard Images here...</p><SiHere size={45}/></div>:
                                <div>
                                        <p>Drag and Drop some Giftcard Images here or click to select</p>
                                        <IoLogoDropbox size={30}/>
                                </div>
                                
                            }

                        </div>
                        <div className="ImagePreview">
                            {displaySelectedImages()}
                        </div>

                        <div className="submitGiftcard">
                            {SelectOption && images.length > 0 && See() * sellrate > 0 && <input type="submit" value="Sell GiftCard" className="form-control" onClick={handleSubmit}/>}
                        </div>
                       
                        
                        <div>
                         
                        </div>

                        


                    </div>

    }
   

    return(
        <div className="sellbody" id="sellbody">
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