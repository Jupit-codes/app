import Home from '../container/Home'
import About from '../container/Aboutus'
import Learn from '../container/Learn'
import Faq from '../container/Faq'
import Contact from '../container/Contact'
import Login from '../container/Login'
import Register from '../container/Register'
import Dashboard from '../container/Dashboard'
import Test from '../container/Test'
import KYC from '../container/Kyc'
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
        path:'/client/kyc',
        title:'Client KYC | Jupit',
        component:Dashboard,

    },
    {
        path:'/client/transactions-history',
        title:'Client Transactions | Jupit',
        component:Dashboard,

    },
    {
        path:'/client/wallet',
        title:'Client Wallet | Jupit',
        component:Dashboard,

    },
    {
        path:'/client/settings',
        title:'Client Settings | Jupit',
        component:Dashboard,

    },
    {
        path:'/client/notification',
        title:'Client Notification | Jupit',
        component:Dashboard,

    },
    {
        path:'/client/logout',
        title:'Client Logout | Jupit',
        component:Dashboard,

    },
    {
        path:'/client',
        title:'Client Dashboard | Jupit',
        component:Dashboard,

    },
    {
        path:'/test',
        title:'Client Dashboard | Jupit',
        component:Test,

    },
    {
        path:'/',
        title:'Home | Jupit',
        component:Home,

    },
 
   
 
   
]

export default route;