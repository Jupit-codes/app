import Home from '../container/Home'
import About from '../container/Aboutus'
import Learn from '../container/Learn'
import Faq from '../container/Faq'
import Contact from '../container/Contact'
import Login from '../container/Login'
import Register from '../container/Register'
import Dashboard from '../container/Dashboard'
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
        path:'/client/signin',
        title:'Client SignIn | Jupit',
        component:Login,

    },
    {
        path:'/client/signup',
        title:'Client SignUp | Jupit',
        component:Register,

    },
    {
        path:'/client',
        title:'Client Dashboard | Jupit',
        component:Dashboard,

    },
    {
        path:'/',
        title:'Home | Jupit',
        component:Home,

    },
   

    
    
  
    
   
]

export default route;