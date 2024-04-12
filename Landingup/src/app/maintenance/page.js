import React from "react";
import Image from "next/image";
import Switcher from "../componants/switcher";
import CountdownTwo from "../componants/countdownTwo";

export default function Maintenance() {
   
    return (
        <>
            <section className="md:h-screen py-36 flex items-center justify-center relative overflow-hidden zoom-image">
                 <div
                    style={{ backgroundImage: "url('/images/bg/01.jpg')" }}
                    className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover"></div>
                <div  className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2"></div>
                <div className="container relative z-3 text-center">

                    <div className="grid grid-cols-1">
                    <Image src="/images/logo-icon-64.png" className="mx-auto" alt="" width={64} height={64}/>
                        <h1 className="text-white mb-6 mt-8 md:text-5xl text-3xl font-bold">We Are Back Soon...</h1>
                        <p className="text-white/70 text-lg max-w-xl mx-auto">A great platform to buy, sell and rent your eVs.</p>
                    </div>
                   <CountdownTwo/>
                    <div className="grid grid-cols-1 mt-8">
                        <div className="text-center subcribe-form">
                            <form className="relative mx-auto max-w-xl">
                                <input type="email" id="subemail" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border dark:border-gray-700" placeholder="Enter your email id.." />
                                <button type="submit" className="btn absolute top-[2px] end-[3px] h-[46px] bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-full">Subcribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--end section --> */}
            <Switcher/>
        </>
    );

}