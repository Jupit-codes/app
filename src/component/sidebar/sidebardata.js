import React, { useEffect, useState } from "react";

import {MdDashboard} from 'react-icons/md'
import {GrTransaction} from 'react-icons/gr'
import {GrUserSettings} from 'react-icons/gr'
import {BiWallet} from 'react-icons/bi'
import {FiLogOut} from 'react-icons/fi'
import {FaBusinessTime} from 'react-icons/fa'
import {GrNotification} from 'react-icons/gr'

export const sidebardata=[
    {
        title:'Dashboard',
        check:'dashboard',
        Icon:<MdDashboard size={20}/>,
        path:'/client',
        cname:'nav-link'
    },
    {
        title:'Wallets',
        check:'wallet',
        Icon:<BiWallet  size={20}/>,
        path:'/wallet',
        cname:'nav-link'
    },
    {
        title:'KYC',
        check:'kyc',
        Icon:<FaBusinessTime  size={20}/>,
        path:'/kyc',
        cname:'nav-link'
    },
    {
        title:'Transaction',
        check:'kyc',
        Icon:<GrTransaction  size={20}/>,
        path:'/kyc',
        cname:'nav-link'
    },
    {
        title:'Settings',
        check:'settings',
        Icon:<GrUserSettings  size={20}/>,
        path:'/settings',
        cname:'nav-link'
    },
    {
        title:'Notification',
        check:'notification',
        Icon:<GrNotification size={20}/>,
        path:'/notification',
        cname:'nav-link'
    },
    {
        title:'Logout',
        check:'logout',
        Icon:<FiLogOut  size={20}/>,
        path:'/settings',
        cname:'nav-link'
    },
]