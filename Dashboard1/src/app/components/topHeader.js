'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


import { FiMenu, FiBell, FiShoppingCart, FiDollarSign, FiTruck } from '../assets/icons/vander'

export default function TopHeader({setToggle, toggle}){
    let [ showCountry, setShowCountry ] = useState(false);
    let [ notifications, setNotifications] = useState(false);
    let [ user, setUser ] = useState(false);

    useEffect(()=>{
        const closeCountryModal = ()=>{
            setShowCountry(false)
        }
        const closeNotificationModal = ()=>{
            setNotifications(false)
        }
        document.addEventListener('mousedown', closeCountryModal);
        document.addEventListener('mousedown', closeNotificationModal);

        return()=>{
            document.removeEventListener('mousedown', closeCountryModal)
            document.removeEventListener('mousedown', closeNotificationModal)
        }
    },[])
    return(
        <div className="top-header">
            <div className="header-bar flex justify-between">
                <div className="flex items-center space-x-1">
                    
                    <Link href="#" className="xl:hidden block me-2">
                        <Image src='/images/logo-icon-32.png' width={32} height={32} className="md:hidden block" alt=""/>
                        <span className="md:block hidden">
                            <Image src='/images/logo-dark.png' width={98} height={28} className="inline-block dark:hidden" alt=""/>
                            <Image src='/images/logo-light.png' width={98} height={28} className="hidden dark:inline-block" alt=""/>
                        </span>
                    </Link>
                    
                    <Link id="close-sidebar" onClick={() =>setToggle(!toggle)} className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-md" href="#">
                        <FiMenu className="h-4 w-4"/>
                    </Link>
                    
                    <div className="ps-1.5">
                        <div className="form-icon relative sm:block hidden">
                            <i className="mdi mdi-magnify absolute top-1/2 -translate-y-1/2 mt-[1px] start-3"></i>
                            <input type="text" className="form-input w-56 ps-9 py-2 px-3 h-8 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 bg-white" name="s" id="searchItem" placeholder="Search..."/>
                        </div>
                    </div>
                    
                </div>

                <ul className="list-none mb-0 space-x-1">
                    
                    <li className="dropdown inline-block relative">
                        <button className="dropdown-toggle h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-md" type="button" onClick={() =>setShowCountry(true)}>
                            <Image src='/images/flags/usa.png' width={24} height={24} className="h-6 w-6 rounded-md" alt=""/>
                        </button>
                        
                        <div className={`${showCountry ? 'show' : 'hidden'} dropdown-menu absolute end-0 m-0 mt-4 z-10 w-36 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700`}>
                            <ul className="list-none py-2 text-start">
                                <li className="my-1">
                                    <Link href="" className="flex items-center text-[15px] font-medium py-1.5 px-4 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><Image src='/images/flags/germany.png' width={24} height={24} className="h-6 w-6 rounded-md me-2 shadow dark:shadow-gray-700" alt=""/> German</Link>
                                </li>
                                <li className="my-1">
                                    <Link href="" className="flex items-center text-[15px] font-medium py-1.5 px-4 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><Image src='/images/flags/germany.png' width={24} height={24} className="h-6 w-6 rounded-md me-2 shadow dark:shadow-gray-700" alt=""/> Italian</Link>
                                </li>
                                <li className="my-1">
                                    <Link href="" className="flex items-center text-[15px] font-medium py-1.5 px-4 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><Image src='/images/flags/russia.png' width={24} height={24} className="h-6 w-6 rounded-md me-2 shadow dark:shadow-gray-700" alt=""/> Russian</Link>
                                </li>
                                <li className="my-1">
                                    <Link href="" className="flex items-center text-[15px] font-medium py-1.5 px-4 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><Image src='/images/flags/spain.png' width={24} height={24} className="h-6 w-6 rounded-md me-2 shadow dark:shadow-gray-700" alt=""/> Spanish</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    
                    <li className="dropdown inline-block relative">
                        <button className="dropdown-toggle h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-md" type="button" onClick={()=>setNotifications(true)}>
                            <FiBell className="h-4 w-4"></FiBell>
                            <span className="absolute top-0 end-0 flex items-center justify-center bg-red-600 text-white text-[10px] font-bold rounded-md w-2 h-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-red-600 after:top-0 after:end-0 after:rounded-md after:animate-ping"></span>
                        </button>
                        
                        <div className={`${notifications ? 'show' : 'hidden'} dropdown-menu absolute end-0 m-0 mt-4 z-10 w-64 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700`}>
                            <span className="px-4 py-4 flex justify-between">
                                <span className="font-semibold">Notifications</span>
                                <span className="flex items-center justify-center bg-red-600/20 text-red-600 text-[10px] font-bold rounded-md w-5 max-h-5 ms-1">3</span>
                            </span>
                            <SimpleBar className="h-64">
                                <ul className="py-2 text-start h-64 border-t border-gray-100 dark:border-gray-800">
                                    <li>
                                        <Link href="#!" className="block font-medium py-1.5 px-4">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 rounded-md shadow shadow-green-600/10 dark:shadow-gray-700 bg-green-600/10 dark:bg-slate-800 text-green-600 dark:text-white flex items-center justify-center">
                                                    <FiShoppingCart className="h-4 w-4"/>
                                                </div>
                                                <div className="ms-2">
                                                    <span className="text-[15px] font-medium block">Order Complete</span>
                                                    <small className="text-slate-400">15 min ago</small>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!" className="block font-medium py-1.5 px-4">
                                            <div className="flex items-center">
                                                <Image src='/images/client/04.jpg' width={40} height={40} className="h-10 w-10 rounded-md shadow dark:shadow-gray-700" alt=""/>
                                                <div className="ms-2">
                                                    <span className="text-[15px] font-medium block"><span className="font-semibold">Message</span> from Luis</span>
                                                    <small className="text-slate-400">1 hour ago</small>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!" className="block font-medium py-1.5 px-4">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 rounded-md shadow shadow-green-600/10 dark:shadow-gray-700 bg-green-600/10 dark:bg-slate-800 text-green-600 dark:text-white flex items-center justify-center">
                                                    <FiDollarSign  data-feather="dollar-sign" className="h-4 w-4"/>
                                                </div>
                                                <div className="ms-2">
                                                    <span className="text-[15px] font-medium block"><span className="font-semibold">One Refund Request</span></span>
                                                    <small className="text-slate-400">2 hour ago</small>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!" className="block font-medium py-1.5 px-4">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 rounded-md shadow shadow-green-600/10 dark:shadow-gray-700 bg-green-600/10 dark:bg-slate-800 text-green-600 dark:text-white flex items-center justify-center">
                                                    <FiTruck  data-feather="truck" className="h-4 w-4"/>
                                                </div>
                                                <div className="ms-2">
                                                    <span className="text-[15px] font-medium block">Deliverd your Order</span>
                                                    <small className="text-slate-400">Yesterday</small>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!" className="block font-medium py-1.5 px-4">
                                            <div className="flex items-center">
                                                <Image src='/images/client/05.jpg' width={40} height={40} className="h-10 w-10 rounded-md shadow dark:shadow-gray-700" alt=""/>
                                                <div className="ms-2">
                                                    <span className="text-[15px] font-medium block"><span className="font-semibold">Cally</span> started following you</span>
                                                    <small className="text-slate-400">2 days ago</small>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </SimpleBar>
                        </div>
                    </li>
    
                    <li className="dropdown inline-block relative">
                        <button className="dropdown-toggle items-center" type="button" onClick={() =>setUser(!user)}>
                            <span className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-md"><Image src='/images/client/07.jpg' width={30} height={30} className="rounded-md" alt=""/></span>
                        </button>
                        <div className={`${user ? 'show' : 'hidden'} dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700`}>
                            <ul className="py-2 text-start">
                                <li>
                                    <Link href="/profile" onClick={() => setUser(false)} className="block py-1 px-4 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><i className="mdi mdi-account-outline me-2"></i>Profile</Link>
                                </li>
                                <li>
                                    <Link href="/chat" onClick={() => setUser(false)} className="block py-1 px-4 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><i className="mdi mdi-chat-outline me-2"></i>Chat</Link>
                                </li>
                                <li>
                                    <Link href="/profile-setting" onClick={() => setUser(false)} className="block py-1 px-4 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><i className="mdi mdi-cog-outline me-2"></i>Settings</Link>
                                </li>
                                <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                <li>
                                    <Link href="/lock-screen" onClick={() => setUser(false)} className="block py-1 px-4 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><i className="mdi mdi-lock-outline me-2"></i>Lockscreen</Link>
                                </li>
                                <li>
                                    <Link href="/login" onClick={() => setUser(false)} className="block py-1 px-4 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><i className="mdi mdi-logout me-2"></i>Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}