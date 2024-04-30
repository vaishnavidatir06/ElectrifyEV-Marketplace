// pages/BuyPage.js
'use client'
import React from "react";
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";

const BuyPage = () => {
  const handleBuyOption = (option) => {
    switch (option) {
      case 'Car':
        window.location.href = '/Car';
        break;
      case 'cycle':
        window.location.href = '/cycle';
        break;
      case 'Scooter':
        window.location.href = '/scooter';
        break;
      case 'Auto':
        window.location.href = '/auto';
        break;
      case 'Drone':
        window.location.href = '/drone';
        break;
      case 'Tractor':
        window.location.href = '/tractor';
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Navbar />
      <div className="absolute inset-0 bg-black/60"></div>
      <section className="md:h-screen py-36 flex items-center relative  zoom-image">
        <div
          style={{ backgroundImage: "url('/images/bg/b15.jpg')" }}
          className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center bg-cover"
        ></div>
        
        <div className="container mx-auto relative z-10 ">
          <div className="p-10 border border-green-400 rounded-lg shadow-md w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto bg-white">
            <h2 className="font-bold text-xl text-black dark:text-black-500 text-center">Buy on Electrify EVM</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5"> {/* Adjusted grid for responsiveness */}
              {/* Buttons for buying options */}

            <button
              className="flex flex-col items-center m-2 p-0 border border-black-500 square-full"
              onClick={() => handleBuyOption('Car')}
            >
              <img
                src="/images/popup/s1.jpeg"
                alt="Buy Car"
                className="w-full h-32 object-cover"
              />
              <span className="mt-2 text-black dark:text-black-500">Buy eCar</span>
            </button>
              <button
                className="flex flex-col items-center m-2 p-0 border border-black-500 square-full overflow-hidden"
                onClick={() => handleBuyOption('cycle')}
              >
                <img
                  src="/images/popup/b1.jpeg"
                  alt="Buy Bike"
                  className="w-full h-32 object-cover"
                />
                <span className="mt-2 text-black dark:text-black-500">Buy eBicycle</span>
              </button>
              <button
                className="flex flex-col items-center m-2 p-0 border border-black-500 square-full overflow-hidden"
                onClick={() => handleBuyOption('Scooter')}
              >
                <img
                  src="/images/popup/s3.jpg"
                  alt="Buy Scooter"
                  className="w-full h-32 object-cover"
                />
                <span className="mt-2 text-black dark:text-black-500">Buy eBike</span>
              </button>
              <button
                className="flex flex-col items-center m-2 p-0 border border-black-500 square-full overflow-hidden"
                onClick={() => handleBuyOption('Auto')}
              >
                <img
                  src="/images/popup/tr3.jpg"
                  alt="Buy Scooter"
                  className="w-32 h-32 object-cover"
                />
                <span className="mt-2 text-black dark:text-black-500"> Buy eAuto</span>
              </button>
              <button
                className="flex flex-col items-center m-2 p-0 border border-black-500 square-full overflow-hidden"
                onClick={() => handleBuyOption('Tractor')}
              >
                <img
                  src="/images/popup/tr1.jpg"
                  alt="Buy Tractor"
                  className="w-32 h-32 object-cover"
                />
                <span className="mt-2 text-black dark:text-black-500">Buy eTractor</span>
              </button>
              <button
                className="flex flex-col items-center m-2 p-0 border border-black-500 square-full overflow-hidden"
                onClick={() => handleBuyOption('Drone')}
              >
                <img
                  src="/images/popup/tr4.jpg"
                  alt="Buy Drone"
                  className="w-32 h-32 object-cover"
                />
                <span className="mt-2 text-black dark:text-black-500">Buy eDrone</span>
              </button>
            </div>
          </div>
        </div>
        </section>
       <Switcher />
       <Footer />
    </>
  );
};

export default BuyPage;
