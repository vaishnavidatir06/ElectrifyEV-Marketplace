"use client";



//import axios from 'axios';
import { signIn } from 'next-auth/react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AuthLogin() {
    const router = useRouter();
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        userId: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to validate email format
    const validateEmail = (email) => {
        // Regular expression for email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    const handleSignin = async (e) => {
        e.preventDefault();
        
        // Validate email format
        const isValidEmail = validateEmail(userData.email);
        if (!isValidEmail) {
            // Display error message if email format is invalid
            toast.error('Please enter a valid email address');
            return;
        }
        
        try {
            // Sign in using next-auth signIn function
            const result = await signIn('credentials', {
                redirect: false,
                email: userData.email,
                password: userData.password
            });
    
            if (result.error) {
                if (result.error === 'CredentialsSignin') {
                    // Handle invalid credentials error
                    toast.error('Invalid email or password');
                } else {
                    // Handle other sign-in errors
                    console.error('Sign-in error:', result.error);
                    toast.error('Error signing in. Please try again later');
                }
                return;
            }
    
            console.log('Sign-in successful:', result);
            // Redirect the user to the home page
	    toast.success('Sign-in successful');
            router.push('/'); // Replace this with your desired redirect URL
    
        } catch (error) {
            console.error('Error signing in:', error);
            // Handle sign-in error, display error message to the user
            toast.error('Error signing in. Please try again later');
        }
    };
    


    return (
        <>
            <section className="md:h-screen py-36 flex items-center relative overflow-hidden zoom-image">
                <div
                    style={{ backgroundImage: "url('/images/bg/b16.jpg')" }}
                    className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover">
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2"></div>
                <div className="container z-3">
                    <div className="flex justify-center">
                        <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-700 rounded-md">
                            <Link href="/"><Image src="/images/logo.png" className="mx-auto" alt="" width={64} height={64} /></Link>
                            <h5 className="my-6 text-xl font-semibold">Sign In</h5>
                            <form className="text-start" onSubmit={handleSignin}>
                                <div className="grid grid-cols-1">
                                    <div className="mb-4">
                                        <label className="font-medium" htmlFor="LoginEmail">Email Address</label>
                                        <input id="LoginEmail" type="email" className="form-input mt-3" placeholder="name@example.com" name="email" value={userData.email} onChange={handleInputChange} />
                                    </div>

                                    <div className="mb-4">
                                        <label className="font-medium" htmlFor="LoginPassword">Password</label>
                                        <input id="LoginPassword" type="password" className="form-input mt-3" placeholder="Password" name="password" value={userData.password} onChange={handleInputChange} />
                                    </div>

                                    <div className="mb-4">
                                        <button type="submit" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full"> Sign In</button>
                                    </div>

                                    <div className="text-center">
                                        <span className="text-slate-400 me-2">Don&#39;t have an account?</span> <Link href="/auth-signup" className="text-black dark:text-white font-bold">Sign Up</Link>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    );
}