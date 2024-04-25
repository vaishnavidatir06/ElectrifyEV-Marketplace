import React from "react";
import Link from "next/link";
import Navbar from '../componants/navbar'
import Footer from '../componants/footer'
import Switcher from "../componants/switcher";
import Feature from "../componants/feature";
import GetInTuch from "../componants/get-in-touch";



export default function RentYoureV(){
    return(
        <>
          <Navbar navClass="navbar-white" />
          <section
                style={{ backgroundImage: "url('/images/bg/b15.jpg')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Rent your eVs here!</h3>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="shape overflow-hidden z-1 text-white dark:text-white-900">
                    
                </div>
            </div>
            <section className="relative md:pb-24 pb-16">
            <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-4xl md:leading-normal text-2xl text-white-900 dark:text-white leading-normal font-semibold ">Would you like to Rent your eV?</h3>
                        <div className="flex justify-center"> {/* Add this wrapper div */}
                        <li className="sm:inline ps-1 mb-0 hidden">
                            <Link href="/rentEV" className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full">Rent Now</Link>
                        </li>
</div>

                    </div>

                    
                </div>
                <Feature />
                
               <GetInTuch/>
            </section>
            <Footer />
            <Switcher />
        </>
    )
}