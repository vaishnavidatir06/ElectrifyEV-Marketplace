'use client';
import { useSession } from 'next-auth/react';
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiHome, FiMail, FiPhone, FiUser } from '../assets/icons/vander';
import Footer from "../componants/footer";
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";



export default function Profile() {


    const { data: session, status } = useSession();
    const [wishlistItems, setWishlistItems] = useState([]);
    const [uniqueWishlistItems, setUniqueWishlistItems] = useState([]);
    const [userDetails, setUserDetails] = useState(null);
    useEffect(() => {
        // Fetch wishlist items and user details when the component mounts
        if (session) {
            fetchUserDetails();

        }
    }, [session]);


    const fetchUserDetails = async () => {
        try {
            if (!session) return; // Add a null check for session
            const response = await fetch(`http://51.79.225.217:5000/user?name=${session.user.name}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user details');
            }
            const userData = await response.json();
            const userId = userData._id; // Extract the user ID from userData
            setUserDetails(userData);
            // Now, you can use userId to fetch the wishlist items
            fetchWishlist(userId);
        } catch (error) {
            console.error('Error fetching user details:', error);
            // Handle error
        }
    };

    const fetchWishlist = async (userId) => {
        try {
            const response = await fetch(`http://51.79.225.217:5000/wishlist/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch wishlist');
            }
            const wishlistData = await response.json();
            setWishlistItems(wishlistData);
        } catch (error) {
            console.error('Error fetching wishlist:', error);
            // Handle error
        }
    };


    const deleteFromWishlist = async (userId, vehicleId) => {
        try {
            const response = await fetch(`http://51.79.225.217:5000/wishlist/${userId}/${vehicleId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete item from wishlist');
            }
            // Remove the item from the local state
            setWishlistItems(prevItems => prevItems.filter(item => item.vehicleDetails?._id !== vehicleId));
            
            // Show success toast
            toast.success('Item removed from wishlist successfully');
        } catch (error) {
            console.error('Error deleting item from wishlist:', error);
            // Show error toast
            toast.error('Failed to delete item from wishlist');
        }
    };

    useEffect(() => {
        const fetchVehicleDetails = async () => {
            const promises = wishlistItems.map(async (item) => {
                try {
                    const response = await fetch(`http://51.79.225.217:5001/api/vehicles/${item.vehicleId}`);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch vehicle details for item ${item._id}`);
                    }
                    const vehicleData = await response.json();
                    return { ...item, vehicleDetails: vehicleData };
                } catch (error) {
                    console.error(error.message);
                    return null;
                }
            });

            // Wait for all promises to resolve
            const resolvedItems = await Promise.all(promises);
            // Filter out null values (failed requests)
            const validItems = resolvedItems.filter((item) => item !== null);
            // Update state with fetched vehicle details
            setWishlistItems(validItems);
        };
        fetchVehicleDetails();


    }, [wishlistItems]);

    // Function to filter out duplicate items based on a unique identifier
    const filterUniqueItems = (items, uniqueIdentifier) => {
        const uniqueSet = new Set();
        return items.filter(item => {
            if (!uniqueSet.has(item[uniqueIdentifier])) {
                uniqueSet.add(item[uniqueIdentifier]);
                return true;
            }
            return false;
        });
    };

    useEffect(() => {
        // Call fetchWishlist function when the component mounts or when needed
        fetchUserDetails();
        fetchWishlist();
    }, [session]);


    // If session status is loading, display loading indicator
    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    // If user is not logged in, redirect to login page
    if (!session) {
        return <div>Please log in to view this page</div>;
    }



    

    // Render wishlist items
    const renderWishlistItems = () => {
        return wishlistItems.map((item, index) => (
            <li key={index} className="bg-white rounded-md shadow-md p-4 mb-4">
                <div className="grid grid-cols-3 gap-4">
                    {/* Front Image */}
                    <div className="col-span-1">
                        <img src={item.vehicleDetails?.frontImages[0]} alt="Front" className="w-full rounded-md shadow-md" />
                    </div>
                    {/* Vehicle Details */}
                    <div className="col-span-2">
                        <h3 className="text-lg font-semibold text-black">{item.vehicleDetails?.brand} - {item.vehicleDetails?.model} - {item.vehicleDetails?.variant}</h3>
                        
                        <p className="text-slate-400">Km Driven:  {item.vehicleDetails?.kilometresDriven}</p>
                        <p className="text-slate-400">Price:   {item.vehicleDetails?.price.value} </p>
                        <button onClick={() => deleteFromWishlist(item.userId, item.vehicleId)} className="btn bg-red-600 hover:bg-red-700 border-red-600 dark:border-red-600 text-white rounded-full space-x-4 mr-2">Remove </button>
                        <Link href={`/vehicle-detail?id=${item.vehicleDetails?._id}`} className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full space-x-4">View Details</Link>
                    </div>
                </div>
            </li>
        ));
    };


    return (
        <>
            <Navbar />
            <div className="container mx-auto px-10 py-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    
                    {/* Wishlist */}
                    <div className="md:col-span-9 ">
                        
                        <div className="container p-4 md:p-10 mt-20 rounded-md shadow bg-white dark:bg-slate-900 shadow-md ml-40">
                            <h5 className="text-xl font-semibold">Wishlist</h5>
                            <ul className="mt-4 space-y-2">
                                {renderWishlistItems()}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
            <Switcher />
            <ToastContainer />
        </>
    );
}





