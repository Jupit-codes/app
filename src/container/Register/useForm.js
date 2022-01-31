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
                console.log('Form',Form)
                setForm({...Form,'username':'','password':'','phonenumber':'','email':'','password':''})
                
            }
        }
    },[data])

    

    const RegisterValidForm = !Form.username?.length 
    || !Form.email?.length 
    || !Form.password?.length 
    || !Form.phonenumber?.length
    || !Form.password?.length

    const onSubmit = (e)=>{
        e.preventDefault();
        registerUser(Form)(registerDispatch);
    }
    
    
    return {Form,onChange,RegisterValidForm,onSubmit}
}