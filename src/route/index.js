import Home from '../container/Home'
import About from '../container/Aboutus'
import Learn from '../container/Learn'
import Faq from '../container/Faq'
import Contact from '../container/Contact'
import Login from '../container/Login'
const route = [
    {
        path:'/aboutus',
        title:'About | Jupit',
        component:About,

    },
    {
        path:'/learnwithus',
        title:'Learn | Jupit',
        component:Learn,

    },
    {
        path:'/faq',
        title:'Faq | Jupit',
        component:Faq,

    },
    {
        path:'/contact-us',
        title:'Contact Us | Jupit',
        component:Contact,

    },
    {
        path:'/client/login',
        title:'Client Login | Jupit',
        component:Login,

    },
    {
        path:'/',
        title:'Home | Jupit',
        component:Home,

    },
   

    
    
  
    
   
]

export default route;