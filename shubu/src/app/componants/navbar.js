'use client'
import { getSession, useSession } from "next-auth/react"; // Using new methods for session managment
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { User } from 'react-feather';
import { FiBell, FiShoppingCart } from 'react-icons/fi';


export default function Navbar(props) {
    let { navClass, topnavClass } = props;

    let [topNavbar, setTopNavBar] = useState(false);
    let [manu, setManu] = useState('');
    let [subManu, setSubManu] = useState('');
    let [isOpen, setIsOpen] = useState(true);
    const [notifications, setNotifications] = useState(false);
    const { data: session, status } = useSession(); // useSession hook to access session

    let current = usePathname();

    useEffect(() => {
        // Define an asynchronous function inside useEffect
        async function fetchData() {
            setManu(current);
            setSubManu(current);

            function windowScroll() {
                setTopNavBar(window.scrollY >= 50)
            }

            window.addEventListener('scroll', windowScroll);
            window.scrollTo(0, 0);
            // Call the asynchronous function inside useEffect
            await checkSession();
            return () => {
                window.removeEventListener('scroll', windowScroll)
                };
           

            
        }
        fetchData();

        // Call the asynchronous function immediately
        

         
    }, [current]);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
        if (document.getElementById("navigation")) {
        const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
        anchorArray.forEach(element => {
            element.addEventListener('click', (elem) => {
                const target = elem.target.getAttribute("href");
                if (target !== "") {
                    if (elem.target.nextElementSibling) {
                        var submenu = elem.target.nextElementSibling.nextElementSibling;
                        submenu.classList.toggle('open');
                    }
                }
            });
        });
    };
}

    async function checkSession() {
        const session = await getSession(); // Fetch session data from the server
    }


    

    const closeNotification = () => {
        setNotifications(false);
    };


    const handleOutsideClick = useCallback((e) => {
        if (!document.getElementById('notificationDropdown').contains(e.target)) {
            closeNotification();
        }
    }, []);

    useEffect(() => {
        if (notifications) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [notifications, handleOutsideClick]);

    return (
        <React.Fragment>
            <nav id="topnav" className={`${topNavbar ? 'nav-sticky' : ''} ${topnavClass ? topnavClass : ''} defaultscroll is-sticky`} >
                <div className={`${topnavClass !== '' && topnavClass !== undefined ? 'container-fluid md:px-8 px-3' : 'container'}`}>
                    {navClass === '' || navClass === undefined ?
                        <Link className="logo" href="../">
                            <Image src="/images/ev logo.png" className="inline-block dark:hidden" alt="" width={70} height={10} />
                            <Image src="/images/ev logo.png" className="hidden dark:inline-block" alt="" width={70} height={10} />
                            <span className="font-bold"style={{ fontFamily: 'YourCustomFont, Display',color:'green-400' }}>Electrify eV</span>
                        </Link> :
                        <Link className="logo" href="../">
                           
                                <Image src="/images/ev logo.png" className="l-dark" alt="" width={70} height={10} />
                                <Image src="/images/ev logo.png" className="l-light" alt="" width={70} height={10} />
                                <span className="font-bold"style={{ fontFamily: 'YourCustomFont, Display' ,color:'green-400'}}>Electrify eV</span>
                            
                        </Link>
                    }
                    <div className="menu-extras">
                        <div className="menu-item">
                            <Link href="#" className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <ul className="buy-button list-none mb-0 space-x-4">
                        
                        <li className="dropdown inline-block relative" id="notificationDropdown">
                            <button className="dropdown-toggle h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-md" type="button" onClick={() => setNotifications(true)}>
                                <FiBell className="h-4 w-4"></FiBell>
                                <span className="absolute top-0 end-0 flex items-center justify-center bg-red-600 text-white text-[10px] font-bold rounded-md w-2 h-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-red-600 after:top-0 after:end-0 after:rounded-md after:animate-ping"></span>
                            </button>
                            <div className={`${notifications ? 'show' : 'hidden'} dropdown-menu absolute end-0 m-0 mt-4 z-10 w-64 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700`}>
                                <span className="px-4 py-4 flex justify-between">
                                    <span className="font-semibold">Notifications</span>
                                    <span className="flex items-center justify-center bg-red-600/20 text-red-600 text-[10px] font-bold rounded-md w-5 max-h-5 ms-1">3</span>
                                </span>
                                <ul className="py-2 text-start h-64 border-t border-gray-100 dark:border-gray-800">
                                    <li>
                                        <Link href="#!" className="block font-medium py-1.5 px-4">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 rounded-md shadow shadow-green-600/10 dark:shadow-gray-700 bg-green-600/10 dark:bg-slate-800 text-green-600 dark:text-white flex items-center justify-center">
                                                    <FiShoppingCart className="h-4 w-4" />
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
                                                <Image src='/images/client/04.jpg' width={40} height={40} className="h-10 w-10 rounded-md shadow dark:shadow-gray-700" alt="" />
                                                <div className="ms-2">
                                                    <span className="text-[15px] font-medium block"><span className="font-semibold">Message</span> from Luis</span>
                                                    <small className="text-slate-400">1 hour ago</small>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>


                    <div id="navigation" className={`${isOpen === true ? 'hidden' : 'block'}`} >
                        <ul className={`navigation-menu  ${navClass === '' || navClass === undefined ? '' : 'nav-light'}   ${topnavClass !== '' && topnavClass !== undefined ? 'justify-center' : 'justify-end'}`}>
                            
                        < li className={["/buy", "/Car", "/cycle", "/scooter", "/auto", "/drone", "/tractor","/vehicle-detail"].includes(manu) ? 'active' : ''} style={{ fontFamily: 'YourCustomFont, Display' }}>
    < Link href="/buy" className="sub-menu-item"style={{ fontFamily: 'YourCustomFont, Display',fontWeight: 'bold' }}>Buy</Link>
</li>
< li className={["/sell", "/sell-form"].includes(manu) ? 'active' : '' } style={{ fontFamily: 'YourCustomFont, Display' }}>
    <Link href="/sell" className="sub-menu-item" style={{ fontFamily: 'YourCustomFont, Display',fontWeight: 'bold' }} >Sell</Link>
</li>
                            < li className={`has-submenu parent-parent-menu-item ${["/grid", "/grid-sidebar", "/rent", "/list", "/list-sidebar", "/list-map", "/services", "/batteryswap", "/BatteryCharge", "/carwash","/rentals","/rent-map","/car-service","/scooter-service","/drone-service","/tractor-service","/auto-service","/station1"].includes(manu) ? 'active' : ''}`}>
                                <Link href="#" onClick={() => { setSubManu(subManu === "/list-item" ? "" : "/list-item "? 'active' : '') }}style={{ fontFamily: 'YourCustomFont, Display',fontWeight: 'bold' }}>Services</Link><span className="menu-arrow"></span>
                                < ul className={`submenu ${["/grid", "/grid-sidebar", "/rent", "/list", "/services", "/batteryswap", "/BatteryCharge", "/carwash", "/grid-item", "/list-view-item", "/property-item"].includes(subManu) ? 'open' : ''}`}>
                                <li className={`has-submenu parent-menu-item ${["/rent"].includes(manu) ? 'active' : ''}`} style={{ fontFamily: 'YourCustomFont, Display' }}><Link href="/rent" style={{ fontFamily: 'YourCustomFont, Display',fontWeight: 'bold' }} onClick={() => { setSubManu(subManu === "/list-view-item" ? "" : "/list-view-item") }}> Rentals</Link></li>
                                   
                                    <li className={`has-submenu parent-menu-item ${["/list", "/list-sidebar", "/list-map"].includes(manu) ? 'active' : ''}`} style={{ fontFamily: 'YourCustomFont, Display' }}><Link href="/list" style={{ fontFamily: 'YourCustomFont, Display',fontWeight: 'bold' }} onClick={() => { setSubManu(subManu === "/list-view-item" ? "" : "/list-view-item") }}> Rent Your eV </Link></li>
                                    <li className={`has-submenu parent-menu-item ${["/services"].includes(manu) ? 'active' : ''}`} style={{ fontFamily: 'YourCustomFont, Display' }}><Link href="/services" style={{ fontFamily: 'YourCustomFont, Display',fontWeight: 'bold' }} onClick={() => { setSubManu(subManu === "/list-view-item" ? "" : "/list-view-item") }}> Emergency Assistance</Link></li>
                                    
                                    <li className={`has-submenu parent-menu-item ${["/batteryswap"].includes(manu) ? 'active' : ''}`} style={{ fontFamily: 'YourCustomFont, Display' }}><Link href="#"style={{ fontFamily: 'YourCustomFont, Display',fontWeight: 'bold' }} onClick={() => { setSubManu(subManu === "/property-item" ? "" : "/property-item") }}> eVServices </Link><span className="submenu-arrow"></span>
                                        <ul className={`submenu ${["/batteryswap", "/services", "/carwash", "/BatteryCharge", "/Emergencyassistance", "/Repair"].includes(subManu) ? 'open' : ''}`}>
                                            <li className={manu === "/batteryswap" ? 'active' : ''} style={{ fontFamily: 'YourCustomFont, Display' }}><Link href="/batteryswap" className="sub-menu-item"style={{ fontFamily: 'YourCustomFont, Display',fontWeight: 'bold' }}>Battery Swap</Link></li>
                                            <li className={manu === "/BatteryCharge" ? 'active' : ''} style={{ fontFamily: 'YourCustomFont, Display' }}><Link href="/BatteryCharge" className="sub-menu-item"style={{ fontFamily: 'YourCustomFont, Display',fontWeight: 'bold' }}>Battery Recharge</Link></li>
                                            <li className={manu === "/carwash" ? 'active' : ''} style={{ fontFamily: 'YourCustomFont, Display' }}><Link href="/carwash" className="sub-menu-item"style={{ fontFamily: 'YourCustomFont, Display',fontWeight: 'bold' }}>Electrify Wash</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            
                            <li className={manu === "/contact" ? "active" : ''} style={{ fontFamily: 'YourCustomFont, Display' }}><Link href="/contact" className="sub-menu-item" style={{ fontFamily: 'YourCustomFont, Display',fontWeight: 'bold' }}>Contact</Link></li>
                            
                            {/*<li className={`has-submenu parent-parent-menu-item ${["/Wishlist", "/settings"].includes(manu) ? 'active' : ''}`}>
                                <Link href="#" onClick={() => { setSubManu(subManu === "/list-item" ? "" : "/list-item") }} style={{ fontFamily: 'YourCustomFont, Display' }}>Account</Link><span className="menu-arrow"></span>
                                <ul className={`submenu ${["/Wishlist", "/settings" ].includes(subManu) ? 'open' : ''}`}>
                                    <li className="has-submenu parent-menu-item">
                                     {session ? ( 
                                         <> 
                                    <Link href="settings" className="has-submenu parent-menu-item"> Settings </Link>
                                       </>
                                       ) : null}
                                     </li>
                                    <li className="has-submenu parent-menu-item" style={{ fontFamily: 'YourCustomFont, Display' }}><Link href="Wishlist">Wishlist</Link></li>
                                    <li className="has-submenu parent-menu-item">
                                     {session ? (
                                     <>
                                     <Link href="/api/auth/signout?callbackUrl=/"  className="has-submenu parent-menu-item">Logout</Link>
                                     </>
                                      ) : null}
                                    </li>
                                </ul>
                            </li>*/}
                         {session ? (
    <>


        <li className={`has-submenu parent-parent-menu-item ${["/Wishlist", "/settings","/profile"].includes(manu) ? 'active' : ''}`}>
            <Link href="#" onClick={() => { setSubManu(subManu === "/list-item" ? "" : "/list-item") }}style={{ fontFamily: 'YourCustomFont, Display',fontWeight: 'bold' }}> Account </Link> <span className="menu-arrow"></span>
            <ul className={`submenu ${["/Wishlist", "/settings" ].includes(subManu) ? 'open' : ''}`}>
                <li className="has-submenu parent-menu-item" >
                    {session ? ( 
                        <> 
                           <li className={`has-submenu parent-menu-item ${["/profile"].includes(manu) ? 'active' : ''}`} style={{ fontFamily: 'YourCustomFont, Display' }}><Link href="/profile" style={{ fontFamily: 'YourCustomFont, Display',fontWeight: 'bold' }} onClick={() => { setSubManu(subManu === "/list-view-item" ? "" : "/list-view-item") }}> My Account</Link></li>
                        </>
                    ) : null}
                </li>
                <li className={`has-submenu parent-menu-item ${["/Wishlist"].includes(manu) ? 'active' : ''}`} style={{ fontFamily: 'YourCustomFont, Display' }}><Link href="/Wishlist" style={{ fontFamily: 'YourCustomFont, Display',fontWeight: 'bold' }} onClick={() => { setSubManu(subManu === "/list-view-item" ? "" : "/list-view-item") }}> Wishlist</Link></li>
              
                <li className="has-submenu parent-menu-item">
                    {session ? (
                        <>
                            <Link href="/api/auth/signout?callbackUrl=/"  className="has-submenu parent-menu-item" style={{ fontFamily: 'YourCustomFont, Display',fontWeight: 'bold' }}>Logout</Link>
                        </>
                    ) : null}
                </li>
            </ul>
        </li>
    </>
) : (
    <li className="inline mb-0">
        <Link href="/auth-login"  className="btn btn-icon  border-green-600 dark:border-green-600 text-green-600 dark:text-white rounded-full">
            <User className="h-6 w-6" />
        </Link>
    </li>
)}


                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}
