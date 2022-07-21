import { useState,useCallback } from 'react'
import {BiArrowBack} from 'react-icons/bi'
import Select from 'react-select'
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
import Myloader from '../../../utils/loader/loader.js'
import Swal from 'sweetalert2'
import { toast } from "react-toastify";
import {useDropzone} from 'react-dropzone'
import {IoClose} from 'react-icons/io5'
import {SiHere} from 'react-icons/si'
import {IoLogoDropbox} from 'react-icons/io'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

 const Index = ({current,currencypicked,brandpicked,rate,giftcardimage,setselectedSetState})=>{

    const [quantity, setquantity] = useState('')
    const [SelectOption,setSelectOption] = useState();
    const [Form,setForm] = useState({})
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [loader,setloader] = useState(false);
    const [images,setImages] = useState([])
    const handlequantity = (e)=>{
        setquantity(e.target.value)

    }
    const options = [
        { value: 10, label: `10${currencypicked}` },
        { value: 15, label: `15${currencypicked}` },
        { value: 25, label: `25${currencypicked}` },
        { value: 50, label: `50${currencypicked}` },
        { value: 100, label: `100${currencypicked}` },  
      ]
      const handleChangeInput = (e)=>{
        const {name,value} = e.target
        setForm({...Form,[name]:value});
        
    }
    const onDrop = useCallback( (acceptedFiles) => {
        console.log('acceptedFiles',acceptedFiles)
      
        
          acceptedFiles.forEach(file=>{
              const reader = new FileReader();
              reader.onload=()=>{
                  setImages(prevState=> [...prevState,reader.result])
              }
              reader.readAsDataURL(file)
          })
          
          
    }, [])

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
        
        let counter = 0;
          SelectOption && SelectOption.map((d,index)=>{
            

            if(Form[index]){
                console.log(Form[index])
                counter+= parseInt(d.value) * parseInt(Form[index]);
                
            }
            
            
            
        })

        return counter;
 
    }

    const handlePaynow = async()=>{



        let total = document.getElementById('total').innerHTML
        
        let balance = reactLocalStorage.getObject('user').naira_wallet[0].balance.$numberDecimal;

        if(parseFloat(total) >  parseFloat(balance)){
            toast.error('Sorry your Naira wallet is not sufficiently funded')
            return false
        }

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

           // console.log(counter)
        
        setloader(true);
        // Swal.fire({
        //   title: 'Message!',
        //   text: 'Success',
        //   icon: 'success',
        //   confirmButtonText: 'ok'
        // })
        // setloader(false);
     
        
        const Base_url = process.env.REACT_APP_BACKEND_URL;
        await axios({
            method: "POST",
            url: `${Base_url}/verify/addgiftcard/buy/request`,
            headers: {
              "Content-Type": "application/json",
              "Authorization":`Bearer ${reactLocalStorage.get('token')}`
    
            },
                data:JSON.stringify({
                    Cardname:brandpicked,
                    Userid:reactLocalStorage.getObject('user')._id,
                    Email:reactLocalStorage.getObject('user').email,
                    Total:total,
                    Cart:cart,
                    SelectedAmount:SelectOption,
                    Country:currencypicked,
                    amountInusd:counter

                    
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
           setSelectOption()
           current('SET1');
           
           
          
        //    console.log(res.data);
           
        })
        .catch(err=>{
            setloader(false);
            console.log(err);
            Swal.fire({
                title: 'Oops!',
                text: err.response,
                icon: 'error',
                confirmButtonText: 'ok'
              })
 
        })
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
        
        let total = document.getElementById('total').innerHTML
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
                    Cardname:brandpicked,
                    Userid:reactLocalStorage.getObject('user')._id,
                    Email: reactLocalStorage.getObject('user').email,
                    Total:total,
                    SelectedAmount:SelectOption,
                    SelectedImage:images,
                    Country:currencypicked,
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
           current('SET1');
           setImages([]);
           setSelectOption()
           
           console.log(res.data);
           
        })
        .catch(err=>{
            setloader(false);
            console.log(err.response);
 
        })
    }


      const renderCart = ()=>{
        return SelectOption && SelectOption.length > 0 &&
        SelectOption.map((d,index)=>{
          
            return <div key={index} className="mynewCart">
                            <div className="form-group">
                                {brandpicked}
                            </div>
                            <div className="form-group">
                                {d.value}{currencypicked}
                            </div>
                            <div className="form-group">
                                <input type="number" name={index}  onChange={handleChangeInput} value={Form.index} className="form-control" placeholder='Input Quantity'/>
                            </div>
                           
                    </div>
        })
    }
    return (
        <div className="country">
            {loader && <Myloader />}
            <div className="arrow">
                <BiArrowBack  size={20} color="#000" onClick={()=>{current('SET2') }}/>
            </div>
            <div className='cardParent'>
                <div className='cardPickedParent'>
                    
                    <div className='cardPicked' style={{backgroundImage:`url(${giftcardimage})`, backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'contain'}}>
                        
                    </div>
                   
                </div>
                <div className='currencyBtn'>
                {currencypicked} {See()}
                </div>
                <div className='buyrateDiv'>
                <div> Sell Rate:&nbsp;&#x20A6;{rate}</div>
                <div>Total :&nbsp;&#x20A6;<span id="total">{See() * rate}</span></div>

                </div>
                <div className='quantityDiv'>
                        {/* //<input type="text" className='form-control' onChange={handlequantity} placeholder='Input quantity'/> */}
                        <Select
                                defaultValue={SelectOption}
                                onChange={setSelectOption}
                                options={options}
                                className="form-control mySelect"
                                isMulti={true}
                                isSearchable={true}
                                
                            />
                </div>
                {
                    SelectOption && SelectOption.length > 0 && 
                    <div className='mynewCartTitle'>
                        <div>Brandname</div>
                        <div>Price</div>
                        <div>Total</div>

                    </div>
                }
                
                {renderCart()}

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
                        {SelectOption && images.length > 0 && See() * rate > 0 && <input type="submit" value="Sell GiftCard" className="form-control" onClick={handleSubmit}/>}
                </div>

                {/* <div className="submitGiftcardBuy">
                    {SelectOption && See() * rate > 0  && <input type="submit" value='Pay now' className="form-control btn-primary" onClick={handlePaynow}/>}
                </div> */}
                

            </div>
           
           
           
        </div>
    )
 }

 export default Index;