import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { toast,ToastContainer } from 'react-toastify';
import { reactLocalStorage } from 'reactjs-localstorage';
import '../../../assets/css/Kyc/tab.css'
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../../utils/loader/loader.js'
import '../../../assets/css/other.css'
import Validation from '../../../context/actions/validation';
import { GlobalContext } from '../../../context/Provider';

const Index = ()=>{
    const [bank,setbank] = useState('');
    const [accountNumber,setaccountNumber] = useState('');
    const [accountName,setaccountName] = useState('');
    const [bvn,setBvn] = useState('');
    const [disable,setdisabled] = useState(true)
    const [banklist,setbanklist] = useState();
    const [loading, setloading] = useState(false)
    const {validationState:{validation:{validation_loading,validation_error,validation_data}},validationDispatch} = useContext(GlobalContext)

    useEffect(()=>{
        AccountLinked();
    },[])

    // useEffect(()=>{
        
    // },[])
    
 const AccountLinked = async ()=>{
    const Base_url = process.env.REACT_APP_BACKEND_URL;
    
        await axios({
          method: "POST",
          url: `${Base_url}/users/bank`,
          headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${reactLocalStorage.get('token')}`
  
          },
          data:JSON.stringify({email:reactLocalStorage.getObject('user').email})
        })
      .then(res=>{
          
  
         console.log(res.data)
          
  
  
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
                console.log(res.data.data)
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
        const item={
            bank:bank,
            accountNumber:accountNumber,
            accountName:accountName,
            bvn:bvn
        }
        Validation(item)(validationDispatch)
        
    }

    useEffect(()=>{
        if(validation_data){
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

        if(validation_error){
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
                
                <select className="form-control" onChange={_handleBank} value={bank}>
                <option value="">Select Bank</option>
                    <option value="044">Access Bank</option>

                </select>
            </div>

            <div className="formAccount_form">
                <label>Account Number</label>
                <input type="text" className="form-control" placeholder="Account Number" onChange={_handleAccount} onBlur={_handleBlur} value={accountNumber}/>
            </div>

           
            <div className="formAccount_form">
                <label>Account Name</label>
                <input type="text" className="form-control" placeholder="Account Name" value={accountName} disabled/>
            </div>

            <div className="formAccount_form">
                <label>Bank Verification Number</label>
                <input type="number" className="form-control" placeholder="Bank Verification Number" onChange={_handleBVN} value={bvn}/>
            </div>
            <div className="formAccount_form">
                
                <input type="submit" className={`form-control ${accountName && accountNumber && bank & bvn ? 'btn btn-primary': 'disable'}` } value="Submit" onClick={sendValidation}/>
            </div>
            
        </div>
    )
}

export default Index;