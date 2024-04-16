'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";



  const vehicles = [
    {
      id: 1,
      name: 'Car',
      page: '/car-service' 
    },
    {
      id: 2,
      name: 'Scooter',
      page: '/scooter-service'
    },
    {
      id: 3,
      name: 'Drone',
      page: '/drone-service'
    },
    {
      id: 4,
      name: 'Tractor',
      page: '/tractor-service'
    },
    {
      id: 5,
      name: 'Auto',
      page: '/auto-service'
    },
  ];
  
  const EmergencyPage = () => {
    const [vehicleType, setVehicleType] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
  
    const handleVehicleTypeChange = (e) => {
      setVehicleType(e.target.value);
    };
  
    const handleMobileNumberChange = (e) => {
      setMobileNumber(e.target.value);
    };
  
    const handleBookService = () => {
      const selectedVehicle = vehicles.find(vehicle => vehicle.name === vehicleType);
      if (selectedVehicle) {
        window.location.href = selectedVehicle.page; // Redirect to the selected vehicle's page
      }
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
    <>
      

      <Navbar />
      <div className="container mx-auto pt-20 pb-12 grid grid-cols-2 gap-8">
  <div className="col-span-1">
    <h1 className="text-6xl font-semibold mb-8 text-green-600 pt-20">Emergency Assistance</h1>
  </div>

  


  <div className="col-span-1">
    <div className="max-w-md mx-auto bg-gray-200 rounded-lg shadow-lg pt-10 px-8 pb-8">
      <form className="grid gap-4">
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
          <input type="text" id="location" name="location" className="w-full h-8 border rounded-sm py-1 px-2" />
        </div>
        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
          <input type="text" id="mobile" name="mobile" className="w-full h-8 border rounded-sm py-1 px-2" />
        </div>
        <div>
          <label htmlFor="registration" className="block text-sm font-medium text-gray-700">Vehicle Registration Number</label>
          <input type="text" id="registration" name="registration" className="w-full h-8 border rounded-sm py-1 px-2" />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>


<div className="flex flex-col justify-items-start min-h-screen bg-cover bg-center">
<div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-3xl font-bold text-white mb-6">Emergency Assistance Services</h1>
          <p className="text-lg text-white mb-4">Emergency assistance services are available for:</p>
          <select value={vehicleType} onChange={handleVehicleTypeChange} className="border border-gray-400 rounded px-3 py-2 mb-4 text-white bg-gray-800">
            <option value="">Select Vehicle Type</option>
            {vehicles.map(vehicle => (
              <option key={vehicle.id} value={vehicle.name}>{vehicle.name}</option>
            ))}
          </select>
          <p className="text-white">Our expert technicians are available to help you anytime, anywhere.</p>
          <button onClick={handleBookService} className="bg-blue-500 text-white px-4 py-2 mt-8 rounded">
            Book a Service
          </button>
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
            <input
              type="text"
              placeholder="Enter your mobile number"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              className="border border-gray-400 rounded px-3 py-2 mb-4"
            />
            <button onClick={handleProceed} className="bg-blue-500 text-white px-4 py-2 rounded">
              Proceed
            </button>
          </div>
        </div>
        
      )}



       
        <Footer />

        <Switcher />
        </>
    );
}

export default EmergencyPage;
  
  