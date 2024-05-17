'use client'
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../componants/footer";
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";

export default function IndexFour() {
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [startTime, setStartTime] = useState({ hour: "09", minute: "00", period: "AM" });
  const [endDate, setEndDate] = useState("");
  const [enableHours, setEnableHours] = useState(false);
  const [hours, setHours] = useState(1);
  const [location, setLocation] = useState("");
  const [moreThanOneDay, setMoreThanOneDay] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const router = useRouter();
//  const session = useSession();
const { data: session, status } = useSession();

useEffect(() => {
  // Fetch user details when session changes and session is available
  if (session && session.user) {
    fetchUserDetails();
  }
}, [session]);

useEffect(() => {
  // Check if session loading is complete and user information is not available
  if (status === "loading") {
    console.log("Session loading...");
  } else if (!session || !session.user) {
    console.error('User session or user information is not available');
    router.push('/auth-login'); 
  }
}, [session, status, router]);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    if (moreThanOneDay && endDate < e.target.value) {
      setEndDate(e.target.value);
    }
  };

  const handleStartTimeChange = (e) => {
    const { name, value } = e.target;
    setStartTime({
      ...startTime,
      [name]: value
    });
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const toggleHoursSlider = () => {
    setEnableHours(!enableHours);
    // Disable more than one day option when selecting hours
    setMoreThanOneDay(false);
    setEndDate(""); // Reset end date when selecting hours
  };

  const toggleMoreThanOneDay = () => {
    setMoreThanOneDay(!moreThanOneDay);
    setEndDate(""); // Reset end date when toggling
    setEnableHours(false); // Disable hours when toggling
  };

  const decrementHours = () => {
    if (hours > 1) {
      setHours(hours - 1);
    }
  };

  const incrementHours = () => {
    if (hours < 24) {
      setHours(hours + 1);
    }
  };

  const locationOptions = [
    "Pune",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    // Add more options as needed
  ];

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // Function to calculate price based on rental duration and other factors
  const calculatePrice = async () => {
    if (enableHours) {
      // Calculate price for hours
      const price = calculatePriceForHours(hours);
      return price;
    } else {
      // Calculate price for days
      const price = await calculatePriceForDays(startDate, endDate);
      return price;
    }
  };

  // Function to calculate price for hours rental
  const calculatePriceForHours = (hours) => {
    // Your logic to calculate price based on the number of hours
    // For example:
    const hourlyRate = 10; // Example hourly rate
    return hours * hourlyRate;
  };

  const calculatePriceForDays = async (startDate, endDate) => {
    // Your logic to calculate price based on the start date and end date
    // For example:
    const oneDayPrice = 10; // Example price for one day
    // Assuming startDate and endDate are in the correct format, you can calculate the number of days
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDifference = Math.abs(end.getTime() - start.getTime());
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return oneDayPrice * daysDifference;
  };

  // Function to fetch user details using session information
  const fetchUserDetails = async () => {
    try {
      const userResponse = await fetch(`http://51.79.225.217:5000/user?name=${session.user.name}`);
      if (!userResponse.ok) {
        throw new Error('Failed to fetch user details');
      }
      const userData = await userResponse.json();
      setUserDetails(userData); // Set user details in state
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  // Define a function to handle form submission
  const handleFormSubmit = async () => {
    try {
      // Check if session or user information is not available
      if (!session || !session.user) {
        console.error('User session or user information is not available');
        return;
      }

      // Fetch user details using session information
      const userResponse = await fetch(`http://51.79.225.217:5000/user?name=${session.user.name}`);
      if (!userResponse.ok) {
        throw new Error('Failed to fetch user details');
      }
      const userData = await userResponse.json();
      const userId = userData._id; // Extract the user ID from userData

      // Check if user ID is available
      if (!userId) {
        console.error('User ID not available');
        return;
      }

      // Format the startTime field as a string
      const formattedStartTime = `${startTime.hour}:${startTime.minute} ${startTime.period}`;

      // Calculate the price
      const price = enableHours ? calculatePriceForHours(hours) : await calculatePriceForDays(startDate, endDate);

      // Prepare the data object to send in the request body
      const formData = {
        userId, // Include the user ID
        startDate,
        startTime: formattedStartTime, // Use the formatted startTime
        endDate,
        enableHours,
        hours,
        location,
        moreThanOneDay,
        price,
        // Add other relevant form data fields here
      };

      // Make a POST request to the /api/rentals endpoint with the form data
      const apiResponse = await axios.post('http://51.79.225.217:5000/api/rentals', formData);

      // Handle the response if needed
      console.log(apiResponse.data); // Log the response data
      toast.success('Form submitted successfully');

      // Optionally, you can redirect the user to another page after successful submission
      window.location.href = ('/rent-map'); // Assuming you're using Next.js router
    } catch (error) {
      // Handle errors if the request fails
      toast.error('Error submitting form');
      console.error('Error submitting form:', error);
    }
  };


  return (
    <>
      <Navbar />
      <section className="py-20 bg-gray-100" style={{ backgroundImage: "url('/images/bg/rentals.jpg')" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-black">Select Pickup Date and Time</h2>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-700 text-sm font-bold mb-2">Start Date</label>
              <input
                type="date"
                value={startDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={handleStartDateChange}
                className="w-full border border-gray-300 rounded px-4 py-2 mb-2 text-gray-700 dark:text-gray-700"
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">Start Time</label>
              <div className="flex">
                <input
                  type="number"
                  name="hour"
                  value={startTime.hour}
                  min="1"
                  max="12"
                  onChange={handleStartTimeChange}
                  className="w-1/4 border border-gray-300 rounded-l px-4 py-2 mb-4 mr-1 text-gray-700 dark:text-gray-700"
                />
                <span className="flex items-center border border-gray-300 rounded-r px-4 mb-4 mr-1">:</span>
                <input
                  type="number"
                  name="minute"
                  value={startTime.minute}
                  min="0"
                  max="59"
                  onChange={handleStartTimeChange}
                  className="w-1/4 border border-gray-300 rounded-l px-4 py-2 mb-4 mr-1 text-gray-700 dark:text-gray-700"
                />
                <select
                  name="period"
                  value={startTime.period}
                  onChange={handleStartTimeChange}
                  className="w-1/4 border border-gray-300 rounded-l px-4 py-2 mb-4 text-gray-700 dark:text-gray-700"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              {!enableHours && (
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-green-500"
                    checked={moreThanOneDay}
                    onChange={toggleMoreThanOneDay}
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-700">Do you want a car for more than one day?</span>
                </label>
              )}
              {moreThanOneDay && (
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-700 text-sm font-bold mb-2 ">End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    min={startDate} // Set min date to the start date
                    onChange={handleEndDateChange}
                    className="w-full border border-gray-300 rounded px-4 py-2 mb-4 text-gray-700 dark:text-gray-700"
                  />
                </div>
              )}
            </div>
            {!moreThanOneDay && (
              <div className="mb-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-green-500"
                    checked={enableHours}
                    onChange={toggleHoursSlider}
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-700">Select Hours</span>
                </label>
                {enableHours && (
                  <div className="flex items-center mb-4">
                    <button onClick={decrementHours} className="px-2 py-1 bg-gray-200 rounded-full mr-2">-</button>
                    <input
                      type="range"
                      min="1"
                      max="24"
                      value={hours}
                      onChange={(e) => setHours(parseInt(e.target.value))}
                      className="w-full appearance-none"
                      style={{
                        background: 'linear-gradient(to right, #68d391 0%, #68d391 ' + ((hours / 24) * 100) + '%, #e2e8f0 ' + ((hours / 24) * 100) + '%, #e2e8f0 100%)'
                      }}
                    />
                    <button onClick={incrementHours} className="px-2 py-1 bg-gray-200 rounded-full ml-2">+</button>
                    <div className="w-12 text-center ml- text-gray-700 dark:text-gray-700">{hours} hr</div>
                  </div>
                )}
              </div>
            )}
            <h2 className="block text-gray-700 dark:text-gray-700 text-sm font-bold mb-2">Location</h2>
            <select
              value={location}
              onChange={handleLocationChange}
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4 text-gray-700 dark:text-gray-700"
            >
              <option value="">Select location</option>
              {locationOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button className="block w-full bg-green-500 text-white py-3 rounded hover:bg-green-600" onClick={handleFormSubmit}>
              Submit Form
            </button>
          </div>
        </div>
      </section>
      <Footer />
      <Switcher />
      <ToastContainer />
    </>
  );
}

