'use client'
import React, { useState } from 'react';
import Navbar from '../componants/navbar';
import Footer from '../componants/footer';
import Switcher from '../componants/switcher';
import "../pages.css";

const EmergencyPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [location, setLocation] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedBatteryPower, setSelectedBatteryPower] = useState('');

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleBookServiceClick = () => {
    setShowPopup(true);
  };

  const handleProceed = () => {
    setShowPopup(false);
    setShowOTP(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setShowOTP(false);
    setShowPaymentSuccess(false);
    setSelectedVehicle(null);
  };

  const handleVerifyOTP = () => {
    setShowOTP(false);
    setShowPaymentSuccess(true);
  };

  const handleBatteryPowerChange = (e) => {
    setSelectedBatteryPower(e.target.value);
  };

  return (
    <>
      <Navbar navClass="navbar-white" />
      <section
        style={{ backgroundImage: "url('/images/bg/charge.jfif')" }}
        className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover"
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-6xl md:leading-normal leading-normal font-medium text-green-600">
              Battery Recharge Service
            </h3>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape overflow-hidden z-1 text-white">
          
        </div>
      </div>
      <section className="relative md:pb-5 pb-9">
        <div className="container lg:mt-15 mt-9 ">
          <div className="grid grid-cols-1">
            <p className="mb-8 leading-relaxed text-xl">Our technicians will come to your location, uninstall the battery, take it to our store, and charge it using our advanced charging machines. After charging, we will observe the battery to ensure it holds the voltage. If everything is fine, we will reinstall it in your vehicle.</p>
            <ul className="list-disc pl-8 mb-8">
              <li className="mb-4 text-xl">Trained Professionals</li>
              <li className="mb-4 text-xl">100% Customer Satisfaction</li>
              <li className="mb-4 text-xl">Fastest & Professional Service</li>
            </ul>
            <h3 className="text-2xl font-bold mb-4">Service Prices</h3>
            <ul className="list-disc pl-8 mb-6">
              <li className="mb-4 text-xl">
                At Doorstep (Within City limits): $40
              </li>
              <li className="mb-4 text-xl">
                At Service Station: $25
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  card-container pb-20 mr-10 ml-10">
        {/* Cards */}
        {/* Card 1 */}
        <div className="card bg-blur border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg">
          <div className="card-inner">
            <h1 className="text-2xl font-bold mb-2 text-center text-green-600 ">Jump-Start</h1>
            <p className="text-gray-800 dark:text-white text-center text-xl">Jump-Start your vehicles flat battery</p>
            <div className="button-container mt-8 pt-2">
              <button onClick={handleBookServiceClick} className="bg-green-600 text-white mb-4 px-2 py-2 rounded hover:bg-green-600">
                Book now
              </button>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card bg-blur border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg">
          <div className="card-inner">
            <h1 className="text-xl font-bold mb-2 text-center text-green-600 ">Standard Battery</h1>
            <p className="text-gray-800 dark:text-white text-center text-xl">Affordable batteries with reliable performance</p>
            <div className="button-container mt-2 pt-2">
              <button onClick={handleBookServiceClick} className="bg-green-600 text-white mb-2 px-2 py-2 rounded hover:bg-green-600">
                Book now 
              </button>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card bg-blur border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg">
          <div className="card-inner">
            <h1 className="text-2xl font-bold mb-2 text-center text-green-600 ">Premium Battery</h1>
            <p className="text-gray-800 dark:text-white text-center text-xl">Batteries with superior performance and long life</p>
            <div className="button-container mt-2 pt-2">
              <button onClick={handleBookServiceClick} className="bg-green-600 text-white mb-2 px-2 py-2 rounded hover:bg-green-600">
                Book now
              </button>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="card bg-blur border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg">
          <div className="card-inner">
            <h1 className="text-2xl font-bold mb-2 text-center text-green-600">AGM Battery</h1>
            <p className="text-gray-800 dark:text-white text-center text-xl">High capacity and high performance batteries</p>
            <div className="button-container mt-2 pt-2">
              <button onClick={handleBookServiceClick} className="bg-green-600 text-white mb-2 px-2 py-2 rounded hover:bg-green-600">
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md">
            <div className="flex justify-end">
              <button onClick={handleClosePopup} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <h2 className="text-lg font-bold mb-4 text-black">Help Us</h2>
            <div>
              <input
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={handleLocationChange}
                className="border border-gray-400 rounded px-3 py-2 mb-4"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter your mobile number"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                className="border border-gray-400 rounded px-3 py-2 mb-4"
              />
            </div>
            <button onClick={handleProceed} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full">
              Proceed
            </button>
          </div>
        </div>
      )}
      {showOTP && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md">
            <div className="flex justify-end">
              <button onClick={handleClosePopup} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <h2 className="text-lg font-bold mb-4 text-black">Enter OTP</h2>
            <input
              type="text"
              placeholder="Enter OTP"
              className="border border-gray-400 rounded px-3 py-2 mb-4"
            />
            <button onClick={handleVerifyOTP} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full">
              Verify OTP
            </button>
          </div>
        </div>
      )}
      {showPaymentSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md">
            <div className="flex justify-end">
              <button onClick={handleClosePopup} className="text-gray-500 hover:text-red-700">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <h2 className="text-lg font-bold mb-4 text-black">Your Service is Booked</h2>
            <div className="flex justify-center items-center">
            </div>
          </div>
        </div>
      )}
      <Footer />
      <Switcher />
    </>
  );
};

export default EmergencyPage;
