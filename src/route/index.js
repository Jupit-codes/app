
// import Test from '../container/test'
import Login from '../container/Login'
import Register from '../container/Register'
import Dashboard from '../container/Dashboard'
// import Exchange from '../container/Exchange'

// import KYC from '../container/Kyc'
// import Send from '../container/Send'
// import ChangePassword from '../container/Changepassword'
// import Reset from '../container/Forgetpassword'
const route = [
    {
        path:'/client/signin',
        title:'Client SignIn | Jupit',
        isAuthenticated:false,
        component:Login,

    },
    {
        path:'/client/signup',
        title:'Client SignUp | Jupit',
        isAuthenticated:false,
        component:Register,

    },

    // {
    //     path:'/test',
    //     title:'Test| Jupit',
    //     isAuthenticated:false,
    //     component:Test,

    // },
    // {
    //     path:'/user/changepassword/:codeid/:userid',
    //     title:'Reset Password | Jupit',
    //     isAuthenticated:false,
    //     component:ChangePassword,

    // },
    
    // {
    //     path:'/reset/password',
    //     title:'Client Reset | Jupit',
    //     isAuthenticated:false,
    //     component:Reset,
    // },
    
    // {
    //     path:'/client/signup',
    //     title:'Client SignUp | Jupit',
    //     isAuthenticated:false,
    //     component:Register,

    // },
  
    // {
    //     path:'/client/transactions-history',
    //     title:'Client Transactions | Jupit',
    //     isAuthenticated:true,
    //     component:Dashboard,

    // },
    // {
    //     path:'/client/wallet',
    //     title:'Client Wallet | Jupit',
    //     isAuthenticated:true,
    //     component:Dashboard,

    // },
    // {
    //     path:'/client/settings',
    //     title:'Client Settings | Jupit',
    //     isAuthenticated:true,
    //     component:Dashboard,

    // },
    // {
    //     path:'/client/notification',
    //     title:'Client Notification | Jupit',
    //     isAuthenticated:true,
    //     component:Dashboard,

    // },
    // {
    //     path:'/client/logout',
    //     title:'Client Logout | Jupit',
    //     isAuthenticated:true,
    //     component:Dashboard,

    // },
    // {
    //     path:'/client/sendbtc',
    //     title:'Client Dashboard | Jupit',
    //     isAuthenticated:true,
    //     component:Dashboard,

    // },
    // {
    //     path:'/client/sendusdt',
    //     title:'Client Dashboard | Jupit',
    //     isAuthenticated:true,
    //     component:Dashboard,

    // },
    // {
    //     path:'/client/tradegiftcard',
    //     title:'Client Dashboard | Jupit',
    //     isAuthenticated:true,
    //     component:Dashboard,

    // },
    // {
    //     path:'/client/buybtc',
    //     title:'Client Dashboard | Jupit',
    //     isAuthenticated:true,
    //     component:Dashboard,

    // },
    // {
    //     path:'/client/buyusdt',
    //     title:'Client Dashboard | Jupit',
    //     isAuthenticated:true,
    //     component:Dashboard,

    // },
    // {
    //     path:'/client/sellbtc',
    //     title:'Client Dashboard | Jupit',
    //     isAuthenticated:true,
    //     component:Dashboard,

    // },
    // {
    //     path:'/client/withdrawal',
    //     title:'Client Dashboard | Jupit',
    //     isAuthenticated:true,
    //     component:Dashboard,

    // },
    // {
    //     path:'/client/exchange',
    //     title:'Client Dashboard | Jupit',
    //     isAuthenticated:true,
    //     component:Dashboard,

    // },
    // {
    //     path:'/client/sellusdt',
    //     title:'Client Dashboard | Jupit',
    //     isAuthenticated:true,
    //     component:Dashboard,

    // },
    {
        path:'/client',
        title:'Client Dashboard | Jupit',
        isAuthenticated:true,
        component:Dashboard,

    },

    
    {
        path:'/',
        title:'Client SignIn | Jupit',
        isAuthenticated:false,
        component:Login,
    },
    
    
   
]

export default route;