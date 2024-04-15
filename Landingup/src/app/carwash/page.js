
import React from "react";
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";

export default function Home() {

  const vehicles = [
    "Car",
    "Scooter",
    "Tractor",
    "Auto",
    // Add more options as needed
  ];


  return (
    <>
      

      <Navbar />

      <div className="container mx-auto pt-20 pb-12">
        <h1 className="text-4xl font-semibold mb-8 text-center text-green-600 pt-10">Electrify Wash</h1>

        <div className="grid grid-cols-1 text-center mt-10">
                        <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-green-600">New look, new feel</h3>
                    </div>

                   
            <select
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
            >
              <option value="">Select Vehicle</option>
              {vehicles.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>     

            <div className="grid grid-cols-1 text-center mt-10">
          <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-green-600">Wash Packages</h3>
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          <div className="group relative rounded-xl bg-slate-200 dark:bg-slate-900 overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">Basic Wash</h4>
              <p className="text-gray-600">Basic cleaning service</p>
              <p className="text-green-600 font-semibold">$10</p>
            </div>
          </div>
          <div className="group relative rounded-xl bg-slate-200 dark:bg-slate-900 overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">Standard Wash</h4>
              <p className="text-gray-600">Standard cleaning service</p>
              <p className="text-green-600 font-semibold">$20</p>
            </div>
          </div>
          <div className="group relative rounded-xl bg-slate-200 dark:bg-slate-900 overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">Comprehensive Wash</h4>
              <p className="text-gray-600">Comprehensive cleaning service</p>
              <p className="text-green-600 font-semibold">$30</p>
            </div>
          </div>
        </div>


        </div>
      

      <Footer />

      <Switcher />
      </>
  );
}
