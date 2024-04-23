import React from "react";
import Link from "next/link";
import Image from "next/image";

import Switcher from "../components/switcher";
import BackToHome from "../components/backToHome";

export default function Login(){
    return(
        <>
        <section className="h-screen flex items-center justify-center relative overflow-hidden bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url('/images/01.jpeg')`}}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="container">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    <div className="relative overflow-hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                        <div className="p-6">
                            <Link href="">
                                <Image src='/images/logo.png' width={98} height={28} className="mx-auto block dark:hidden" alt=""/>
                                <Image src='/images/logo.png' width={98} height={28} className="mx-auto dark:block hidden" alt=""/>
                            </Link>
                            <h5 className="my-6 text-xl font-semibold">Login</h5>
                            <form className="text-start">
                                <div className="grid grid-cols-1">
                                    <div className="mb-4">
                                        <label className="font-medium" htmlFor="LoginEmail">Email Address:</label>
                                        <input id="LoginEmail" type="email" className="form-input mt-3" placeholder="name@example.com"/>
                                    </div>
    
                                    <div className="mb-4">
                                        <label className="font-medium" htmlFor="LoginPassword">Password:</label>
                                        <input id="LoginPassword" type="password" className="form-input mt-3" placeholder="Password:"/>
                                    </div>
    
                                    <div className="flex justify-between mb-4">
                                        <div className="flex items-center mb-0">
                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-green-600 focus:border-green-300 focus:ring focus:ring-offset-0 focus:ring-green-200 focus:ring-opacity-50 me-2" type="checkbox" value="" id="RememberMe"/>
                                            <label className="form-checkbox-label text-slate-400" htmlFor="RememberMe">Remember me</label>
                                        </div>
                                        <p className="text-slate-400 mb-0"><Link href="/reset-password" className="text-slate-400">Forgot password ?</Link></p>
                                    </div>
    
                                    <div className="mb-4">
                                        <Link href="" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md w-full">Login / Sign in</Link>
                                    </div>
    
                                    <div className="text-center">
                                        <span className="text-slate-400 me-2">Dont have an account ?</span> <Link href="/signup" className="text-black dark:text-white font-medium">Sign Up</Link>
                                    </div>
                                </div>
                            </form>
                        </div>

                       
                    </div>
                </div>
            </div>
        </section>
        <Switcher/>
        <BackToHome/>
        </>
    )
}