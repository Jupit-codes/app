import '../../../assets/css/settings/account.css'
import {AiOutlineEdit} from 'react-icons/ai'
import {FaEdit} from 'react-icons/fa'
import { reactLocalStorage } from 'reactjs-localstorage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../../utils/loader/loader.js'
import { toast,ToastContainer } from 'react-toastify';

const Index = ()=>{
    const [phone, setphone]=  useState('')
    const [button,setbutton] = useState('Edit Profile');
    const [startloader,setstartloader] = useState(false)
    const [disable, setdisable] = useState(true)
    let counter = 0;


    const handleEdit = ()=>{
        setbutton('Submit')
        setdisable(false)
        counter++;

        if(counter === 1 && button === "Submit" && !disable ){
            counter=0;
            let _id = reactLocalStorage.getObject('user')._id;
                setstartloader(true);
                axios({
                    method: "POST",
                    url: `https://myjupit.herokuapp.com/threshold/update/phonenumber`,
                    headers:{
                        'Content-Type':'application/json',
                        
                        'Authorization':reactLocalStorage.get('token')
                    },
                    data:JSON.stringify({userid:_id,newphonenumber:phone})
                })
                .then((res)=>{
    
                    setbutton('Edit');
                    setstartloader(false)
                    setdisable(true)
                    toast.success(res.data,'SUCCESS');
                    
                })
                .catch((err)=>{
                    setstartloader(false);
                    toast.error("Update Failed..pls try again",'ERROR');
                    console.log(err)
                    
                    
                })

        }


        // if(button === "Submit"){

        //     let _id = reactLocalStorage.getObject('user')._id;
        //     setstartloader(true)
        //     axios({
        //         method: "POST",
        //         url: `https://myjupit.herokuapp.com/threshold/update/phonenumber`,
        //         headers:{
        //             'Content-Type':'application/json',
                    
        //             'Authorization':reactLocalStorage.get('token')
        //         },
        //         data:JSON.stringify({userid:_id,newphonenumber:phone})
        //     })
        //     .then((res)=>{

        //         setbutton('Edit');
        //         setstartloader(false)
        //         toast.success(res.data,'SUCCESS');
                
        //     })
        //     .catch((err)=>{
    
        //         console.log(err)
                
                
        //     })
        // }
    }

    const handle_phonenumber = (e)=>{
        setphone(e.target.value)
    }
    useEffect(()=>{
        setphone(reactLocalStorage.getObject('user').phonenumber)
    },[])

    return(
        <div className="TabBodySecurity">
            {startloader && <Loader/>}
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
            <div className='TabInput'>
                <label>Username</label>
                <input type="text" className='form-control' placeholder='' value={reactLocalStorage.getObject('user').username} disabled/>
            </div>
            <div className='TabInput'>
                <label>Email Address</label>
                <input type="text" className='form-control' placeholder='' value={reactLocalStorage.getObject('user').email} disabled/>
            </div>

            <div className='TabInput'>
                 <label>Phonenumber</label>
                <input type="text" className='form-control' placeholder='' value={phone} onChange={handle_phonenumber} disabled={disable}/>
            </div>
            <div className='TabInput SubmitModal' onClick={handleEdit}>
                <FaEdit size={20}/>{button}
               
            </div>
           
        </div>
    )
}

export default Index;