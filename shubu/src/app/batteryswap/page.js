import Link from "next/link";
import React from "react";
import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import Switcher from "../componants/switcher";
import BatterySwapDetails from "../componants/BatterySwapDetails";

const BatterySwapPage = () => {
  // Dummy data for demonstration
  const batterySwapStations = [
    {
      id: "station1",
      name: "Delux Swapping Station",
      openingHours: " Mon-Sat: 9am-6pm",
      contact: "+1234567890",
      image: "/images/bg/bs.jpg",
      batteryPower: 50, // Battery power percentage (dummy data)
    },
    {
      id: "station2",
      name: "Car World Swapping Station",
      openingHours: " Mon-Sat: 9am-6pm",
      contact: "+0987654321",
      image: "/images/bg/po.jpg",
      batteryPower: 75, // Battery power percentage (dummy data)
    },
  ];

  return (
    <>
      <Navbar navClass="navbar-white" />
      <section
        style={{ backgroundImage: "url('/images/bg/po.jpg')" }}
        className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover"
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-4xl md:leading-normal leading-normal font-medium text-green-600 dark:text-green-600">
              Battery Swap Stations for Electric Vehicles
            </h3>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape overflow-hidden z-1 text-white"></div>

        <div className="container mx-auto pt-10 pb-12 max-w-screen-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:grid-cols-2 xs:grid-cols-1">
            {batterySwapStations.map((station, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-gray-300 flex flex-col"
              >
                <div className="flex-grow">
                  {/* Image */}
                  <img
                    src={station.image}
                    alt={`Battery Swap Station ${index + 1}`}
                    className="w-full h-64 md:h-auto rounded-t-lg md:rounded-l-lg md:rounded-t-none shadow-md"
                    style={{ maxHeight: "300px", height: "200px" }}
                  />
                </div>
                {/* Details */}
                <div className="p-4">
                  <BatterySwapDetails data={station} />
                  {/* Button */}
                  <div className="mt-4">
                    <Link href={`/station1`}>
                      <div class="flex justify-center">
                        <button className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out">
                          Would You Like To Swap The Battery?
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <Switcher />
    </>
  );
};

export default BatterySwapPage;
