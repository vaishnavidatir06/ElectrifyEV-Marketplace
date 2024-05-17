"use client";
import React, { useState } from 'react';
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";
import "../page.css";

const CarWashServices = () => {
  const [showBasicWashPopup, setShowBasicWashPopup] = useState(false);
  const [showStandardWashPopup, setShowStandardWashPopup] = useState(false);
  const [showComprehensiveWashPopup, setShowComprehensiveWashPopup] = useState(false);
  const [basicWashLocation, setBasicWashLocation] = useState('');
  const [basicWashMobileNumber, setBasicWashMobileNumber] = useState('');
  const [standardWashLocation, setStandardWashLocation] = useState('');
  const [standardWashMobileNumber, setStandardWashMobileNumber] = useState('');
  const [comprehensiveWashLocation, setComprehensiveWashLocation] = useState('');
  const [comprehensiveWashMobileNumber, setComprehensiveWashMobileNumber] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleToggleBasicWashPopup = () => {
    setShowBasicWashPopup(!showBasicWashPopup);
  };

  const handleToggleStandardWashPopup = () => {
    setShowStandardWashPopup(!showStandardWashPopup);
  };

  const handleToggleComprehensiveWashPopup = () => {
    setShowComprehensiveWashPopup(!showComprehensiveWashPopup);
  };

  const handleBasicWashLocationChange = (e) => {
    setBasicWashLocation(e.target.value);
  };

  const handleBasicWashMobileNumberChange = (e) => {
    setBasicWashMobileNumber(e.target.value);
  };

  const handleStandardWashLocationChange = (e) => {
    setStandardWashLocation(e.target.value);
  };

  const handleStandardWashMobileNumberChange = (e) => {
    setStandardWashMobileNumber(e.target.value);
  };

  const handleComprehensiveWashLocationChange = (e) => {
    setComprehensiveWashLocation(e.target.value);
  };

  const handleComprehensiveWashMobileNumberChange = (e) => {
    setComprehensiveWashMobileNumber(e.target.value);
  };

  const handleClosePopup = () => {
    setShowBasicWashPopup(false);
    setShowStandardWashPopup(false);
    setShowComprehensiveWashPopup(false);
    setShowPopup(false);
  };

  const handleFormSubmit = () => {
    setShowPopup(true);
  };

  return (
    <>
      <Navbar />

      <section className="relative mt-20">
        <div className="container-fluid md:mx-4 mx-2">
          <div style={{ backgroundImage: `url('/images/popup/carwash.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '20vh' }} className="relative pt-20 pb-40 table w-full rounded-xl shadow-md overflow-hidden bg-no-repeat" id="home">
            <div className="container mx-auto pt-20 pb-12">
              <h1 className="text-8xl font-semibold mb-8 text-center text-white">Electrify Wash</h1>
              <div className="grid grid-cols-1 text-center mt-10">
                <h3 className="md:text-6xl text-3xl md:leading-normal leading-normal font-xl text-white pb-20">Wash Packages</h3>
              </div>

              <div className="card-container pt-20 ">
                {/* Basic Wash Card */}
                <div className="card dark:border border-gray-500 ">
                  <div className="card-inner">
                    <div
                      className="card-front"
                      style={{
                        backdropFilter: "white",
                        backgroundColor: "white",
                        padding: "20px",
                      }}
                    >
                      <div className="heading-wrapper pt-24">
                        <h1 style={{ marginTop: "-150px", fontWeight: "800", color: "green", textAlign: "center", fontSize: "3.25rem" }}>Basic</h1>
                        <h2 style={{ fontWeight: "800", color: "green", textAlign: "center", fontSize: "3.25rem", marginBottom: "20px" }}>Carwash</h2>
                        <h3 style={{ fontWeight: "800", color: "green", textAlign: "center" }}> $10</h3>
                      </div>
                    </div>

                    <div
                      className="card-back"
                      style={{
                        backdropFilter: "white",
                        backgroundColor: "white",
                        padding: "20px",
                      }}
                    >
                      <div style={{ display: 'flex' }}>
                        <ul className="list-disc pl-8 mb-8" style={{ flex: 1 }}>
                          <li className="mb-4 text-2xl text-black dark:text-black">Pressure rinse</li>
                          <li className="mb-4 text-2xl text-black dark:text-black">Soap cycle</li>
                          <li className="mb-4 text-2xl text-black dark:text-black">Clear coat</li>
                          <li className="mb-4 text-2xl text-black dark:text-black">Sometimes air dryer</li>
                        </ul>
                        <ul className="list-disc pl-8 mb-8" style={{ flex: 1 }}>
                          <li className="mb-4 text-2xl text-black dark:text-black">Removes surface dirt and mud</li>
                          <li className="mb-4 text-2xl text-black dark:text-black">Removes dust, dirt, and debris from interior</li>
                        </ul>
                      </div>
                      <button onClick={handleToggleBasicWashPopup} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Book Now</button>
                    </div>
                  </div>
                </div>

                {/* Standard Wash Card */}
                <div className="card dark:border border-gray-500 ">
                  <div className="card-inner">
                    <div
                      className="card-front"
                      style={{
                        backdropFilter: "white",
                        backgroundColor: "white",
                        padding: "20px",
                      }}
                    >
                      <div className="heading-wrapper pt-24">
                        <h1 style={{ marginTop: "-150px", fontWeight: "800", color: "green", textAlign: "center", fontSize: "3.25rem" }}>Standard</h1>
                        <h2 style={{ fontWeight: "800", color: "green", textAlign: "center", fontSize: "3.25rem", marginBottom: "20px" }}>Carwash</h2>
                        <h3 style={{ fontWeight: "800", color: "green", textAlign: "center" }}> $20</h3>
                      </div>
                    </div>

                    <div
                      className="card-back"
                      style={{
                        backdropFilter: "white",
                        backgroundColor: "white",
                        padding: "20px",
                      }}
                    >
                      <div style={{ display: 'flex' }}>
                        <ul className="list-disc pl-8 mb-8" style={{ flex: 1 }}>
                          <li className="mb-4 text-2xl text-black dark:text-black">High-pressure spray</li>
                          <li className="mb-4 text-2xl text-black dark:text-black">Soap brushes</li>
                          <li className="mb-4 text-2xl text-black dark:text-black">Rinse cycles</li>
                        </ul>
                        <ul className="list-disc pl-8 mb-8" style={{ flex: 1 }}>
                          <li className="mb-4 text-2xl text-black dark:text-black">Removes grime from exterior</li>
                          <li className="mb-4 text-2xl text-black dark:text-black">Removes dust, dirt, and debris from interior</li>
                        </ul>
                      </div>
                      <button onClick={handleToggleStandardWashPopup} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Book Now</button>
                    </div>
                  </div>
                </div>

                {/* Comprehensive Wash Card */}
                <div className="card dark:border border-gray-500 ">
                  <div className="card-inner">
                    <div
                      className="card-front"
                      style={{
                        backdropFilter: "white",
                        backgroundColor: "white",
                        padding: "20px",
                      }}
                    >
                      <div className="heading-wrapper pt-24">
                        <h1 style={{ marginTop: "-150px", fontWeight: "800", color: "green", textAlign: "center", fontSize: "3rem" }}>Comprehensive</h1>
                        <h2 style={{ fontWeight: "800", color: "green", textAlign: "center", fontSize: "3rem", marginBottom: "25px" }}>Carwash</h2>
                        <h3 style={{ fontWeight: "800", color: "green", textAlign: "center" }}> $30</h3>
                      </div>
                    </div>
                    <div
                      className="card-back"
                      style={{
                        backdropFilter: "white",
                        backgroundColor: "white",
                        padding: "20px",
                      }}
                    >
                      <div style={{ display: 'flex' }}>
                        <ul className="list-disc pl-8 mb-8" style={{ flex: 1 }}>
                          <li className="mb-4 text-2xl text-black dark:text-black">Exterior hand wash</li>
                          <li className="mb-4 text-2xl text-black dark:text-black">Full interior detail</li>
                          <li className="mb-4 text-2xl text-black dark:text-black">Brushes and sprayers</li>
                        </ul>
                        <ul className="list-disc pl-8 mb-8" style={{ flex: 1 }}>
                          <li className="mb-4 text-2xl text-black dark:text-black">Hand scrubbing of doors and tires</li>
                          <li className="mb-4 text-2xl text-black dark:text-black">Cleaning of windows and mirrors</li>
                        </ul>
                      </div>
                      <button onClick={handleToggleComprehensiveWashPopup} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Book Now</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Switcher />

      {/* Popup for Basic Wash */}
      {showBasicWashPopup && (
        <div className="fixed inset-0 z-20 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md relative">
            <button onClick={handleClosePopup} className="text-gray-500 hover:text-gray-700 absolute top-4 right-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-lg font-bold mb-4 text-black dark:text-black">Basic Wash Booking</h2>
            <form>
              <label htmlFor="basicWashLocation" className="block text-sm font-medium text-gray-700">Location</label>
              <input type="text" id="basicWashLocation" name="basicWashLocation" value={basicWashLocation} onChange={handleBasicWashLocationChange} className="w-full h-8 border rounded-sm py-1 px-2 mb-4" />
              <label htmlFor="basicWashMobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input type="text" id="basicWashMobileNumber" name="basicWashMobileNumber" value={basicWashMobileNumber} onChange={handleBasicWashMobileNumberChange} className="w-full h-8 border rounded-sm py-1 px-2 mb-4" />
              <button type="submit" onClick={handleFormSubmit} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Popup for Standard Wash */}
      {showStandardWashPopup && (
        <div className="fixed inset-0 z-20 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md relative">
            <button onClick={handleClosePopup} className="text-gray-500 hover:text-gray-700 absolute top-4 right-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-lg font-bold mb-4 text-black dark:text-black">Standard Wash Booking</h2>
            <form>
              <label htmlFor="standardWashLocation" className="block text-sm font-medium text-gray-700">Location</label>
              <input type="text" id="standardWashLocation" name="standardWashLocation" value={standardWashLocation} onChange={handleStandardWashLocationChange} className="w-full h-8 border rounded-sm py-1 px-2 mb-4" />
              <label htmlFor="standardWashMobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input type="text" id="standardWashMobileNumber" name="standardWashMobileNumber" value={standardWashMobileNumber} onChange={handleStandardWashMobileNumberChange} className="w-full h-8 border rounded-sm py-1 px-2 mb-4" />
              <button type="submit" onClick={handleFormSubmit} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Popup for Comprehensive Wash */}
      {showComprehensiveWashPopup && (
        <div className="fixed inset-0 z-20 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md relative">
            <button onClick={handleClosePopup} className="text-gray-500 hover:text-gray-700 absolute top-4 right-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-lg font-bold mb-4 text-black dark:text-black">Comprehensive Wash Booking</h2>
            <form>
              <label htmlFor="comprehensiveWashLocation" className="block text-sm font-medium text-gray-700">Location</label>
              <input type="text" id="comprehensiveWashLocation" name="comprehensiveWashLocation" value={comprehensiveWashLocation} onChange={handleComprehensiveWashLocationChange} className="w-full h-8 border rounded-sm py-1 px-2 mb-4" />
              <label htmlFor="comprehensiveWashMobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input type="text" id="comprehensiveWashMobileNumber" name="comprehensiveWashMobileNumber" value={comprehensiveWashMobileNumber} onChange={handleComprehensiveWashMobileNumberChange} className="w-full h-8 border rounded-sm py-1 px-2 mb-4" />
              <button type="submit" onClick={handleFormSubmit} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Popup for Success Message */}
      {showPopup && (
        <div className="fixed inset-0 z-20 bg-black bg-opacity-20 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md relative">
            <button onClick={handleClosePopup} className="text-gray-500 hover:text-gray-700 absolute top-4 right-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button><br />
            <h2 className="text-lg font-bold mb-4 text-black dark:text-black">Contacting our management team, we will reach out to you</h2>
          </div>
        </div>
      )}
    </>
  );
}

export default CarWashServices;
