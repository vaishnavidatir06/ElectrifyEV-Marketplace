'use client'; 
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {tractorDetails} from "../data/data";
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";



import { MdDirectionsCar, MdSettingsInputComponent, MdTune, FiChevronLeft, FiChevronRight } from '../assets/icons/vander'


export default function Grid() {
    
    const [filterType, setFilterType] = useState("");
    const [filterBrand, setFilterBrand] = useState("");
    const [filterLocation, setFilterLocation] = useState("");
    const [filtercolour, setFiltercolour] = useState("");
    const [filterkilometersDriven, setFilterkilometersDriven] = useState("");
    const [filterprice, setFilterprice] = useState("");
        const [searchQuery, setSearchQuery] = useState("");
        const [filteredProperties, setFilteredProperties] = useState([]);

        useEffect(() => {
            filterProperties();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [searchQuery, filterType, filterBrand, filterLocation, filtercolour, filterkilometersDriven, filterprice]);

        const handleSearchInputChange = (e) => {
            setSearchQuery(e.target.value);
        };


    const handleTypeChange = (e) => {
        setFilterType(e.target.value);
    }

    const handleBrandChange = (e) => {
        setFilterBrand(e.target.value);
    }
    const handleLocationChange = (e) => {
        setFilterLocation(e.target.value);
    }

    const handlecolourChange = (e) => {
        setFiltercolour(e.target.value);
    }

    const handlekilometersDrivenChange = (e) => {
        setFilterkilometersDriven(e.target.value);
    }

    const handlepriceChange = (e) => {
        setFilterprice(e.target.value);
    }


    const filterProperties = () => {
        const filtered = tractorDetails.filter((property) => {
            // Filter logic based on search query and filter selections
            const matchesSearchQuery =
                property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                property.Type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                property.kilometersDriven.toString().includes(searchQuery) ||
                property.colour.toLowerCase().includes(searchQuery.toLowerCase()) ||
                property.Location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                property.price.toString().includes(searchQuery);
            const matchesFilters =
                (!filterType || property.Type.toLowerCase() === filterType.toLowerCase()) &&
                (!filterBrand || property.name.toLowerCase() === filterBrand.toLowerCase())&&
                (!filterLocation || property.Location.toLowerCase() === filterLocation.toLowerCase())&&
                (!filtercolour|| property.colour.toLowerCase() === filtercolour.toLowerCase())&&
                (!filterkilometersDriven || property.kilometersDriven <= parseInt(filterkilometersDriven))&&
                (!filterprice || property.price <= parseInt(filterprice));
            // Add more filter conditions as needed

            return matchesSearchQuery && matchesFilters;
        });
        setFilteredProperties(filtered);
    };
    
   
  
    return(
        <>
          <Navbar navClass="navbar-white"/>
          
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
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap">
                {/* Type Filter */}
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                    <label htmlFor="type" className="font-semibold mb-1 mr-2">
                        Type:
                    </label>
                    <select
                        name="type"
                        id="type"
                        value={filterType}
                        onChange={handleTypeChange}
                        className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
                    >
                        <option value="">All</option>
                        <option value="Automatic">Automatic</option>
                        <option value="Manual">Manual</option>
                        {/* Add more options */}
                    </select>
                </div>

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
                    
                {/* colour */}
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                    <label htmlFor="colour" className="font-semibold mb-1 mr-2">
                        Colour:
                    </label>
                    <select
                        name="colour"
                        id="colour"
                        value={filtercolour}
                        onChange={handlecolourChange}
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
                {/* kilometresdriven */}
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                    <label htmlFor="kilometersDriven" className="font-semibold mb-1 mr-2">
                        Kilometres Driven:
                    </label>
                    <input
        type="range"
        id="kilometers"
        min="0"
        max="100000"
        value={filterkilometersDriven}
        onChange={handlekilometersDrivenChange}
        className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
    />
    <span className="ml-2">{filterkilometersDriven} km</span>
                </div>
                {/* price */}
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                    <label htmlFor="price" className="font-semibold mb-1 mr-2">
                        Price:
                    </label>
                    <input
        type="range"
        id="price"
        min="0"
        max="1000000" // Adjust the max value according to your maximum price
        value={filterprice} // Make sure you have a state variable named filterPrice
        onChange={handlepriceChange} // Make sure you have a corresponding handlePriceChange function
        className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1"
    />
    <span className="ml-2">${filterprice}</span>

                    </div>
            </div>
            {/* End of Filter Sidebar */}





           {/* Searched Car Display */}
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                {filteredProperties.map((item, index) => (
                    <div key={index} className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                        {/* Render each property item here */}
                         {/* <div className="p-4">
        <Image
            src={item.image}
            alt=""
            width={400}
            height={200}
            className="object-cover"
        />
        <h3 className="text-xl font-semibold mt-2">{item.name}</h3>
        <p className="text-gray-600">Model: {item.Model}</p>
        <p className="text-gray-600">Type: {item.Type}</p>
        <p className="text-gray-600">Range: {item.Range}</p>
        <p className="text-gray-600">Price: ${item.price}</p>
        {/* Add more details as needed */}
    {/* </div> */}
                        
                    </div>
                ))}
            </div>
            {/* End of Searched Car Display */}
             
                </div>
            </div>




            <section className="relative lg:py-24 py-16">
    <div className="container">
        <div className="lg:col-span-9 md:col-span-10 col-span-11">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                {filteredProperties.map((item, index) => (
                    <Link href={`/property-detail/${item.id}`} key={index}>
                        <div className="group relative rounded-xl bg-white dark:bg-slate-900 overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                            <div className="relative">
                                <Image src={item.image} alt="" width={400} height={200} style={{ width: '400px', height: '200px', objectFit: 'cover' }} priority />
                                <div className="absolute top-4 end-4">
                                <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md bg-white border text-black-300 hover:text-red-500" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
                                </div>
                            </div>
                            <div className="p-6 group-hover:bg-gray-100 dark:group-hover:bg-slate-800">
                                <div className="pb-6">
                                    <p className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{item.name}</p>
                                </div>
                                <ul className="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                                    <li className="flex items-center me-4">
                                        <MdDirectionsCar width={20} className="me-2 text-green-600" />
                                        <span>{item.Model}</span>
                                    </li>
                                    <li className="flex items-center me-4">
                                        <MdSettingsInputComponent width={20} className="me-2 text-green-600" />
                                        <span>{item.Type}</span>
                                    </li>
                                    <li className="flex items-center">
                                        <MdTune width={20} className="me-2 text-green-600" />
                                        <span>{item.Range}</span>
                                    </li>
                                </ul>
                                <ul className="pt-6 flex justify-between items-center list-none">
                                    <li>
                                        <span className="text-slate-400">Price</span>
                                        <p className="text-lg font-medium">${item.price}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
</section>

<Footer />
            <Switcher />
        </>
    )
}