// pages/wishlist.js
'use client';
import { useSession } from 'next-auth/react';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';


import {  FiMail, FiPhone,  FiUser, FiHome} from '../assets/icons/vander';



export default function Wishlist() {
    const { data: session, status } = useSession();
    const [wishlistItems, setWishlistItems] = useState([]);
    const router = useRouter();

    const fetchWishlist = async () => {
        try {
            // Check if session data is available
            if (session) {
                // Make a GET request to the server endpoint with user name or email as query parameter
                const response = await fetch(`http://51.79.225.217:5000/wishlist?name=${session.user.name}&email=${session.user.email}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch wishlist');
                }
                const wishlistData = await response.json();
                // Set the fetched wishlist items in the state
                setWishlistItems(wishlistData);
            }
        } catch (error) {
            console.error('Error fetching wishlist:', error);
            // Handle error (e.g., display an error message to the user)
        }
    };

    useEffect(() => {
        fetchWishlist();
        if (status === 'loading') {
            // You can return a loading indicator here
        } else if (!session) {
            // Redirect the user to the login page if they are not logged in
            router.push('/auth-login');
        }
    }, [status, session]);

    return (
        <>
            <Navbar />
            <div className="md:col-span-9 ">
                <div className="p-10 mt-20 rounded-md shadow bg-white dark:bg-slate-900 shadow-md">
                    <h5 className="text-xl font-semibold">Wishlist</h5>
                    {wishlistItems.length > 0 ? (
                        <ul className="mt-4 space-y-2 shadow-md">
                            {wishlistItems.map((item, index) => (
                                <li key={index} className="bg-white rounded-md shadow-md p-4 mb-4">
                                    <span className="text-slate-400 block">{item.brand} - {item.model} - {item.variant}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No items in the wishlist.</p>
                    )}
                </div>
            </div>
            <Footer />
            <Switcher />
            <ToastContainer />
        </>
    );
}