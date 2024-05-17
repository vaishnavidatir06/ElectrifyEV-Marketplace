/* eslint-disable @next/next/no-img-element */
// Station1Page.js
"use client";
import React from "react";
import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import Switcher from "../componants/switcher";
import Link from "next/link";

const Station1Page = () => {
  return (
    <>
<Navbar />


<div className="container mx-auto pt-20 pb-12">
    <h1 className="text-4xl font-semibold mb-8 text-center text-green-600 mt-20">Would You Like to Swap the Battery?</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
        <Link href="/at-your-doorstep">
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-0 text-center transition duration-300 ease-in-out hover:bg-gray-200 w-full max-w-sm md:max-w-xs lg:max-w-none">
                <img src="/images/bg/bs1.jpeg" alt="At Your Doorstep Image" className="mx-auto mb-4 h-56 w-full" />
                <h2 className="text-xl font-semibold mb-4 text-gray-950 dark:text-gray-950">At your door step</h2>
                <p className="text-gray-600">Doorstep battery swap</p>
            </div>
        </Link>

        <Link href="/store">
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-0 text-center transition duration-300 ease-in-out hover:bg-gray-200 w-full max-w-sm md:max-w-xs lg:max-w-none">
                <img src="/images/bg/bs2.jpeg" alt="At Your Doorstep Image" className="mx-auto mb-4 h-56 w-full" />
                <h2 className="text-xl font-semibold mb-4 text-gray-950 dark:text-gray-950">Store</h2>
                <p className="text-gray-600">Visit our store to swap the battery.</p>
            </div>
        </Link>

        <Link href="/buy-battery">
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-0 text-center transition duration-300 ease-in-out hover:bg-gray-200 w-full max-w-sm md:max-w-xs lg:max-w-none">
                <img src="/images/bg/bs3.jpeg" alt="At Your Doorstep Image" className="mx-auto mb-4 h-56 w-full" />
                <h2 className="text-xl font-semibold mb-4 text-gray-950 dark:text-gray-950">Buy Battery</h2>
                <p className="text-gray-600">Purchase a new battery.</p>
            </div>
        </Link>

        <Link href="/replacement">
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-0 text-center transition duration-300 ease-in-out hover:bg-gray-200 w-full max-w-sm md:max-w-xs lg:max-w-none">
                <img src="/images/bg/bs4.jpeg" alt="At Your Doorstep Image" className="mx-auto mb-4 h-56 w-full" />
                <h2 className="text-xl font-semibold mb-4 text-gray-950 dark:text-gray-950">Replacement</h2>
                <p className="text-gray-600">Get the battery replaced.</p>
            </div>
        </Link>
    </div>
</div>
      <Footer />
      <Switcher />
    </>
  );
};

export default Station1Page;
