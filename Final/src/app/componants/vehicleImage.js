'use client';
import { useSession } from 'next-auth/react';
import Image from "next/image";
import { useState } from "react";
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function VehicleImage({ vehicle }) {
    const { interiorImages = [], frontImages = [], sideImages = [], backImages = [] } = vehicle || {};
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isWishlist, setIsWishlist] = useState(false);
    const session = useSession();
    const openLightbox = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    };

    const goToPrevious = () => {
        setPhotoIndex((photoIndex + getAllImages().length - 1) % getAllImages().length);
    };

    const goToNext = () => {
        setPhotoIndex((photoIndex + 1) % getAllImages().length);
    };

    const toggleWishlist = () => {
        setIsWishlist(!isWishlist);
    };

    const getAllImages = () => [...frontImages, ...interiorImages, ...sideImages, ...backImages];

    // Function to handle image URL formatting
    const formatImagePath = (path) => {
        return path.replace(/\\/g, '/').replace(/\//g, '/');
    };

    // Function to generate the correct image URL
    const getImagePath = (imageName) => {
        // Check if the imageName starts with 'http' or '/api/images/', if so, return it as is
        if (imageName.startsWith('http') || imageName.startsWith('/api/images/')) {
            return imageName;
        }
        // Otherwise, append the base URL and format the image path
        return `http://51.79.225.217:5001/${formatImagePath(imageName)}`;
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
        <div>
            <div className="relative overflow-hidden" onClick={() => openLightbox(0)}>
                {frontImages[0] && (
                    <Image
                        src={getImagePath(frontImages[0])}
                        alt=""
                        width={826}
                        height={800}
                        priority
                        style={{ objectFit: 'cover', cursor: 'pointer' }}
                    />
                )}
                <div className="absolute top-4 end-4">
                    <button onClick={() => handleAddToWishlist(vehicle)} className="flex-none flex items-center justify-center w-9 h-9 rounded-md bg-white border dark:bg-black border text-gray-200 dark:text-black-200 hover:text-red-500 dark:hover:text-red-500" type="button" aria-label="Like">
                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-left mt-2">
                {frontImages.map((image, index) => (
                    <div key={index} className="relative overflow-hidden mx-1" onClick={() => openLightbox(index)}>
                        <Image
                            src={getImagePath(image)}
                            alt=""
                            width={200}
                            height={150}
                            objectFit="cover"
                            priority
                            className="cursor-pointer"
                        />
                        <div className="absolute inset-0 bg-slate-900/70 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                    </div>
                ))}
                {frontImages.length > 4 && (
                    <div className="relative overflow-hidden mx-1" onClick={() => openLightbox(4)}>
                        <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-4xl">+</span>
                        </div>
                    </div>
                )}
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={getImagePath(getAllImages()[photoIndex])}
                    nextSrc={getImagePath(getAllImages()[(photoIndex + 1) % getAllImages().length])}
                    prevSrc={getImagePath(getAllImages()[(photoIndex + getAllImages().length - 1) % getAllImages().length])}
                    onCloseRequest={closeLightbox}
                    onMovePrevRequest={goToPrevious}
                    onMoveNextRequest={goToNext}
                />
            )}
    <ToastContainer />
        </div>
        
    );

}
