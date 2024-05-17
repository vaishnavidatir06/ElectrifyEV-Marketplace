import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMapPin , FiMail , FiPhone , FiDribbble , FiLinkedin , FiFacebook , FiTwitter , FiInstagram, BsPencil, FiChevronRight, RiBehanceFill, FiShoppingCart, FaXTwitter,FiYoutube } from '../assets/icons/vander';

export default function Footer(){
    return (
        <>
            <footer className="relative bg-slate-900 dark:bg-slate-800 mt-24">
                <div className="container">
                    <div className="grid grid-cols-1 pt-20">
                        <div className="relative py-16">
                            {/* <!-- Subscribe --> */}
                            <div className="relative w-full">
                                
                                   

                                    <div className="absolute -bottom-5 -end-5">
                                        <BsPencil className=" text-black/5 dark:text-white/5 rtl:-rotate-90" style={{width:'150px', height:'150px'}}/> 
                                    </div>
                                

                                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] -mt-24">
                                    <div className="lg:col-span-4 md:col-span-12">
                                        <Link href="#" className="text-[22px] focus:outline-none">
                                            <Image src="/images/ev logo.png" alt="" width={85} height={20}/>
                                            
                                        </Link> 
                                        <p className="mt-6 text-gray-300" style={{ fontFamily: 'YourCustomFont, Display' }}>Drive eV. Drive Evolution. Drive the Change.</p>

                                    </div>

                                    <div className="lg:col-span-2 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold" style={{ fontFamily: 'YourCustomFont, Display' }}>Company</h5>
                                        <ul className="list-none footer-list mt-6">
                                            <li><Link href="/aboutus" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center" ><FiChevronRight width={18} className="me-1"/> <span style={{ fontFamily: 'YourCustomFont, Display' }}>About Us</span> </Link></li>
                                            
                                        </ul>
                                    </div>

                                    <div className="lg:col-span-3 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold" style={{ fontFamily: 'YourCustomFont, Display' }}>Useful Links</h5>
                                        <ul className="list-none footer-list mt-6">
                                              <li><Link href="/terms" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><FiChevronRight width={18} className="me-1"/> <span style={{ fontFamily: 'YourCustomFont, Display' }}>Terms & Services</span> </Link></li>
                                              <li className="mt-[10px]"><Link href="/privacy" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><FiChevronRight width={18} className="me-1"/> <span style={{ fontFamily: 'YourCustomFont, Display' }}>Privacy Policy</span> </Link></li>
                                              
                                              <li className="mt-[10px]"><Link href="/contact" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out flex items-center"><FiChevronRight width={18} className="me-1"/> <span style={{ fontFamily: 'YourCustomFont, Display' }}> Contact</span> </Link></li>
                                        </ul>
                                    </div>

                                    <div className="lg:col-span-3 md:col-span-4">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold" style={{ fontFamily: 'YourCustomFont, Display' }}>Contact Details</h5>
                                        <div className="flex mt-6">
                                            <FiMapPin  className="w-5 h-5 text-green-600 me-3"></FiMapPin >
                                            <div className="">
                                                <h6 className="text-gray-300 mb-2" style={{ fontFamily: 'YourCustomFont, Display' }}>Suratwala Mark Plazzo,<br /> Office No. 517,<br /> Hinjewadi phase 1,  <br /> Pune-411057, <br /> Maharastra, India.</h6>
                                                <Link href="https://maps.app.goo.gl/E9xYG9Hq69tVsQty5" data-type="iframe" className="text-green-600 hover:text-green-700 duration-500 ease-in-out lightbox" style={{ fontFamily: 'YourCustomFont, Display' }}>View on Google map</Link>
                                            </div>
                                        </div>

                                        <div className="flex mt-6">
                                            <FiMail className="w-5 h-5 text-green-600 me-3"></FiMail>
                                            <div className="">
                                                <Link href="mailto:info@trailique.com" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out" style={{ fontFamily: 'YourCustomFont, Display' }}>info@trailique.com</Link>
                                            </div>
                                        </div>

                                        <div className="flex mt-6">
                                            <FiPhone  className="w-5 h-5 text-green-600 me-3"></FiPhone >
                                            <div className="">
                                                <Link href="tel:+1 (408)-493-2090" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">+1 (408)-493-2090</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Subscribe --> */}
                        </div>
                    </div>
                </div>
                <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
                    <div className="container text-center">
                        <div className="grid md:grid-cols-2 items-center gap-6">
                            <div className="md:text-start text-center">
                                <p className="mb-0 text-gray-300" style={{ fontFamily: 'YourCustomFont, Display' }}>©{(new Date().getFullYear())}{" "} ElectrifyEVM. Design & Developed by <Link href="https://shreethemes.in/" target="_blank" className="text-reset" style={{ fontFamily: 'YourCustomFont, Display' }}>Trailique Infotech</Link>.</p>
                            </div>

                            <ul className="list-none md:text-end text-center">

                                <li className="inline ms-1"><Link href="https://www.linkedin.com/company/trailiqueinfotech/mycompany/" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiLinkedin  className="h-4 w-4"></FiLinkedin></Link></li>
                                <li className="inline ms-1"><Link href="https://www.facebook.com/people/Trailique-Infotech/pfbid0VQnJUNB2oEceRUcKvkfWdyE3LGwBoqWamSaLWn5CRKen2FWi8C7baXbXpZjM3Amal/" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiFacebook className="h-4 w-4"></FiFacebook></Link></li>
                                <li className="inline ms-1"><Link href="https://www.youtube.com/channel/UCCORoavk-ADmBL6-dPn13JA" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiYoutube className="h-4 w-4"></FiYoutube></Link></li>
                                <li className="inline ms-1"><Link href="https://twitter.com/TrailiqueInfo" target="_blank" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FaXTwitter className="h-4 w-4"></FaXTwitter></Link></li>
                                <li className="inline ms-1"><Link href="mailto:info@trailique.com" className="btn btn-icon btn-sm text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600"><FiMail className="h-4 w-4"></FiMail></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}