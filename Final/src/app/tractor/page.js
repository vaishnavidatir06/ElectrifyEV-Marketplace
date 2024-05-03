'use client';
import { useSession } from 'next-auth/react';
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../componants/footer"; // Corrected import statement
import Navbar from "../componants/navbar"; // Corrected import statement
import Switcher from "../componants/switcher"; // Corrected import statement
import { FiChevronLeft, FiChevronRight, MdDirectionsCar, MdSettingsInputComponent, MdTune } from '../assets/icons/vander';

export default function Grid() {
    const [filteredTractors, setFilteredTractors] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterBrand, setFilterBrand] = useState("");
    const [filterLocation, setFilterLocation] = useState("");
    const [filterBatteryPower, setFilterBatteryPower] = useState("");
    const [filterColor, setFilterColor] = useState("");
    const [filterKilometresDriven, setFilterKilometresDriven] = useState("");
    const [filterPrice, setFilterPrice] = useState("");
    const session = useSession();

    useEffect(() => {
        filterTractors();
    }, [searchQuery, filterBrand, filterLocation, filterBatteryPower, filterColor, filterKilometresDriven, filterPrice]);

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleBrandChange = (e) => {
        setFilterBrand(e.target.value);
        applyFilters();
    };

    const handleLocationChange = (e) => {
        setFilterLocation(e.target.value);
        applyFilters();
    };

    const handleBatteryPowerChange = (e) => {
        setFilterBatteryPower(e.target.value);
        applyFilters();
    };

    const handleColorChange = (e) => {
        setFilterColor(e.target.value);
        applyFilters();
    };

    const handleKilometresDrivenChange = (e) => {
        setFilterKilometresDriven(e.target.value);
        applyFilters();
    };

    const handlePriceChange = (e) => {
        setFilterPrice(e.target.value);
        applyFilters();
    };

    const filterTractors = async () => {
        try {
            const response = await fetch('http://51.79.225.217:5001/api/vehicles/etractor');
            const data = await response.json();
            if (Array.isArray(data)) {
                setFilteredTractors(data);
            } else {
                console.error('Data received from API is not an array:', data);
            }
        } catch (error) {
            console.error('Error fetching etractors:', error);
        }
    };

    const applyFilters = () => {
        const filtered = filteredTractors.filter((tractor) => {
            const matchesSearchQuery =
                tractor.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tractor.kilometresDriven.toString().includes(searchQuery) ||
                tractor.batteryPower.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tractor.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tractor.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tractor.price.value.toString().includes(searchQuery);

            const matchesFilters =
                (!filterBrand || tractor.brand.toLowerCase() === filterBrand.toLowerCase()) &&
                (!filterLocation || tractor.location.toLowerCase() === filterLocation.toLowerCase()) &&
                (!filterBatteryPower || tractor.batteryPower.toLowerCase() === filterBatteryPower.toLowerCase()) &&
                (!filterColor || tractor.color.toLowerCase() === filterColor.toLowerCase()) &&
                (!filterKilometresDriven || tractor.kilometresDriven <= parseInt(filterKilometresDriven)) &&
                (!filterPrice || tractor.price.value <= parseInt(filterPrice));

            return matchesSearchQuery && matchesFilters;
        });

        setFilteredTractors(filtered);
    };

    const handleAddToWishlist = async (vehicle) => {
        try {
            if (!session || !session.data || !session.data.user) {
                throw new Error('User is not authenticated');
            }

            const { name, email } = session.data.user;

            // Fetch user ID from the /user endpoint
            const userResponse = await fetch(`http://51.79.225.217:5000/user?name=${name}`);
            const userData = await userResponse.json();
            const { _id: userId } = userData; // Extract user ID

            // Use a different variable name for the wishlist response
            const wishlistResponse = await fetch('http://51.79.225.217:5000/wishlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...vehicle, name, email, userId }),
            });

            if (wishlistResponse.ok) {
                toast.success('Vehicle added to wishlist successfully!');
            } else {
                throw new Error('Failed to add vehicle to wishlist!');
            }
        } catch (error) {
            console.error('Error adding vehicle to wishlist:', error);
            toast.error(error.message || 'Failed to add vehicle to wishlist!');
        }
    };

    return (
        <>
        <Navbar navClass="navbar-white" />
    
        <section
            style={{ backgroundImage: "url('/images/bg/mahindra.jpeg')" }}
            className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container">
                <div className="grid grid-cols-1 text-center mt-10">
                    <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Find Your Dream eTractor</h3>
                </div>
            </div>
        </section>
        <div className="relative">
            <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <div className="container relative -mt-16 z-1">
            <div className="flex flex-col lg:flex-row">
                {/* Search Bar */}
                <div className="container mb-4">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        placeholder="Search..."
                        className="border border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md px-4 py-2 w-full"
                    />
                </div>
                {/* End of Search Bar */}
    
                {/* Filter Sidebar */}
                <div className="mb-20"></div>
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap ">
                    {/* Brand Filter */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                        <label htmlFor="brand" className="font-semibold mb-1 mr-2">
                            Brand:
                        </label>
                        <select
                            name="brand"
                            id="brand"
                            value={filterBrand}
                            onChange={handleBrandChange}
                            className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                        >
                            <option value="">All</option>
                            <option value="Autonxt">Autonxt</option>
                            <option value="Sonalika">Sonalika</option>
                            <option value="HAV Tractors">HAV Tractors</option>
                            <option value="Celestial">Celestial</option>
                            <option value="Tafe">Tafe</option>
                            {/* Add more options */}
                        </select>
                    </div>
    
                    {/* Location */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                        <label htmlFor="Location" className="font-semibold mb-1 mr-2">
                            Location:
                        </label>
                        <select
                            name="Location"
                            id="Location"
                            value={filterLocation}
                            onChange={handleLocationChange}
                            className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                        >
                            <option value="">All</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Bangalore">Bangalore</option>
                            {/* Add more options */}
                        </select>
                    </div>
    
                    {/* Color */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                        <label htmlFor="color" className="font-semibold mb-1 mr-2">
                            Color:
                        </label>
                        <select
                            name="color"
                            id="color"
                            value={filterColor}
                            onChange={handleColorChange}
                            className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                        >
                            <option value="">All</option>
                            <option value="Red">Red</option>
                            <option value="Silver">Green</option>
                            <option value="Gold">Orange</option>
                            <option value="Blue">Blue</option>
                            {/* Add more options */}
                        </select>
                    </div>
    
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                        <label htmlFor="Battery" className="font-semibold mb-1 mr-2">
                            Battery:
                        </label>
                        <input
                            type="range"
                            id="Battery"
                            min="0"
                            max="500"
                            value={filterBatteryPower}
                            onChange={handleBatteryPowerChange}
                            className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                        />
                    </div>
    
                    {/* Kilometres Driven */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                        <label htmlFor="kilometresDriven" className="font-semibold mb-1 mr-2">
                            Kilometres Driven:
                        </label>
                        <input
                            type="range"
                            id="kilometresDriven"
                            min="0"
                            max="100000"
                            value={filterKilometresDriven}
                            onChange={handleKilometresDrivenChange}
                            className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                        />
                        <span className="ml-2">{filterKilometresDriven} km</span>
                    </div>
    
                    {/* Price */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                        <label htmlFor="price" className="font-semibold mb-1 mr-2">
                            Price:
                        </label>
                        <input
                            type="range"
                            id="price"
                            min="0"
                            max="1000000"
                            value={filterPrice}
                            onChange={handlePriceChange}
                            className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                        />
                        <span className="ml-2">${filterPrice}</span>
                    </div>
                </div>
                {/* End of Filter Sidebar */}
            </div>
        </div>
        
        <section className="relative lg:py-24 py-16">
            <div className="container">
                <div className="lg:col-span-9 md:col-span-10 col-span-11">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    {filteredTractors.map((vehicle) => (
                        <div className="group relative rounded-xl text-black dark:text-white overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl" key={vehicle._id}>
                            <Link href={`/vehicle-detail?id=${vehicle._id}`}>
                                <div className="relative">
                                    {vehicle.frontImagesBase64 && vehicle.frontImagesBase64.length > 0 && (
                                        <img src={`data:image/jpeg;base64,${vehicle.frontImagesBase64[0]}`} alt="Front View" className="h-45 w-full" />
                                    )}
                                </div>
                            
                            <div className="absolute top-4 end-4">
                                <button onClick={() => handleAddToWishlist(vehicle)} className="flex-none flex items-center justify-center w-9 h-9 rounded-md bg-white border dark:bg-black border text-gray-200 dark:text-black-200 hover:text-red-500 dark:hover:text-red-500" type="button" aria-label="Like">
                                    <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-6 group-hover:bg-black-100 dark:group-hover:bg-black-100">
                                <div className="pb-6">
                                    <p className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{vehicle.brand}</p>
                                </div>
                                <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                                    <li className="flex items-center me-4">
                                        <MdDirectionsCar width={20} className="me-2 text-green-600" />
                                        <span>{vehicle.model}</span>
                                    </li>
                                    <li className="flex items-center me-4">
                                        <MdSettingsInputComponent width={20} className="me-2 text-green-600" />
                                        <span>{vehicle.transmissionType}</span>
                                    </li>
                                    <li className="flex items-center me-4">
                                        <MdTune width={20} className="me-2 text-green-600" />
                                        <span>{vehicle.kilometresDriven}</span>
                                    </li>
                                </ul>
                                <ul className="pt-6 flex justify-between items-center list-none">
                                    <li>
                                        <span className="text-slate-400">Price</span>
                                        {/* Add price separators using toLocaleString() */}
                                        <p className="text-lg font-medium">
                                            ${vehicle.price && vehicle.price.value.toLocaleString()}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            </Link>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    
        <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
            <div className="md:col-span-12 text-center">
                <nav>
                    <ul className="inline-flex items-center -space-x-px">
                        <li>
                            <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
                                <FiChevronLeft className="text-[20px]" />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" aria-current="page" className="z-10 w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-white bg-green-600 shadow-sm dark:shadow-gray-700">1</Link>
                        </li>
                        <li>
                            <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">2</Link>
                        </li>
                        <li>
                            <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">3</Link>
                        </li>
    
                        <li>
                            <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
                                <FiChevronRight className="text-[20px]" />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    
        <Footer />
        <ToastContainer />
        <Switcher />
    </>
  );
}    