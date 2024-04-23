import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiFacebook, FiInstagram, FiLinkedin } from "../assets/icons/vander";
import { teamData } from "../data/data";

export default function Team() {
    return (
        <div>
            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white-900 dark:text-white">Meet The Management Team</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">A great platform to buy, sell and rent your eV Vehicles.</p>
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    {teamData.map((item, index) => {
                        return (
                            <div className="lg:col-span-12 md:col-span-13" key={index}>
                                <div className="group text-center">
                                    <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden flex justify-center items-center"> {/* Center alignment */}
                                        <Image src={item.images} className="" alt="" width={208} height={208} priority />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                        <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                            <li className="inline ms-1"><Link href="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><FiFacebook className="h-4 w-4" /></Link></li>
                                            <li className="inline ms-1"><Link href="#" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><FiInstagram className="h-4 w-4" /></Link></li>
                                            <li className="inline ms-1"><Link href="https://www.linkedin.com/company/trailiqueinfotech/" className="btn btn-icon btn-sm rounded-full border border-green-600 bg-green-600 hover:border-green-600 hover:bg-green-600 text-white"><FiLinkedin className="h-4 w-4" /></Link></li>
                                        </ul>
                                    </div>

                                    <div className="content mt-3">
                                        <Link href="#" className="text-xl font-medium hover:text-green-600 transition-all duration-500 ease-in-out text-white-900 dark:text-white">{item.name}</Link>
                                        <p className="text-slate-400 dark:text-slate-400">{item.designation}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
