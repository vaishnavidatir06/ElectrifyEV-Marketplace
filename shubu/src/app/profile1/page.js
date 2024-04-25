"use client";
import { useSession } from 'next-auth/react';
import Link from "next/link";
import { FiMail, FiPhone, FiUser, FiHome, FiEdit } from 'react-icons/fi'; // Import FiEdit icon
import { useEffect, useState } from "react";
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";

export default function Profile() {
    const { data: session, status } = useSession();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');

    useEffect(() => {
        if (session) {
            setName(session.user.name || '');
            setEmail(session.user.email || '');
            // Fetch address and mobile number from API or session data
            // and set them in the corresponding state variables
        }
    }, [session]);

    // Function to handle updating user details
    const handleUpdateDetails = async () => {
        console.log('Updating details...');
        try {
            // Send updated details to the server or API endpoint
            // You can use fetch or any library for making API calls
            // Example: 
            const response = await fetch('http://example.com/update-details', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    address,
                    mobile,
                }),
            });

            if (response.ok) {
                // Handle success (e.g., show a success message to the user)
                alert('Details updated successfully!');
            } else {
                throw new Error('Failed to update details');
            }
        } catch (error) {
            console.error('Error updating details:', error);
            // Handle error (e.g., display an error message to the user)
            alert('Failed to update details. Please try again.');
        }
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }
    
    if (!session) {
        return <div>Please log in to view this page</div>;
    }

    return (
        <>
            <Navbar/>
            <div className="container mx-auto px-10 py-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Personal Details */}
                    <div className="md:col-span-12 shadow mt-8">
                        <h2 className="text-xl font-semibold mb-4 flex items-center">
                            Personal Details
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-start relative">
                                <FiUser className="fea icon-ex-md text-slate-400 mt-1 me-3 w-6 h-6" />
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="text-slate-400 pl-10 pr-8 py-2 border rounded-md w-full" />
                                <FiEdit className="absolute top-1/2 right-2 transform -translate-y-1/2 w-6 h-6 text-gray-400 cursor-pointer" />
                            </div>
                            <div className="flex items-start relative">
                                <FiMail className="fea icon-ex-md text-slate-400 mt-1 me-3 w-6 h-6" />
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="text-slate-400 pl-10 pr-8 py-2 border rounded-md w-full" />
                                <FiEdit className="absolute top-1/2 right-2 transform -translate-y-1/2 w-6 h-6 text-gray-400 cursor-pointer" />
                            </div>
                            <div className="flex items-start relative">
                                <FiHome className="fea icon-ex-md text-slate-400 mt-1 me-3 w-6 h-6" />
                                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="text-slate-400 pl-10 pr-8 py-2 border rounded-md w-full" />
                                <FiEdit className="absolute top-1/2 right-2 transform -translate-y-1/2 w-6 h-6 text-gray-400 cursor-pointer" />
                            </div>
                            <div className="flex items-start relative">
                                <FiPhone className="fea icon-ex-md text-slate-400 mt-1 me-3 w-6 h-6" />
                                <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} className="text-slate-400 pl-10 pr-8 py-2 border rounded-md w-full" />
                                <FiEdit className="absolute top-1/2 right-2 transform -translate-y-1/2 w-6 h-6 text-gray-400 cursor-pointer" />
                            </div>
                        </div>
                        <div className='pt-10'>
                        <button onClick={handleUpdateDetails} className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full">Update Details</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Switcher />
        </>
    );
}
