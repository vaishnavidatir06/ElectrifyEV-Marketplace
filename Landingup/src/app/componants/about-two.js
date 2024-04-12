'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";


export default function AboutTwo() {
    let [isOpen, setOpen] = useState(false)

    return (
        <>
            <div className="container lg:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-5">
                        <div className="relative">
                            <div className="p-5 shadow dark:shadow-gray-700 rounded-t-full bg-white dark:bg-slate-900">
                                <Image src='/images/hero.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="shadow-md rounded-t-full rounded-md" alt="" />
                            </div>
                            <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <Link href="#" scroll={false} onClick={() => setOpen(true)} className="lightbox h-20 w-20 rounded-full shadow-md dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-green-600">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-7">
                        <div className="lg:ms-4">
                            <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">Efficiency. Transparency. <br /> Control.</h4>
                            <p className="text-slate-400 max-w-xl">ElectrifyEVM developed a platform for the Electric Vehicles  marketplace that allows buyers and sellers to easily execute a transaction on their own. The platform drives efficiency, cost transparency and control into the hands of the consumers. ElectrifyEVM is Electric Vehicles Redefined.</p>

                            <div className="mt-4">
                                <Link href="#" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md mt-3">Learn More </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo
                isOpen={isOpen}
                channel="youtube"
                videoId="yba7hPeTSjk"
                onClose={() => setOpen(false)}
            />
        </>
    );

}
