import React from "react";
import Link from "next/link";
import Navbar from '../componants/navbar'
import Footer from '../componants/footer'
import Switcher from "../componants/switcher";
import Feature from "../componants/feature";
import GetInTuch from "../componants/get-in-touch";



export default function Sell(){
    return(
        <>
          <Navbar navClass="navbar-white" />
          <section
                style={{ backgroundImage: "url('/images/bg/b15.jpg')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Sell Faster, Save Thousands.</h3>
                    </div>
                </div>
            
            
            </section>
            <section className="relative md:pb-24 pb-16" style={{ marginTop: '-16px' }}>
                
                <div className="container lg:mt-24 mt-16" style={{ marginTop: '-16px' }}>
                    <div className="grid grid-cols-1 pt-5 text-center">
                        <h3 className="mb-4 md:text-5xl md:leading-normal text-2xl leading-normal font-semibold text-gray-800 dark:text-white">Would you like to sell your eV?</h3>
                        <div className="flex justify-center"> {/* Add this wrapper div */}
                        <Link href="/sell-form">
                            <button className="btn  bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full py-3 px-10 transition duration-300 ease-in-out">Sell</button>
                        </Link>
</div>

                        
                    </div>

                    
                </div>
                <Feature/>
               <GetInTuch/>
            </section>
            <Footer />
            <Switcher />
        </>
    )
}