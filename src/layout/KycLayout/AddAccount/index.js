import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { toast,ToastContainer } from 'react-toastify';
import { reactLocalStorage } from 'reactjs-localstorage';
import '../../../assets/css/Kyc/tab.css'
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../../utils/loader/loader.js'
import '../../../assets/css/other.css'
import Validation from '../../../context/actions/validation';
import Update_validation from '../../../context/actions/update_validation';
import { GlobalContext } from '../../../context/Provider';
import update_validation from '../../../context/actions/update_validation';

const Index = ()=>{
    const [bank,setbank] = useState('');
    const [accountNumber,setaccountNumber] = useState('');
    const [accountName,setaccountName] = useState('');
    const [bvn,setBvn] = useState('');
    const [disable,setdisabled] = useState(true)
    const [banklist,setbanklist] = useState();
    const [loading, setloading] = useState(false)
    const [TextDisable,setTextDisable] = useState(false)
    const {validationState:{validation:{validation_loading,validation_error,validation_data}},validationDispatch} = useContext(GlobalContext)
  
    useEffect(()=>{
        AccountLinked();
    },[])

const banks = [
    { "id": "1", "name": "Access Bank" ,"code":"044" },
    { "id": "2", "name": "Citibank","code":"023" },
    { "id": "3", "name": "Diamond Bank","code":"063" },
    { "id": "4", "name": "Dynamic Standard Bank","code":"" },
    { "id": "5", "name": "Ecobank Nigeria","code":"050" },
    { "id": "6", "name": "Fidelity Bank Nigeria","code":"070" },
    { "id": "7", "name": "First Bank of Nigeria","code":"011" },
    { "id": "8", "name": "First City Monument Bank","code":"214" },
    { "id": "9", "name": "Guaranty Trust Bank","code":"058" },
    { "id": "10", "name": "Heritage Bank Plc","code":"030" },
    { "id": "11", "name": "Jaiz Bank","code":"301" },
    { "id": "12", "name": "Keystone Bank Limited","code":"082" },
    { "id": "13", "name": "Providus Bank Plc","code":"101" },
    { "id": "14", "name": "Polaris Bank","code":"076" },
    { "id": "15", "name": "Stanbic IBTC Bank Nigeria Limited","code":"221" },
    { "id": "16", "name": "Standard Chartered Bank","code":"068" },
    { "id": "17", "name": "Sterling Bank","code":"232" },
    { "id": "18", "name": "Suntrust Bank Nigeria Limited","code":"100" },
    { "id": "19", "name": "Union Bank of Nigeria","code":"032" },
    { "id": "20", "name": "United Bank for Africa","code":"033" },
    { "id": "21", "name": "Unity Bank Plc","code":"215" },
    { "id": "22", "name": "Wema Bank","code":"035" },
    { "id": "23", "name": "Zenith Bank","code":"057" }
]
    
 const AccountLinked = async ()=>{
    const Base_url = process.env.REACT_APP_BACKEND_URL;
    
        await axios({
          method: "POST",
          url: `${Base_url}/users/bank`,
          headers: {
            "Content-Type": "application/json",
            "Authorization":reactLocalStorage.get('token')
  
          },
          data:JSON.stringify({email:reactLocalStorage.getObject('user').email})
        })
      .then(res=>{
          
  
        
         if(res.data.status === "customeridentification.success"){
              
                setbank(res.data.bank_code)
                setaccountName(res.data.account_name);
                setaccountNumber(res.data.account_number);
                setBvn(res.data.bvn)
                setTextDisable(true)
                toast.success('Successfully Resolved','SUCCESS');
                update_validation();
         }
          
  
  
      })
      .catch(err=>{
  
      
      console.log(err.response)
  
      })
   }
  


    const _handleAccount = (e)=>{
        
        setaccountNumber(e.target.value);
    }

   

    const _handleBlur = ()=>{
        if(accountNumber.length === 10 && bank){
            setloading(true);
            ValidateAccountNumber();
        }
        else if(bank === ""){
            toast.error('Bank Field Is Required')
            setaccountName('')
        }
        else if(accountNumber.length < 10 || accountNumber.length > 10 ){
            toast.error('Invalid Account Number')
            setaccountName('')
        }
           
    }
    


    const ValidateAccountNumber = async ()=>{
        setaccountName('')
        const Base_url = process.env.REACT_APP_BACKEND_URL
        await axios({
            method: "POST",
            url: `${Base_url}/users/validate/acountnumber`,
            headers:{
                'Content-Type':'application/json',
                "Authorization":reactLocalStorage.get('token')
            },
            data:JSON.stringify({account_number:accountNumber,bank_code:bank})
        })
        .then((res)=>{
                
                setaccountName(res.data.data.data.account_name)
                setloading(false)
                // toast.success(res.data.Message,"SUCCESS")
                toast.success(res.data.Message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                
            })
            .catch((err)=>{
                setloading(false)
              
                // toast.error(err.response.data,"ERROR")
                toast.error(err.response.data, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                
            
        })
            
    }
    const _handleBank = (e)=>{
            setbank(e.target.value)
    }
    const _handleBVN =(e)=>{
        setBvn(e.target.value)
    }
    const sendValidation = ()=>{

        if(TextDisable){
            setTextDisable(false);
        }
        else{
            const item={
                bank:bank,
                accountNumber:accountNumber,
                accountName:accountName,
                bvn:bvn
            }
            Validation(item)(validationDispatch)
        }
        
        
    }

    useEffect(()=>{
        if(validation_data && !TextDisable){
            toast.success(validation_data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

                setbank('')
                setaccountName('')
                setaccountNumber('')
                setBvn('')
        }

        if(validation_error && !TextDisable){
            toast.error(validation_error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                setbank('')
                setaccountName('')
                setaccountNumber('')
                setBvn('')
        }
            
    },[validation_error,validation_data])

//    const getBank = async()=>{
//     await axios({
//         method: "GET",
//         url: 'https://api.paystack.co/bank',
//         headers:{
//             'Content-Type':'application/json',
          
//         }
//     })
//     .then((res)=>{
//          console.log(res.data.data)
//          setbanklist(res.data.data)
//     })
//     .catch((err)=>{
       
//         console.log(err)
        
        
//     })
//    }
//    const _loadBank =()=>{
//     if(banklist){
//         return banklist.forEach((d)=>{
//             console.log(d.name)
//             return <div>Temiloluwa</div>
//         })
//     }
//     else{
//         return 'y'
//     }
   
      
//    }

//    useEffect(()=>{
//         getBank();
//    },[])
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
            { loading && <Loader/>}
            { validation_loading && <Loader/>}
            <div className="formAccount_form">
                <label>Select Bank</label>
                
                <select className="form-control" onChange={_handleBank} value={bank} disabled={TextDisable}>
                <option value="">Select Bank</option>
                
                   {banks.map((d,index)=>{
                        return <option key ={index} value={d.code}>{d.name}</option>
                       
                   })}
                </select>
            </div>

            <div className="formAccount_form">
                <label>Account Number</label>
                <input type="text"  disabled={TextDisable} className="form-control" placeholder="Account Number" onChange={_handleAccount} onBlur={_handleBlur} value={accountNumber}/>
            </div>

           
            <div className="formAccount_form">
                <label>Account Name</label>
                <input type="text"  className="form-control" placeholder="Account Name" value={accountName} disabled/>
            </div>

            <div className="formAccount_form">
                <label>Bank Verification Number</label>
                <input type="number" disabled={TextDisable} className="form-control" placeholder="Bank Verification Number" onChange={_handleBVN} value={bvn}/>
            </div>
            <div className="formAccount_form">
                
                <input type="submit" className={`form-control ${accountName && accountNumber && bank & bvn ? 'btn btn-primary': 'disable'}` } value={TextDisable ? 'Edit':'Submit'} onClick={sendValidation}/>
            </div>
            
        </div>
    )
}

export default Index;