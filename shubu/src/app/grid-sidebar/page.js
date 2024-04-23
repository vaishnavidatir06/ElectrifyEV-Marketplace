import React from "react";
import Image from "next/image";
import Link from "next/link";

import {propertiesDetails} from "../data/data";
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";

import { LiaCompressArrowsAltSolid, LuBedDouble, LuBath, FiChevronLeft, FiChevronRight, FiSearch } from '../assets/icons/vander'

export default function GridSidebar(){
    return(
        <>
         <Navbar navClass="navbar-white"/>
          <section
                style={{ backgroundImage: "url('/images/bg/01.jpg')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Grid View Layout</h3>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-4 md:col-span-6">
                            <div className="shadow dark:shadow-gray-700 p-6 rounded-xl bg-white dark:bg-slate-900 sticky top-20">
                                <form>
                                    <div className="grid grid-cols-1 gap-3">
                                        <div>
                                            <label htmlFor="searchname" className="font-medium">Search Properties</label>
                                            <div className="relative mt-2">
                                                <FiSearch className="absolute top-[8px] start-3" width={18}/>
                                                <input name="search" id="searchname" type="text" className="form-input border border-slate-100 dark:border-slate-800 ps-10" placeholder="Search" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-medium">Categories</label>
                                            <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                                                <option value="re">Residential</option>
                                                <option value="la">Land</option>
                                                <option value="co">Commercial</option>
                                                <option value="ind">Industrial</option>
                                                <option value="inv">Investment</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="font-medium">Location</label>
                                            <select className="form-select form-input border border-slate-100 dark:border-slate-800 block w-full mt-1">
                                                <option value="NY">New York</option>
                                                <option value="MC">North Carolina</option>
                                                <option value="SC">South Carolina</option>
                                            </select>
                                        </div>

                                        <div>
                                            <input type="submit" className="btn bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md w-full" value="Apply Filter" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-8 md:col-span-6">
                            <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
                                    {propertiesDetails.map((item, index) => (
                                        <div key={index} className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                                            <div className="relative">
                                                <Image src={item.image} alt="" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}}/>

                                                <div className="absolute top-4 end-4">
                                                    <Link href="#" className="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"><i className="mdi mdi-heart mdi-18px"></i></Link>
                                                </div>
                                            </div>

                                            <div className="p-6">
                                                <div className="pb-6">
                                                    <Link href={`/property-detail/${item.id}`} className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{item.name}</Link>
                                                </div>

                                                <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                                                    <li className="flex items-center me-4">
                                                        <LiaCompressArrowsAltSolid width={20}  className="me-2 text-green-600"/>
                                                        <span>{item.square}sqf</span>
                                                    </li>

                                                    <li className="flex items-center me-4">
                                                        <LuBedDouble width={20}  className="me-2 text-green-600"/>
                                                        <span>{item.beds} Beds</span>
                                                    </li>

                                                    <li className="flex items-center">
                                                        <LuBath width={20}  className="me-2 text-green-600"/>
                                                        <span>{item.baths} Baths</span>
                                                    </li>
                                                </ul>

                                                <ul className="pt-6 flex justify-between items-center list-none">
                                                    <li>
                                                        <span className="text-slate-400">Price</span>
                                                        <p className="text-lg font-medium">${item.price}</p>
                                                    </li>

                                                    <li>
                                                        <span className="text-slate-400">Rating</span>
                                                        <ul className="text-lg font-medium text-amber-400 list-none">
                                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline ms-1"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline ms-1 text-black dark:text-white">{item.rating}(30)</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                                <div className="md:col-span-12 text-center">
                                    <nav>
                                        <ul className="inline-flex items-center -space-x-px">
                                            <li>
                                                <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
                                                    <FiChevronLeft className="text-[20px]"/>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">1</Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">2</Link>
                                            </li>
                                            <li>
                                                <Link href="#" aria-current="page" className="z-10 w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-white bg-green-600 shadow-sm dark:shadow-gray-700">3</Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">4</Link>
                                            </li>
                                            <li>
                                                <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
                                                    <FiChevronRight className="text-[20px]"/>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Switcher />
        </>
    )
}