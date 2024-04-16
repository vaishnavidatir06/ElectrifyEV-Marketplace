'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";

const vehicles = [
  {
    id: 1,
    name: 'Jump-Start'
  },
  {
    id: 2,
    name: 'Standard Battery'
  },
  {
    id: 3,
    name: 'Premium Battery'
  },
  {
    id: 4,
    name: 'AGM Battery'
  },
];

const EmergencyPage = () => {
  const [vehicleType, setVehicleType] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [location, setLocation] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showOTP, setShowOTP] = useState(false);

  const handleVehicleTypeChange = (e) => {
    setVehicleType(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleBookServiceClick = (selectedVehicle) => {
    setVehicleType(selectedVehicle.name);
    setShowPopup(true);
  };

  const handleProceed = () => {
    setShowPopup(false);
    setShowOTP(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setShowOTP(false);
  };

  const handleVerifyOTP = () => {
    console.log('OTP verified');
    setShowOTP(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Battery Charge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div><h1 className="text-3xl font-bold text-center pt-40 mb-8">Battery Charge</h1></div>
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap justify-center">
          {vehicles.map(vehicle => (
            <div key={vehicle.id} className="bg-slate-500 bg-opacity-90 p-6 rounded-lg m-7 mt-10 mb-10 w-64">
              <h1 className="text-2xl font-bold text-white mb-4">{vehicle.name}</h1>
              {vehicle.name === 'Jump-Start' ? (
                <p className="text-lg text-white mb-2">Jump-Start your Vehicles flat battery</p>
              ) : vehicle.name === 'Standard Battery' ? (
                <p className="text-lg text-white mb-2">Affordable batteries with a reliable performance</p>
              ) : vehicle.name === 'Premium Battery' ? (
                <p className="text-lg text-white mb-2">Batteries with a superior performance and a long life</p>
              ) : (
                <p className="text-lg text-white mb-2">High capacity and high performance batteries</p>
              )}
              <button onClick={() => handleBookServiceClick(vehicle)} className="bg-blue-300 text-white px-4 py-2 mt-4 rounded">
                Book a Service
              </button>
            </div>
          ))}
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
            <h2 className="text-lg font-bold mb-4">Help Us</h2>
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
            <button onClick={handleProceed} className="bg-blue-500 text-white px-4 py-2 rounded">
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
            <h2 className="text-lg font-bold mb-4">Enter OTP</h2>
            <input
              type="text"
              placeholder="Enter OTP"
              className="border border-gray-400 rounded px-3 py-2 mb-4"
            />
            <button onClick={handleVerifyOTP} className="bg-yellow-500 text-white px-4 py-2 rounded">
              Verify OTP
            </button>
          </div>
        </div>
      )}

      <Footer />
      <Switcher />
    </div>
  );
};

export default EmergencyPage;