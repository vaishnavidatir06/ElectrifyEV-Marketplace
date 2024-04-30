'use client';
import Link from "next/link"; // Import NextLink instead of Link
import { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../componants/footer";
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";



import { FiChevronLeft, FiChevronRight, MdDirectionsCar, MdSettingsInputComponent, MdTune } from '../assets/icons/vander';


export default function Grid() {
    const [filterBattery, setFilterBattery] = useState("");
    const [filterBrand, setFilterBrand] = useState("");
    const [filterLocation, setFilterLocation] = useState("");
    const [filterColor, setFilterColor] = useState("");
    const [filterPrice, setFilterPrice] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredDrones, setFilteredDrones] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dronesPerPage] = useState(6);

    useEffect(() => {
        //        filterDrones();
    }, [searchQuery, filterBattery, filterBrand, filterLocation, filterColor, filterPrice]);



    const filterDrones = async () => {
        try {
            const response = await fetch('http://51.79.225.217:5001/api/vehicles/edrone');
            const data = await response.json();
            console.log("Fetched data:", data); // Log the fetched data

            const filtered = data.filter((edrone) => {
                const matchesSearchQuery =
                    edrone.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    edrone.batteryPower.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    edrone.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    edrone.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    edrone.price.value.toString().includes(searchQuery);
                const matchesFilters =
                    (!filterBattery || edrone.batteryPower.toLowerCase() === filterBattery.toLowerCase()) &&
                    (!filterBrand || edrone.brand.toLowerCase() === filterBrand.toLowerCase()) &&
                    (!filterLocation || edrone.location.toLowerCase() === filterLocation.toLowerCase()) &&
                    (!filterColor || edrone.color.toLowerCase() === filterColor.toLowerCase()) &&
                    (!filterPrice || edrone.price.value <= parseInt(filterPrice));
                return matchesSearchQuery && matchesFilters;
            });

            setFilteredDrones(filtered);
        } catch (error) {
            console.error("Error fetching drone data:", error);
        }
    };

    useEffect(() => {
        filterDrones();
    }, []);




    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleBatteryChange = (e) => {
        setFilterBattery(e.target.value);
    }

    const handleBrandChange = (e) => {
        setFilterBrand(e.target.value);
    }

    const handleLocationChange = (e) => {
        setFilterLocation(e.target.value);
    }

    const handleColorChange = (e) => {
        setFilterColor(e.target.value);
    }

    const handlePriceChange = (e) => {
        setFilterPrice(e.target.value);
    }



    const indexOfLastDrone = currentPage * dronesPerPage;
    const indexOfFirstDrone = indexOfLastDrone - dronesPerPage;
    const currentDrones = filteredDrones.slice(indexOfFirstDrone, indexOfLastDrone);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


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
                style={{ backgroundImage: "url('/images/bg/riyal.jpeg')" }}
                className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container">
                    <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Find Your Dream eDrone</h3>


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
                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap">
                            <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                                <label htmlFor="Battery" className="font-semibold mb-1 mr-2 text-black">
                                    Battery:
                                </label>
                                <input
                                    type="range"
                                    id="Battery"
                                    min="0"
                                    max="100000"
                                    value={filterBattery}
                                    onChange={handleBatteryChange}
                                    className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1 text-black"
                                />
                                <span className="ml-2 text-black">{filterBattery}mAh</span>
                            </div>

                            {/* Add more filter options here */}
                            <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                                <label htmlFor="Brand" className="font-semibold mb-1 mr-2 text-black">
                                    Brand:
                                </label>
                                <select
                                    name="Brand"
                                    id="Brand"
                                    value={filterBrand}
                                    onChange={handleBrandChange}
                                    className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1 text-black"
                                >
                                    <option value="" className="text-black">All</option>
                                    <option value="Garuda" className="text-black">Garuda</option>
                                    <option value="Ideaforge" className="text-black">Ideaforge</option>
                                    <option value="Marut" className="text-black">Marut</option>
                                    <option value="IG" className="text-black">IG</option>
                                    <option value="Tsaw" className="text-black">Tsaw</option>
                                    <option value="Riyal" className="text-black">Riyal</option>ss
                                    {/* Add more options */}
                                </select>
                            </div>

                            <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                                <label htmlFor="Location" className="font-semibold mb-1 mr-2 text-black">
                                    Location:
                                </label>
                                <select
                                    name="Location"
                                    id="Location"
                                    value={filterLocation}
                                    onChange={handleLocationChange}
                                    className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1 text-black"
                                >
                                    <option value="" className="text-black">All</option>
                                    <option value="Mumbai" className="text-black">Mumbai</option>
                                    <option value="Pune" className="text-black">Pune</option>
                                    <option value="Delhi" className="text-black">Delhi</option>
                                    <option value="Bangalore" className="text-black">Bangalore</option>
                                    {/* Add more options */}
                                </select>
                            </div>

                            <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                                <label htmlFor="Color" className="font-semibold mb-1 mr-2 text-black">
                                    Color:
                                </label>
                                <select
                                    name="Color"
                                    id="Color"
                                    value={filterColor}
                                    onChange={handleColorChange}
                                    className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1 text-black"
                                >
                                    <option value="" className="text-black">All</option>
                                    <option value="Multicolour" className="text-black">Multicolour</option>
                                    <option value="Blue" className="text-black">Blue</option>
                                    <option value="Grey" className="text-black">Grey</option>
                                    {/* Add more options */}
                                </select>
                            </div>

                            <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex flex-wrap items-center">
                                <label htmlFor="Price" className="font-semibold mb-1 mr-2 text-black">
                                    Price:
                                </label>
                                <input
                                    type="range"
                                    id="Price"
                                    min="0"
                                    max="1000000"
                                    value={filterPrice}
                                    onChange={handlePriceChange}
                                    className="border-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:ring focus:ring-green-200 dark:focus:ring-green-700 rounded-md p-1 text-black"
                                />
                                <span className="ml-2 text-black">${filterPrice}</span>
                            </div>
                        </div>
                    </div>
                    {/* End of Filter Sidebar */}





                    {/* Searched Car Display */}
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                        {currentDrones.map((edrone, index) => (
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
                    <div className="container">
                        <div className="lg:col-span-9 md:col-span-10 col-span-11">
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">


                                {currentDrones.map((vehicle) => (
                                    <Link href={`/vehicle-detail?id=${vehicle._id}`} key={vehicle._id}>
                                        <div className="group relative rounded-xl text-black dark:text-white overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                                            <div className="relative">
                                                {vehicle.frontImagesBase64 && vehicle.frontImagesBase64.length > 0 && (
                                                    <img src={`data:image/jpeg;base64,${vehicle.frontImagesBase64[0]}`} alt="Front View" className="h-40 w-auto" />
                                                )}
                                            </div>
                                            <div className="absolute top-4 end-4">
                                                <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md bg-white border text-black-300 hover:text-red-500" type="button" aria-label="Like">
                                                    <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                                    </svg>
                                                </button>
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
                                                    <li className="flex items-center">
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
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>


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
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">3</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="w-10 h-10 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm dark:shadow-gray-700 hover:border-green-600 dark:hover:border-green-600 hover:bg-green-600 dark:hover:bg-green-600">
                                            <FiChevronRight className="text-[20px]" />
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>




                </div>
            </section>
            <Footer />
            <Switcher />
            <ToastContainer />

        </>
    )
}


