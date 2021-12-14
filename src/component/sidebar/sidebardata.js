import React, { useEffect, useState } from "react";

import {MdDashboard} from 'react-icons/md'
import {MdOutlineHistory} from 'react-icons/md'
import {MdSettings} from 'react-icons/md'
import {MdAccountBalanceWallet} from 'react-icons/md'
import {MdOutlineLogout} from 'react-icons/md'
import {FaBusinessTime} from 'react-icons/fa'
import {MdOutlineNotifications} from 'react-icons/md'


export const sidebardata=[
    {
        title:'Dashboard',
        check:'dashboard',
        Icon:<MdDashboard size={20} color="#cecece"/>,
        path:'/client',
        cname:'nav-link'
    },
    {
        title:'Wallets',
        check:'wallet',
        Icon:<MdAccountBalanceWallet  size={20} color="#cecece"/>,
        path:'/wallet',
        cname:'nav-link'
    },
    {
        title:'KYC',
        check:'kyc',
        Icon:<FaBusinessTime  size={20} color="#cecece"/>,
        path:'/kyc',
        cname:'nav-link'
    },
    {
        title:'Transaction',
        check:'kyc',
        Icon:<MdOutlineHistory  size={20} color="#cecece"/>,
        path:'/kyc',
        cname:'nav-link'
    },
    {
        title:'Settings',
        check:'settings',
        Icon:<MdSettings  size={20} color="#cecece"/>,
        path:'/settings',
        cname:'nav-link'
    },
    {
        title:'Notification',
        check:'notification',
        Icon:<MdOutlineNotifications size={20} color="#cecece" />,
        path:'/notification',
        cname:'nav-link'
    },
    {
        title:'Logout',
        check:'logout',
        Icon:<MdOutlineLogout  size={20} color="#cecece"/>,
        path:'/settings',
        cname:'nav-link'
    },
]