// Import React and other necessary modules
'use client'
import React from 'react';
import Head from 'next/head';
import Navbar from "../componants/navbar"; // Assuming you have a "navbar.js" file in the "components" folder
import Switcher from "../componants/switcher"; // Assuming you have a "switcher.js" file in the "components" folder
import Footer from "../componants/footer"; // Assuming you have a "footer.js" file in the "components" folder
import { TypeAnimation } from 'react-type-animation';

// Define the TextAnimation component
export default function TextAnimation(){
    return(
        <>
            <Head>
                <title>Electric Battery Charging | Your Company Name</title>
                {/* Additional meta tags, stylesheets, etc. */}
            </Head>
            <Navbar />
            <Switcher />
            <div className="container mx-auto px-4 py-8 pt-20">
                <h1 className="font-semibold text-gray-800 text-4xl mb-6">Mechanic Lane: Electric Battery Charging</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="font-semibold text-gray-800 text-2xl mb-4">Standard Charging</h2>
                        <p className="text-gray-600 mb-4">Fast and reliable charging for everyday use.</p>
                        <TypeAnimation
                            sequence={[
                                'Electric Cars',
                                1000,
                                'Electric Bikes',
                                1000
                            ]}
                            wrapper="span"
                            speed={40}
                            style={{ fontSize: '1rem', display: 'inline-block' }}
                            repeat={Infinity}
                            cursor={false}
                        />
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="font-semibold text-gray-800 text-2xl mb-4">Fast Charging</h2>
                        <p className="text-gray-600 mb-4">Quick charging for when you're on the go.</p>
                        <TypeAnimation
                            sequence={[
                                'Electric Scooters',
                                1000,
                                'Electric Autos',
                                1000
                            ]}
                            wrapper="span"
                            speed={40}
                            style={{ fontSize: '1rem', display: 'inline-block' }}
                            repeat={Infinity}
                            cursor={false}
                        />
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="font-semibold text-gray-800 text-2xl mb-4">Rapid Charging</h2>
                        <p className="text-gray-600 mb-4">Ultra-fast charging for commercial and heavy-duty vehicles.</p>
                        <TypeAnimation
                            sequence={[
                                'Electric Tractors',
                                1000,
                                'Electric Drones',
                                1000
                            ]}
                            wrapper="span"
                            speed={40}
                            style={{ fontSize: '1rem', display: 'inline-block' }}
                            repeat={Infinity}
                            cursor={false}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
