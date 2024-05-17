'use client';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { MdDirectionsCar, MdSettingsInputComponent, MdTune , MdBatteryFull} from 'react-icons/md';
import Footer from '../componants/footer';
import Navbar from '../componants/navbar';
import Switcher from "../componants/switcher";
import VehicleImage from '../componants/vehicleImage';

export default function VehicleDetail() {
    const [vehicle, setVehicle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isTestDrivePopupOpen, setIsTestDrivePopupOpen] = useState(false);
    const [isOfferPopupOpen, setIsOfferPopupOpen] = useState(false);
    const [isBuyNowPopupOpen, setIsBuyNowPopupOpen] = useState(false);
    const [vehicleType, setVehicleType] = useState(null); // Add vehicleType state
    const [isNameValid, setIsNameValid] = useState(true);
    const [ownerName, setOwnerName] = useState('');
    const [contactError, setContactError] = useState(false);
    const [ownerEmail, setOwnerEmail] = useState('');
    const [ownerContact, setOwnerContact] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [offerAmount, setOfferAmount] = useState('');
    const [offerMessage, setOfferMessage] = useState('');
    const [isAmountValid, setIsAmountValid] = useState(false);

   
const [isEmailValid, setIsEmailValid] = useState(true);
const [isContactValid, setIsContactValid] = useState(true);
    useEffect(() => {
      // Parse the current URL to extract the vehicle ID
      const queryParams = queryString.parse(window.location.search);
      const vehicleId = queryParams.id;

      // Check if the vehicle ID exists
      if (!vehicleId) {
          console.error('Missing vehicle ID');
          return;
      }

      // Fetch data based on the extracted vehicle ID
      const fetchData = async () => {
          try {
              // Fetch data based on the vehicle ID
              const response = await fetch(`http://51.79.225.217:5001/api/vehicles/${vehicleId}`);

              if (!response.ok) {
                  // Handle non-200 status code
                  console.error('Error fetching vehicle data:', response.statusText);
                  setError('Error fetching vehicle data');
                  return;
              }

              const data = await response.json();
              setVehicle(data);
              setVehicleType(data.vehicleType); // Set vehicleType based on fetched data
              setIsLoading(false);
          } catch (error) {
              // Handle fetch error
              console.error('Error fetching vehicle data:', error);
              setError('Error fetching vehicle data');
              setIsLoading(false);
          }
      };

      fetchData();
  }, []);



    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const openTestDrivePopup = () => setIsTestDrivePopupOpen(true);
    const closeTestDrivePopup = () => setIsTestDrivePopupOpen(false);

    const openOfferPopup = () => setIsOfferPopupOpen(true);
    const closeOfferPopup = () => setIsOfferPopupOpen(false);

    const openBuyNowPopup = () => setIsBuyNowPopupOpen(true);
    const closeBuyNowPopup = () => setIsBuyNowPopupOpen(false);


    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        // Validate all form fields
        const isFormValid = isNameValid && isEmailValid && isContactValid;
    
        if (isFormValid) {
            // Perform form submission logic here
            console.log("Form submitted");
            setShowPopup(true);
            // Automatically hide the popup after 20 seconds
            setTimeout(() => {
                console.log("Timeout function called");
                setShowPopup(false);
            }, 8000); 
        } else {
            console.log("Form not valid. Please check all fields.");
        }
    };

    const formatCurrency = (currency, value) => {
      // Check the currency type and add separators accordingly
      switch (currency) {
          case 'USD':
              return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
          case 'INR':
              return value.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
          case 'AED':
              return value.toLocaleString('en-AE', { style: 'currency', currency: 'AED' });
          default:
              return value.toLocaleString(); // Return the value with default formatting including commas
      }
  };
  


    return (
        <>
            <Navbar />
            <section className="container{width:100%;} md:pb-24 pb-16 mt-20 ml-0">
                <div className="md:flex justify-start">
                    <div className="lg:w-2/3 md:w-1/2 md:p-4 px-3">
                        <VehicleImage vehicle={vehicle} />


                        <div className=" md:p-4 px-3 mt-4 mr-0 text-black">
                            <h3 className="text-xl font-medium text-black dark:text-white">Description</h3>
                            <p className="text-black dark:text-white">{vehicle.vehicleDescription}</p>

                        </div>
                        <div className="md:p-4 px-3 mt-2">
                            <h3 className="text-xl font-medium text-black">Inspection Report</h3>
                            <div className="w-126 mt-8 ml-4 mt-2 rounded-lg bg-white p-16 border border-gray-300 shadow-md">
                                <h2 className="text-xl font-semibold mb-2 mt-0">Inspection Report</h2>
                                <div className="mb-4  bg-gray-100 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                                        <i className="mdi mdi-alert-circle-outline text-red-500 mr-2"></i>
                                        <span className="text-black">Imperfections:</span>
                                    </h3>
                                    <ul className="list-disc pl-4">
                                        <li className="mb-1 text-black">Minor cosmetic imperfections are not repaired as they do not affect the performance, and reduces the cost of ownership.</li>

                                    </ul>
                                </div>

                                <div className="mb-4 bg-gray-100 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                                        <i className="mdi mdi-wrench-outline text-blue-500 mr-2"></i>
                                        <span className="text-black">Repainted Parts:</span>
                                    </h3>
                                    <ul>
                                        <li className="mb-1 text-black">Some parts have been repainted for better aesthetics. However, we assure the car is non-accidental.</li>

                                    </ul>
                                </div>

                                <div className="mb-4 bg-gray-100 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                                        <i className="mdi mdi-check-circle-outline text-green-500 mr-2"></i>

                                        <span className="text-black">Perfect Parts:</span>
                                    </h3>
                                    <ul>
                                        <li className="mb-1 text-black">Thoroughly tested and ready for the road.</li>

                                    </ul>
                                </div>

                                <div className="mb-4 bg-gray-100 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                                        <i className="mdi mdi-circle-slice-8"></i>

                                        <span className="text-black">Tyres (Life Remaining):</span>
                                    </h3>
                                    <p className="text-black">Front Left: 70%</p>
                                    <p className="text-black">Front Right: 80%</p>
                                    <p className="text-black">Rear Left: 60%</p>
                                    <p className="text-black">Rear Right: 75%</p>
                                </div>

                            </div>
                        </div>


                    </div>

                    <div className="lg:w-1/3 md:w-1/2 md:p-4 px-3 mt-8 md:mt-0">
    <div className="sticky top-24">
        <div className="border border-gray-300 rounded-xl bg-gray-50 p-4">
            <h4 className="text-2xl font-medium">{vehicle.name}</h4>
            <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                                                <li className="flex items-center me-4">
                                                    <MdDirectionsCar width={20} className="me-2 text-green-600" />
                                                    <span>{vehicle.brand}</span>
                                                </li>
                                                <li className="flex items-center me-4">
                                                    <MdSettingsInputComponent width={20} className="me-2 text-green-600" />
                                                    <span>{vehicle.model}</span>
                                                </li>
                                                <li className="flex items-center me-4">
                                                    <MdBatteryFull width={20} className="me-2 text-green-600" />
                                                    <span>{vehicle.batteryPower}Ah</span>
                                                </li>
                                            </ul>
            <div className="md:flex mt-4">
                <div className="lg:w-1/2 md:w-1/2 p-1">
                    <div className="flex flex-wrap justify-start gap-4">
                        <div className="text-black">
                            <p className="text-slate-900">Registration Year:</p>
                            <p className="text-slate-900 mt-4">Location:</p>
                            {vehicleType === 'ecar' && (
                                <p className="text-slate-900 mt-4">Body Type:</p>
                            )}
                            <p className="text-slate-900 mt-4">Color:</p>
                        </div>
                        <div className="text-black">
                            <p className="text-slate-900">{vehicle.registrationYear}</p>
                            <p className="text-slate-900 mt-4">{vehicle.location}</p>
                            {vehicleType === 'ecar' && (
                                <p className="text-slate-900 mt-4">{vehicle.bodyType}</p>
                            )}
                            <p className="text-slate-900 mt-4">{vehicle.color}</p>
                        </div>
                        <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
                            <div className="p-4 flex justify-between items-center">
                            <h5 className="text-2xl font-medium mr-2">Price: </h5> {/* Added space after colon */}
<div className="flex items-center space-x-4">
    <span className="text-xl font-medium tracking-wide">
        {vehicle.price && `${formatCurrency(vehicle.price.currency, vehicle.price.value)}`}
    </span>
    <div className="bg-green-600/10 px-8 text-green-600 inline-block whitespace-nowrap">For Sale</div>
</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
                </div>
            </section>
            <div className="flex justify-center gap-4 pb-20 mt-0 ">

                {/* Book a Test Drive Button */}
                <button
                    onClick={openTestDrivePopup}
                    className=" px-8 py-8 btn bg-green-600 hover:bg-green-700 text-xl text-white rounded-md"
                >
                    Test Drive
                </button>

                {/* Make an Offer Button */}
                <button
                    onClick={openOfferPopup}
                    className=" px-8 py-8 btn bg-green-600 hover:bg-green-700 text-xl text-white rounded-md"

                >
                    Make an Offer
                </button>

                {/* Buy Now Button */}
                <button
                    onClick={openBuyNowPopup}
                    className=" px-8 py-8 btn bg-green-600 hover:bg-green-700 text-xl text-white rounded-md"
                >
                    Buy Now
                </button>
            </div>





            {isTestDrivePopupOpen && (
    <div className="fixed inset-0 z-20 bg-black bg-opacity-20 flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white p-10 border border-green-400 rounded-lg shadow-lg w-4/5 max-w-lg relative z-10">
                <button onClick={closeTestDrivePopup} className="absolute top-0 right-0 p-2 text-black hover:text-red-600 transition duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="modal">
                    <div className="modal-content">
                        <h2 className="text-2xl font-bold mb-6 text-center"><b>Book a Test Drive</b></h2>
                        <p className="mb-6 text-gray-600 text-sm text-center">Fill out the form to book a Test Drive:</p>
                        <form className="max-w-md mx-auto">
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    <b>Name</b>
                                    <input
                                        type="text"
                                        value={ownerName}
                                        onChange={(e) => {
                                            const inputValue = e.target.value;
                                            const isValid = /^[a-zA-Z]*$/.test(inputValue);
                                            setOwnerName(inputValue);
                                            setIsNameValid(isValid);
                                        }}
                                        required
                                        className={`mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${!isNameValid && 'border-red-500'}`}
                                    />
                                    {!isNameValid && ownerName.length > 0 && <p className="text-red-500 text-xs mt-1">Add only characters</p>}
                                </label>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    <b>Email</b>
                                    <input
                                        type="email"
                                        value={ownerEmail}
                                        onChange={(e) => {
                                            const inputValue = e.target.value;
                                            const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
                                            setOwnerEmail(inputValue);
                                            setIsEmailValid(isValid);
                                        }}
                                        required
                                        className={`mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${!isEmailValid && 'border-red-500'}`}
                                    />
                                    {!isEmailValid && ownerEmail.length > 0 && <p className="text-red-500 text-xs mt-1">Please enter a valid email address.</p>}
                                </label>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    <b>Phone Number</b>
                                    <input
                                        type="tel"
                                        value={ownerContact}
                                        onChange={(e) => {
                                            const numericValue = e.target.value.replace(/[^0-9]/g, '');
                                            setOwnerContact(numericValue);
                                            const isValid = /^\d{10}$/.test(numericValue);
                                            setIsContactValid(isValid);
                                        }}
                                        required
                                        className={`mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${!isContactValid && 'border-red-500'}`}
                                    />
                                    {!isContactValid && ownerContact.length > 0 && <p className="text-red-500 text-xs mt-1">Please enter a valid 10-digit numeric contact.</p>}
                                </label>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    onClick={handleFormSubmit}
                                    className={`inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out ${(!isNameValid || !isEmailValid || !isContactValid) && 'cursor-not-allowed opacity-50'}`}
                                    disabled={!isNameValid || !isEmailValid || !isContactValid}
                                >
                                    Submit
                                </button>
                                {showPopup && (
                                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                        <div className="bg-white p-8 rounded shadow-md relative">
                                            <button onClick={() => setShowPopup(false)} className="absolute top-0 right-0 p-2 mb-2 hover:text-red-600 transition duration-300">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                            <h2 className="text-lg font-bold mb-4 mt-4 text-center">Contacting our management team, we will reach out to you</h2>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}


{/* Offer Popup */}
{isOfferPopupOpen && (
    <div className="fixed inset-0 z-20 bg-black bg-opacity-20 flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white p-10 border border-green-400 rounded-lg shadow-lg w-4/5 max-w-lg relative z-10">
                <button onClick={closeOfferPopup} className="absolute top-0 right-0 p-2 text-black hover:text-red-600 transition duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="modal">
                    <div className="modal-content">
                        <h2 className="text-2xl font-bold mb-6 text-center"><b>Make an Offer</b></h2>
                        <form className="max-w-md mx-auto">
                            <div className="mb-6">
                                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                                    <b>Offer Amount</b>
                                </label>
                                <input
                                    type="number"
                                    id="amount"
                                    name="amount"
                                    value={offerAmount}
                                    onChange={(e) => {
                                        const inputValue = e.target.value;
                                        setOfferAmount(inputValue);
                                        setIsAmountValid(inputValue >= 0 && inputValue <= 10000000); // Assuming the valid range is 0 to 10000000
                                    }}
                                    className={`mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${!isAmountValid && 'border-red-500'}`}
                                />
                                {!isAmountValid && <p className="text-red-500 text-xs mt-1">Please enter a valid amount.</p>}
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    <b>Message (optional)</b>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={offerMessage}
                                    onChange={(e) => setOfferMessage(e.target.value)}
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    onClick={handleFormSubmit}
                                    className={`inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out ${!isAmountValid && 'cursor-not-allowed opacity-50'}`}
                                    disabled={!isAmountValid}
                                >
                                    Submit Offer
                                </button>
                                {showPopup && (
                                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                        <div className="bg-white p-8 rounded shadow-md relative">
                                            <button onClick={() => setShowPopup(false)} className="absolute top-0 right-0 p-2 mb-2 hover:text-red-600 transition duration-300">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                            <h2 className="text-lg font-bold mb-4 mt-4 text-center">Contacting our management team, we will reach out to you</h2>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}


{/* Buy Now Popup */}
{isBuyNowPopupOpen && (
    <div className="fixed inset-0 z-20 bg-black bg-opacity-20 flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white p-10 border border-green-400 rounded-lg shadow-lg w-4/5 max-w-lg relative z-10">
                <button onClick={closeBuyNowPopup} className="absolute top-0 right-0 p-2 text-black hover:text-red-600 transition duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="modal">
                    <div className="modal-content">
                        <h2 className="text-2xl font-bold mb-6 text-center">Buy Now</h2>
                        <form className="max-w-md mx-auto">
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    <b>Name</b>
                                    <input
                                        type="text"
                                        value={ownerName}
                                        onChange={(e) => {
                                            const inputValue = e.target.value;
                                            const isValid = /^[a-zA-Z]*$/.test(inputValue);
                                            setOwnerName(inputValue);
                                            setIsNameValid(isValid); // Track name validity
                                        }}
                                        required
                                        className={`w-full h-10 border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500 ${!isNameValid && 'border-red-500'}`}
                                    />
                                    {!isNameValid && ownerName.length > 0 && <p className="text-red-500 text-xs mt-1">Add only characters</p>}
                                </label>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    <b>Email</b>
                                    <input
                                        type="email"
                                        value={ownerEmail}
                                        onChange={(e) => {
                                            const inputValue = e.target.value;
                                            const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
                                            setOwnerEmail(inputValue);
                                            setIsEmailValid(isValid); // Track email validity
                                        }}
                                        required
                                        className={`w-full h-10 border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500 ${!isEmailValid && 'border-red-500'}`}
                                    />
                                    {!isEmailValid && ownerEmail.length > 0 && <p className="text-red-500 text-xs mt-1">Please enter a valid email address.</p>}
                                </label>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    <b>Phone Number</b>
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
                                            setIsContactValid(isValid); // Track contact number validity
                                        }}
                                        required
                                        className={`w-full h-10 border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500 ${!isContactValid && 'border-red-500'}`}
                                    />
                                    {!isContactValid && ownerContact.length > 0 && <p className="text-red-500 text-xs mt-1">Please enter a valid 10-digit numeric contact.</p>}
                                </label>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    onClick={handleFormSubmit}
                                    className={`inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out ${(!isNameValid || !isEmailValid || !isContactValid) && 'cursor-not-allowed opacity-50'}`}
                                    disabled={!isNameValid || !isEmailValid || !isContactValid} // Disable button if any field is invalid
                                >
                                    Buy Now
                                </button>
                                {showPopup && (
                                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                        <div className="bg-white p-8 rounded shadow-md relative">
                                            <button onClick={() => setShowPopup(false)} className="absolute top-0 right-0 p-2 mb-2 hover:text-red-600 transition duration-300">
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                            <h2 className="text-lg font-bold mb-4 mt-4 text-center">Contacting our management team, we will reach out to you</h2>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}



            <Footer />
            <Switcher />
        </>
    );
}
