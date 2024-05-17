'use client';
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../componants/footer";
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";

export default function ListSidebar() {
    const [ownerName, setOwnerName] = useState('');
    const [ownerContact, setOwnerContact] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');
    const [ownerCity, setOwnerCity] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [variant, setVariant] = useState('');
    const [location, setLocation] = useState('');
    const [rtoCode, setRtoCode] = useState('');
    const [batteryPower, setBatteryPower] = useState('');
    const [kilometresDriven, setKilometresDriven] = useState('');
    const [bodyType, setBodyType] = useState('');
    const [color, setColor] = useState('');
    const [registrationYear, setRegistrationYear] = useState('');
    const [vehicleDescription, setVehicleDescription] = useState('');
    const [interiorImages, setInteriorImages] = useState([]);
    const [frontImages, setFrontImages] = useState([]);
    const [sideImages, setSideImages] = useState([]);
    const [backImages, setBackImages] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [currentYear, setCurrentYear] = useState('');
    const [transmissionType, setTransmissionType] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [price, setPrice] = useState({ value: '', currency: '' }); // Updated to an object containing value and currency
    const [contactError, setContactError] = useState(false);
    const [isNameValid, setIsNameValid] = useState(true);
    useEffect(() => {
        const year = new Date().getFullYear();
        setCurrentYear(year);
        setRegistrationYear(year);
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 11000);
            const formData = new FormData();
            formData.append('ownerName', ownerName);
            formData.append('ownerContact', ownerContact);
            formData.append('ownerEmail', ownerEmail);
            formData.append('ownerCity', ownerCity);
            formData.append('vehicleType', vehicleType);
            formData.append('brand', brand);
            formData.append('model', model);
            formData.append('variant', variant);
            formData.append('location', location);
            formData.append('rtoCode', rtoCode);
            formData.append('batteryPower', batteryPower);
            formData.append('kilometresDriven', kilometresDriven);
            formData.append('bodyType', bodyType);
            formData.append('color', color);
            formData.append('registrationYear', registrationYear);
            formData.append('vehicleDescription', vehicleDescription);
            formData.append('transmissionType', transmissionType);
            formData.append('price[currency]', price.currency); 
            formData.append('price[value]', price.value);// Append price currency


            // Append all images
            frontImages.forEach((image) => formData.append('frontImages', image));
            sideImages.forEach((image) => formData.append('sideImages', image));
            backImages.forEach((image) => formData.append('backImages', image));
            interiorImages.forEach((image) => formData.append('interiorImages', image));

            const response = await axios.post("http://51.79.225.217:5001/api/vehicle/register", formData);

            if (response.status === 201) {
                resetFormFields();
                setShowPopup(true);
            } else {
                setError('Error registering vehicle');
            }
        } catch (error) {
            setError('Error registering vehicle');
        } finally {
            setLoading(false);
        }
    };

    const resetFormFields = () => {
        setOwnerName('');
        setOwnerContact('');
        setOwnerEmail('');
        setOwnerCity('');
        setVehicleType('');
        setBrand('');
        setModel('');
        setVariant('');
        setLocation('');
        setRtoCode('');
        setBatteryPower('');
        setKilometresDriven('');
        setBodyType('');
        setColor('');
        setRegistrationYear(currentYear);
        setVehicleDescription('');
        setInteriorImages([]);
        setFrontImages([]);
        setSideImages([]);
        setBackImages([]);
        setTransmissionType(''); // Reset transmissionType field
        setPrice({ value: '', currency: '' }); // Reset price state
    };
    

    const handleImageChange = (event, section) => {
        const files = event.target.files;
        const filesArray = Array.from(files);
        
        // Limit the number of images to 3
        const maxImages = 3;

        // Check if the total number of images exceeds the limit
        if (section === 'front' && frontImages.length + filesArray.length > maxImages) {
            alert('You can upload a maximum of 3 front-side images.');
            return;
        } else if (section === 'side' && sideImages.length + filesArray.length > maxImages) {
            alert('You can upload a maximum of 3 side images.');
            return;
        } else if (section === 'back' && backImages.length + filesArray.length > maxImages) {
            alert('You can upload a maximum of 3 back-side images.');
            return;
        } else if (section === 'interior' && interiorImages.length + filesArray.length > maxImages) {
            alert('You can upload a maximum of 3 interior images.');
            return;
        }

        // Proceed with appending files to FormData as before
        switch (section) {
            case 'front':
                setFrontImages(prevImages => [...prevImages, ...filesArray.slice(0, maxImages - prevImages.length)]);
                break;
            case 'side':
                setSideImages(prevImages => [...prevImages, ...filesArray.slice(0, maxImages - prevImages.length)]);
                break;
            case 'back':
                setBackImages(prevImages => [...prevImages, ...filesArray.slice(0, maxImages - prevImages.length)]);
                break;
            case 'interior':
                setInteriorImages(prevImages => [...prevImages, ...filesArray.slice(0, maxImages - prevImages.length)]);
                break;
            default:
                break;
        }
    };
    
    const handlePriceChange = (value) => {
        // Remove any non-numeric characters from the input
        const numericValue = value.replace(/\D/g, '');
        // Format the value with commas
        const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        // Update the state with the formatted value
        setPrice({ ...price, value: formattedValue });
    };


    const renderRtoCodeAndKilometresDriven = () => {
        if (vehicleType !== 'edrone' && vehicleType !== 'ecycle') {
            return (
                <>
                    <label className="text-gray-950">
                        RTO Code
                        <input type="text" value={rtoCode} onChange={(e) => setRtoCode(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                    </label><br/><br/>
                    <label className="text-gray-950">
                        Kilometres Driven
                        <input type="text" value={kilometresDriven} onChange={(e) => setKilometresDriven(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                    </label><br/><br/>
                </>
            );
        }
        return null;
    };

    const renderTransmissionOptions = () => {
        switch (vehicleType) {
            case 'ecar':
            case 'eauto':
            case 'etractor':
            case 'ebike':
                return (
                    <>
                        <option value="">Select Transmission Type</option>
                        <option value="Manual">Manual</option>
                        <option value="Automatic">Automatic</option>
                    </>
                );
            default:
                return null;
        }
    };

    const renderTransmissionTypeField = () => {
        if (['ecycle', 'edrone', 'etractor'].includes(vehicleType)) {
            return null;
        }

        return (
            <label className="text-gray-950">
                Transmission Type
                <select value={transmissionType} onChange={(e) => setTransmissionType(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" >
                    {renderTransmissionOptions()}
                </select>
            </label>
        );
    };

    const renderRegistrationYears = () => {
        const years = [];
        for (let i = 1995; i <= currentYear; i++) {
            years.push(i);
        }
        return years.map((year) => (
            <option key={year} value={year}>{year}</option>
        ));
    };
    
    const renderBodyTypeOptions = () => {
        if (vehicleType === 'ecar') {
            return (
                <>
                    <option value="">Select Body Type</option>
                    <option value="SUV">SUV</option>
                    <option value="MUV">MUV</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Coupe">Coupe</option>
                    <option value="Hatchback">Hatchback</option>
                </>
            );
        }
        return null;
    };

    const renderBodyTypeField = () => {
        if (vehicleType === 'ecar') {
            return (
                <label className="text-gray-950">
                    <b>Body Type</b>
                    <select value={bodyType} onChange={(e) => setBodyType(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" >
                        {renderBodyTypeOptions()}
                    </select>
                </label>
            );
        }
        return null;
    };


    return (
        <>
             <Navbar navClass="navbar-white" />
            <section className="py-20 bg-gray-950" style={{ backgroundImage: "url('/images/bg/b17.jpg')" }}>
                <div className="container mx-auto px-2">
                <div className="mx-auto bg-gray-200 rounded-lg shadow-lg p-2 mt-4 mr-20 ml-20" style={{ maxWidth: '800px' }}>
                    <div className="pt-10 flex justify-center items-center min-h-screen mt-0 flex-col">
                        <h1 className="text-center text-2xl mb-4 mt-0 text-black" ><b>Enter Vehicle details you want to sell</b></h1>
                            <div className="flex w-full">
                            <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex justify-between">
                            <div className="w-1/2 pr-4 ml-10">
                                    
                                   
                                        {/* Your first half of the form content */}
                                        <fieldset>
                            <legend className="text-black "><b>Vehicle Details</b></legend>
                            <label className="text-gray-950">
                                Vehicle Type
                                <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2">
                                    <option value="">Select Vehicle Type</option>
                                    <option value="ecar">eCar</option>
                                    <option value="ebike">eBike</option>
                                    <option value="ecycle">eBicycle</option>
                                    <option value="etractor">eTractor</option>
                                    <option value="edrone">eDrone</option>
                                    <option value="eauto">eAuto</option>
                                </select>
                            </label><br/><br/>
                            {renderRtoCodeAndKilometresDriven()}
                            <label className="text-gray-950">
                                Brand
                                <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br/><br/>
                            <label className="text-gray-950">
                                Model
                                <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br/><br/>
                            <label className="text-gray-950">
                                Variant
                                <input type="text" value={variant} onChange={(e) => setVariant(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br/><br/>
                            <label className="text-gray-950">
                                Location
                                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2"  />
                            </label><br/><br/>
                            <label className="text-gray-950">
                                Battery Power(mAh)
                                <input type="text" value={batteryPower} onChange={(e) => setBatteryPower(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" placeholder="63.5kW" />
                            </label><br/><br/>
                            <label className="text-gray-950">
                                Color
                                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2"/>
                            </label><br/><br/>
                            {renderTransmissionTypeField()}
                            {renderBodyTypeField()}
                            <label className="text-gray-950">
                                Registration Year
                                <select value={registrationYear} onChange={(e) => setRegistrationYear(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2">
                                    <option value="">Select Registration Year</option>
                                    {renderRegistrationYears()}
                                </select>
                            </label><br/><br/>

                            
                            

<label className="text-gray-950">
Price
<input 
type="text" // Change input type to text to allow manual entry
value={price.value} // Use price.value instead of price
onChange={(e) => handlePriceChange(e.target.value)} // Call handlePriceChange function
required 
className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" 
/>
</label>
<select 
value={price.currency} // Use price.currency instead of price
onChange={(e) => setPrice({ ...price, currency: e.target.value })} // Update the currency field of price
required 
className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2 text-black "
>
<option value="" className="text-black">Select Currency</option>
<option value="USD" className="text-black">USD</option>
<option value="EUR" className="text-black">EUR</option>
<option value="SGD" className="text-black">SGD</option> {/* Singapore Dollar */}
<option value="INR" className="text-black">INR</option> {/* Indian Rupee */}
<option value="SAR" className="text-black">SAR</option> 
</select>

<label className="text-gray-950">
Vehicle Description
<textarea value={vehicleDescription} onChange={(e) => setVehicleDescription(e.target.value)} className="w-full sm:w-48 h-32 border rounded-sm py-1 px-2" />
</label><br/>                     
                        </fieldset>     
                                </div>



                                <div className="w-1/2 pl-4 mr-10">
                                   
                                        {/* Your second half of the form content */}

                                        
                        <fieldset>
                            <legend className="text-black"><b>Enter your Details</b></legend>
                            <label className="text-black">
    Owner Name
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
        className={`w-full sm:w-48 h-8 border rounded-sm py-1 px-2 ${!isNameValid && 'border-red-500'}`}
    />
    {!isNameValid && ownerName.length > 0 && <p className="text-red-500">Add only characters</p>}
</label>

<label className="text-black">
    Owner Contact
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
                            <br/><br/>
                            <label className="text-black">
    Owner Email
    <input 
        type="email" 
        value={ownerEmail} 
        onChange={(e) => setOwnerEmail(e.target.value)} 
        required 
        className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" 
    />
    {ownerEmail.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ownerEmail) && <p style={{ color: 'red' }}>Please enter a valid email address.</p>}
</label><br/><br/>
                            <label className="text-gray-950">
                               Owner City
                                <input type="text" value={ownerCity} onChange={(e) => setOwnerCity(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br/><br/>


                            <legend className="text-black"><b>Upload Images</b></legend>
                            <label className="text-gray-950">
                            Add Image Of Front-side
                            <input type="file" name="image" accept="image/*" onChange={(e) => handleImageChange(e, 'front')} multiple required className="w-full border rounded-sm py-1 px-2" />
                            </label>
                            {frontImages.length > 0 && (
                                <div>
                                    <h4>Uploaded Front Images</h4>
                                    {frontImages.map((image, index) => (
                                        <p key={index}>{image.name}</p>
                                    ))}
                                </div>
                            )}
                            <br/><br/>
                            <label className="text-gray-950">
                                Add Image of left/right sides
                                <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, 'side')} multiple required className="w-full border rounded-sm py-1 px-2" />
                            </label>
                            {sideImages.length > 0 && (
                                <div>
                                    <h4>Uploaded Side Images</h4>
                                    {sideImages.map((image, index) => (
                                        <p key={index}>{image.name}</p>
                                    ))}
                                </div>
                            )}
                            <br/><br/>
                            <label className="text-gray-950">
                                Add Image of Back-Side
                                <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, 'back')} multiple required className="w-full border rounded-sm py-1 px-2" />
                            </label>
                            {backImages.length > 0 && (
                                <div>
                                    <h4>Uploaded Back Images</h4>
                                    {backImages.map((image, index) => (
                                        <p key={index}>{image.name}</p>
                                    ))}
                                </div>
                            )}
                            <br/><br/>
                            <label className="text-gray-950">
                                Add Image of Interior
                                <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, 'interior')} multiple required className="w-full border rounded-sm py-1 px-2" />
                            </label>
                            {interiorImages.length > 0 && (
                                <div>
                                    <h4>Uploaded Interior Images</h4>
                                    {interiorImages.map((image, index) => (
                                        <p key={index}>{image.name}</p>
                                    ))}
                                </div>
                            )}
                            <br/>

                        </fieldset>
                    

                                </div>
                            </div>

                            <div className="flex justify-center">
                            <button type="submit" className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full">Submit</button>
                        </div>

</form>
</div>
{showPopup && (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white p-6 rounded-lg relative">
            <button
                className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPopup(false)}
            >
                <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <h2 className="text-2xl mb-4">Vehicle Registered Successfully!</h2>
            <p>Your vehicle registration is submitted and awaiting approval.</p>
        </div>
    </div>
)}                          

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Switcher />
        </>
    );
}
