import { useContext, useEffect, useState } from "react"
import registerUser from "../../context/actions/registerUser";
import {GlobalContext} from '../../context/Provider'
export default ()=>{
    const [Form,setForm] = useState({})
    const {registerDispatch,registerState:{registerAuth:{loading,data,error,errorAlert}}} = useContext(GlobalContext);
    // console.log('RegisterError',error)
    const onChange = (e)=>{
      const {name,value} = e.target
      
        setForm({...Form,[name]:value});
    }

    useEffect(()=>{
        if(data){
            if(data.status){
                
                setForm({...Form,'username':'','password':'','phonenumber':'','email':'','password':'','firstname':'','lastname':'','referral':''})
                
            }
        }
    },[data])

    

    const RegisterValidForm = !Form.username?.length 
    || !Form.email?.length 
    || !Form.password?.length 
    || !Form.phonenumber?.length >=11
    || !Form.password?.length
    || !Form.firstname?.length
    || !Form.lastname?.length

    const onSubmit = (e)=>{
        e.preventDefault();
        registerUser(Form)(registerDispatch);
    }
    
    
    return {Form,onChange,RegisterValidForm,onSubmit}
}