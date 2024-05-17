'use client'
import React, { useState } from 'react';
import Navbar from '../componants/navbar';
import Footer from '../componants/footer';
import Switcher from '../componants/switcher';

const EmergencyPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [location, setLocation] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedBatteryPower, setSelectedBatteryPower] = useState('');
  const [ownerContact, setOwnerContact] = useState('');
  const [contactError, setContactError] = useState(false);
  
const [locationError, setLocationError] = useState("");

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  

  const handleBookServiceClick = () => {
    setShowPopup(true);
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

  const handleLocationChange = (e) => {
    const inputValue = e.target.value;
    setLocation(inputValue);
    // Validate location input (example: minimum length)
    if (inputValue.length < 3) {
        setLocationError("Location should be at least 3 characters long");
    } else {
        setLocationError("");
    }
};

const handleProceed = () => {
  // Perform validations
  let proceed = true;

  // Validate location field
  if (location.trim() === "") {
      setLocationError("Location is required");
      proceed = false;
  } else {
      setLocationError("");
  }

  // Validate phone number field
  const numericValue = ownerContact.replace(/[^0-9]/g, '');
  const isValidContact = /^\d{10}$/.test(numericValue);
  if (!isValidContact) {
      setContactError("Please enter a valid 10-digit numeric contact");
      proceed = false;
  } else {
      setContactError("");
  }

  // Proceed only if all validations pass
  if (proceed) {
      console.log("Proceeding...");
      setShowPopup(false);
      setShowOTP(true);
      // Add your logic to proceed here, like submitting the form
  }
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
            <h3 className="md:text-6xl md:leading-normal leading-normal font-medium text-white dark:text-white">
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
      <div className="container mx-auto pt-10 pb-12"  style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
  <p className="mb-8 text-xl mr-4">
    Our technicians will come to your location, uninstall the battery, take it to our store, and charge it using our advanced charging machines. After charging, we will observe the battery to ensure it holds the voltage. If everything is fine, we will reinstall it in your vehicle.
  </p>
  <ul style={{ display: "flex", flexDirection: "column", marginRight: "4px", marginLeft: "4px",listStyleType: "disc"}}>
  <li className="mb-4 text-xl">Trained Professionals</li>
  <li className="mb-4 text-xl">100% Customer Satisfaction</li>
  <li className="mb-4 text-xl">Fastest & Professional Service</li>
</ul>
<div style={{ marginLeft: "4px" }}>
  <h3 className="text-4xl font-bold mb-4 ml-8 pt-10" style={{ display: "flex", flexDirection: "column"}}>Service Prices</h3>
  <ul style={{ display: "flex", flexDirection: "column", marginRight: "2px", marginLeft: "2px" ,listStyleType: "disc"}}>
    <li className="mb-4 text-xl ml-8" >At Doorstep (Within City limits): $40</li>
    <li className="mb-4 text-xl ml-8">At Service Station: $25</li>
  </ul>
</div>
</div>



      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  card-container pb-20 mr-10 ml-10 gap-3">
        {/* Cards */}
        {/* Card 1 */}
        <div className="cards bg-blur border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg" style={{borderRadius: '8px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease'}}>
          <div className="card-in">
            <h1 className="text-2xl font-bold mb-2 text-center text-green-600 ">Jump-Start</h1>
            <p className="text-gray-800 dark:text-white text-center text-xl">Jump-Start your vehicles flat battery</p>
            <div className="button-container mt-8 pt-2 flex justify-center">
              <button onClick={handleBookServiceClick} style={{backgroundColor: '#00aa80', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '1.6rem', cursor: 'pointer', transition: 'background-color 0.3s ease'}} className="bg-green-600 text-white mb-4 px-2 py-2 mt-6 rounded hover:bg-green-600">
                Book Now
              </button>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="cards bg-blur border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg" style={{borderRadius: '8px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease'}}>
          <div className="card-in">
            <h1 className="text-2xl font-bold mb-2 text-center text-green-600 ">Standard Battery</h1>
            <p className="text-gray-800 dark:text-white text-center text-xl">Affordable batteries with reliable performance</p>
            <div className="button-container mt-8 pt-2 flex justify-center">
              <button onClick={handleBookServiceClick} style={{backgroundColor: '#00aa80', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '1.6rem', cursor: 'pointer', transition: 'background-color 0.3s ease'}} className="bg-green-600 text-white mb-4 px-2 py-2 rounded hover:bg-green-600">
                Book Now 
              </button>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="cards bg-blur border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg" style={{borderRadius: '8px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease'}}>
          <div className="card-in">
            <h1 className="text-2xl font-bold mb-2 text-center text-green-600 ">Premium Battery</h1>
            <p className="text-gray-800 dark:text-white text-center text-xl">Batteries with superior performance and long life</p>
            <div className="button-container mt-8 pt-2 flex justify-center">
              <button onClick={handleBookServiceClick} style={{backgroundColor: '#00aa80', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '1.6rem', cursor: 'pointer', transition: 'background-color 0.3s ease'}} className="bg-green-600 text-white mb-4 px-2 py-2 rounded hover:bg-green-600">
                Book Now
              </button>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="cards bg-blur border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg" style={{borderRadius: '8px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease'}}>
          <div className="card-in">
            <h1 className="text-2xl font-bold mb-2 text-center text-green-600">AGM Battery</h1>
            <p className="text-gray-800 dark:text-white text-center text-xl">High capacity and high performance batteries</p>
            <div className="button-container mt-8 pt-2 flex justify-center">
            <button onClick={handleBookServiceClick} style={{backgroundColor: '#00aa80', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '1.6rem', cursor: 'pointer', transition: 'background-color 0.3s ease', display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="bg-green-600 text-white mb-2 px-2 py-2 rounded hover:bg-green-600">
              Book Now
            </button>
            </div>
          </div>
        </div>

      </div>
      <Footer />
      <Switcher />
      {showPopup && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
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
        className={`border border-gray-400 rounded px-3 py-2 mb-4 ${locationError && "border-red-500"}`}
    />
    {locationError && <p className="text-red-500">{locationError}</p>}
</div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                                Phone Number
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
</label>
            
            <button onClick={handleProceed} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full">
              Proceed
            </button>
          </div>
        </div>
      )}
      {showOTP && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
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
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md">
            <div className="flex justify-end">
              <button onClick={handleClosePopup} className="text-gray-500 hover:text-red-700">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div><br />
            <h2 className="text-lg font-bold mb-4 text-black">Your Service is Booked</h2>
            <div className="flex justify-center items-center">
            </div>
          </div>
        </div>
      )}
      
    </>
  );
};

export default EmergencyPage;
