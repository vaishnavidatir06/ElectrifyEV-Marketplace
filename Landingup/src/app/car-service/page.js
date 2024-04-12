// /pages/car-service.js
import React from 'react';
import Head from 'next/head';
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";

const CarServicePage = () => {
  return (
    <div>
      <Head>
        <title>Emergency Assistance Services For Car</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="bg-cover bg-center bg-opacity-20 min-h-screen" style={{backgroundImage: "url('/images/bg/b17.jpg')"}}>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-3xl font-bold mb-4">Emergency Assistance Services For Car</h1>
            <p>Add your car service content here...</p>
          </div>
        </div>
      </div>
</div>
      <Footer />
      <Switcher />
    </div>
  );
};

export default CarServicePage;
