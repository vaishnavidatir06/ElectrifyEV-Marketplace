// ./src/app/contact/page.js

"use client"; // Mark the parent component as a client component
// ./src/app/contact/page.js

import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../componants/navbar';
import Switcher from '../componants/navbar';
import Footer from '../componants/footer';
import { FiHexagon } from '../assets/icons/vander';
import { conatctDetails } from '../data/data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        comments: ''
    });
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true); // Start submission process
            try {
                const response = await axios.post('http://51.79.225.217:5000/api/contact', formData);
                setMessage(response.data.message);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    comments: ''
                });
                setErrors({});
                toast.success(response.data.message);
            } catch (error) {
                setMessage('An error occurred. Please try again later.');
                toast.error('An error occurred. Please try again later.');
            }
            setIsSubmitting(false); // Submission process completed
        }
    };

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
            isValid = false;
        }

        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required';
            isValid = false;
        }

        if (!formData.comments.trim()) {
            errors.comments = 'Comments is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    return (
        <>
            <Navbar />
            <ToastContainer />
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-7 md:col-span-6">
                            <Image
                                src="/images/svg/contact.svg"
                                alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>

                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="lg:me-5">
                                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                                    <h3 className="mb-6 text-2xl leading-normal font-medium">Get in touch!</h3>

                                    <form onSubmit={handleSubmit}>
                                        <div className="grid lg:grid-cols-12 lg:gap-6">
                                            <div className="lg:col-span-6 mb-5">
                                                <label htmlFor="name" className="font-medium">
                                                    Your Name
                                                </label>
                                                <input
                                                    name="name"
                                                    id="name"
                                                    type="text"
                                                    className="form-input mt-2"
                                                    placeholder="Name "
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                                {errors.name && <p className="text-red-500">{errors.name}</p>}
                                            </div>

                                            <div className="lg:col-span-6 mb-5">
                                                <label htmlFor="email" className="font-medium">
                                                    Your Email
                                                </label>
                                                <input
                                                    name="email"
                                                    id="email"
                                                    type="email"
                                                    className="form-input mt-2"
                                                    placeholder="Email "
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                                {errors.email && <p className="text-red-500">{errors.email}</p>}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1">
                                            <div className="mb-5">
                                                <label htmlFor="subject" className="font-medium">
                                                    Your Question
                                                </label>
                                                <input
                                                    name="subject"
                                                    id="subject"
                                                    className="form-input mt-2"
                                                    placeholder="Subject "
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                />
                                                {errors.subject && <p className="text-red-500">{errors.subject}</p>}
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="comments" className="font-medium">
                                                    Your Comment
                                                </label>
                                                <textarea
                                                    name="comments"
                                                    id="comments"
                                                    className="form-input mt-2 textarea"
                                                    placeholder="Message "
                                                    value={formData.comments}
                                                    onChange={handleChange}
                                                ></textarea>
                                                {errors.comments && <p className="text-red-500">{errors.comments}</p>}
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            id="submit"
                                            name="send"
                                            className="btn bg-green-600 hover:bg-green-700 text-white rounded-md"
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Send Message'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container lg:mt-24 mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
                        {conatctDetails.map((item, index) => {
                            const Icon = item.Icon;
                            return (
                                <div className="text-center px-6" key={index}>
                                    <div className="relative overflow-hidden text-transparent -m-3">
                                        <FiHexagon className="h-32 w-32 fill-green-600/5 mx-auto" />
                                        <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                            <Icon width={30} height={30} />
                                        </div>
                                    </div>

                                    <div className="content mt-7">
                                        <h5 className="title h5 text-xl font-medium">{item.title}</h5>
                                        <div className="mt-5">
                                            <Link
                                                href="tel:+152534-468-854"
                                                className="btn btn-link text-green-600 hover:text-green-600 "
                                            >
                                                {item.contact}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <Footer />
            <Switcher />
        </>
    );
}
