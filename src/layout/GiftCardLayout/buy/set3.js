import { useState } from 'react'
import {BiArrowBack} from 'react-icons/bi'
import Select from 'react-select'
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
import Myloader from '../../../utils/loader/loader.js'
import Swal from 'sweetalert2'
import { toast } from "react-toastify";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

 const Index = ({current,currencypicked,brandpicked,rate,giftcardimage})=>{

    const [quantity, setquantity] = useState('')
    const [SelectOption,setSelectOption] = useState();
    const [Form,setForm] = useState({})
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [loader,setloader] = useState(false);
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
                <div> Buy Rate:&nbsp;&#x20A6;{rate}</div>
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

                <div className="submitGiftcardBuy">
                    {SelectOption && See() * rate > 0  && <input type="submit" value='Pay' className="form-control " onClick={handlePaynow}/>}
                </div>
                

            </div>
           
           
           
        </div>
    )
 }

 export default Index;