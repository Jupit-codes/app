import Home from '../container/Home'
import About from '../container/Aboutus'
import Learn from '../container/Learn'
import Faq from '../container/Faq'
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
        path:'/',
        title:'Home | Jupit',
        component:Home,

    },
   

    
    
  
    
   
]

export default route;