"use client";
import React, { useState, useEffect } from 'react';
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";

const vehicles = [
  {
    id: 1,
    name: 'eCar',
    image: '/images/property/buysearch4.jpeg',      
    description: 'We provide towing service, battery replacement, key lockout and repairs',
    page: '/car-service' 
  },
  {
    id: 2,
    name: 'eBike',
    image: '/images/property/s4.jpeg', 
    description: 'We provide towing service, battery replacement and emergency repairs',
    page: '/scooter-service'
  },
  {
    id: 3,
    name: 'eDrone',
    image: '/images/property/ideaforge.jpg', 
    description: 'We provide emergency landing , battery replacement and drone repair',
    page: '/drone-service'
  },
  {
    id: 4,
    name: 'eTractor',
    image: '/images/property/sonalika.jpeg', 
    description: 'We provide towing service , engine power and tyre replacement',
    page: '/tractor-service'
  },
  {
    id: 5,
    name: 'eAuto',
    image: '/images/property/Azul lite.jpeg', 
    description: 'We provide towing service , mechanical repairs and battery replacement',
    page: '/auto-service'
  },
];

const EmergencyPage = () => {
  const [vehicleType, setVehicleType] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [contactError, setContactError] = useState(false);
const [ownerContact, setOwnerContact] = useState('');
  const handleVehicleTypeChange = (e) => {
    setVehicleType(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleBookService = (vehicleName) => {
    const selectedVehicle = vehicles.find(vehicle => vehicle.name === vehicleName);
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
    setShowOTP(false)
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Form submitted");
    setShowPopup(true);
    // Automatically hide the popup after 20 seconds
    setTimeout(() => {
      console.log("Timeout function called");
      setShowPopup(false);
    }, 8000); 
  };

  return (
    <>
      <Navbar />
      <section className="relative mt-20">
        <div className="container-fluid md:mx-4 mx-2">
          <div style={{ backgroundImage: `url('/images/popup/services.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '20vh' }} className="relative pt-20 pb-40 table w-full rounded-xl shadow-md overflow-hidden bg-no-repeat" id="home">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="container mx-auto pt-20 pb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
        <div className="md:text-start text-center">
            <p className="text-5xl md:text-6xl font-semibold mb-8 text-white dark:text-white pt-20">
                Most Trusted Solution for Roadside Emergency
            </p>
        </div>
    </div>
    <div>
        <div className="max-w-md mx-auto bg-gray-200 rounded-lg shadow-lg pt-10 px-8 pb-8">
            <p className="text-xl font-semibold mb-8 text-gray-950 dark:text-gray-950">For Emergency</p>
            <form className="grid gap-4">
                <div>
                    <label htmlFor="location" className="block text-lg font-medium text-gray-700">Location</label>
                    <input type="text" id="location" name="location" className="w-full h-8 border rounded-sm py-1 px-2" />
                </div>
                <div>
                    <label htmlFor="mobile" className="block text-lg font-medium text-gray-700">Mobile Number</label>
                    <input
        type="tel"
        value={ownerContact}
        onChange={(e) => {
            // Remove all non-numeric characters from the input value
            const numericValue = e.target.value.replace(/[^0-9]/g, '');
            // Set the state with the cleaned numeric value
            setOwnerContact(numericValue);
            // Check if the cleaned value is a valid numeric contact
            const isValid = /^\d{10}$/.test(numericValue);
            // Display error message if input is not a valid numeric contact
            setContactError(!isValid && numericValue.length > 0);
        }}
        required
        className={`w-full sm:w-48 h-8 border rounded-sm py-1 px-2 ${contactError && 'border-red-500'}`}
    />
    {contactError && <p className="text-red-500">Please enter a valid 10-digit numeric contact.</p>}
                </div>
                <div>
                    <label htmlFor="registration" className="block text-lg font-medium text-gray-700">Vehicle Registration Number</label>
                    <input type="text" id="registration" name="registration" className="w-full h-8 border rounded-sm py-1 px-2" />
                </div>
                <div className="flex justify-end">
                    <button type="submit" onClick={handleFormSubmit} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

          </div>
        </div>
      </section>


      <div>
        <h1 className="text-4xl font-semibold mb-8 text-green-600 pt-20 text-center">Emergency Services Available for</h1>
        <div className="flex flex-wrap justify-center">
          {vehicles.map(vehicle => (
            <div key={vehicle.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
              <div className="bg-gray-200 dark:bg-zinc-500 bg-opacity-50 p-8 h-full">
                <h1 className="text-3xl font-bold text-black dark:text-white mb-6 text-center">{vehicle.name}</h1>
                <img src={vehicle.image} alt={vehicle.name} className="w-full h-40 object-cover" />
                <p className="text-lg text-black dark:text-white mb-4 mt-4 text-center">{vehicle.description}</p>
                <div className="flex justify-center">
                  <button onClick={() => handleBookService(vehicle.name)} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                    Book a Service
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-8 rounded shadow-md relative">
      <button onClick={() => setShowPopup(false)} className="absolute top-0 right-0 p-2 mb-2">
        <svg className="w-6 h-6 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <h2 className="text-lg font-bold mb-4 mt-4">Contacting our management team, we will reach out to you</h2>
    </div>
  </div>
)}

      <Footer />
      <Switcher />
    </>
  );
};

export default EmergencyPage;
