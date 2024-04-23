import React from "react";
import Link from "next/link";
import Image from "next/image";
import Switcher from "../componants/switcher";
import CountDown from "../componants/countDown";

export default function Comingsoon() {

    return (
        <>
            <section className="md:h-screen py-36 flex items-center justify-center relative overflow-hidden zoom-image">
                <div
                    style={{ backgroundImage: "url('/images/bg/01.jpg')" }}
                    className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover"></div>
                    <div  className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2"></div>
                <div className="container-fluid relative z-3">
                    <div className="grid grid-cols-1">
                        <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                            <div className="text-center">
                                <Link href="/"><Image src="/images/logo-icon-64.png" className="mx-auto" alt="" width={64} height={64}/></Link>
                            </div>
                            <div className="title-heading text-center my-auto">
                                <h1 className="text-white mt-3 mb-6 md:text-5xl text-3xl font-bold">We Are Coming Soon...</h1>
                                <p className="text-white/70 text-lg max-w-xl mx-auto">A great plateform to buy, sell and rent your eVs</p>

                              <CountDown/>
                            </div>
                            <div className="text-center">
                                <p className="mb-0 text-slate-400">© {(new Date().getFullYear())}{" "} ElectrifyEVM. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link href="https://shreethemes.in/" target="_blank" className="text-reset">Trailique Infotech</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--end section --> */}
            <Switcher/>
           
        </>
    );

}
