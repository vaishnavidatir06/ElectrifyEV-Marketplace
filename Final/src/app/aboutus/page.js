import React from "react";
import Navbar from "../componants/navbar";
import Switcher from "../componants/switcher";
import Footer from "../componants/footer";
import GetInTuch from "../componants/get-in-touch";
import Team from "../componants/team";
import Counter from "../componants/counter";
import { counterData } from "../data/data";

export default function Aboutus() {
  return (
    <>
      <Navbar navClass="navbar-white" />
      <section
        style={{ backgroundImage: "url('/images/bg/b15.jpg')" }}
        className="relative table w-full py-32 lg:py-36 bg-no-repeat bg-center bg-cover"
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container">
          <div className="grid grid-cols-1 text-center ">
            <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              About Us
            </h3>
            <p className="text-center text-white mt-10 text-2xl ">
            Electrify eV - Where Every Mile Sparks a Greener Future!
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center md:pb-24 pb-16">
        <h2 className="text-2xl font-bold mb-4 mt-10 text-center text-white-900 dark:text-white">
          When you buy a car from Electrify eV, you get
        </h2>
        <ul className="list-disc pl-8 mb-8 max-w-3xl mx-auto">
          <li className="mb-4 text-xl text-white-900 dark:text-white" >
            Electrify eV ensures that every car is road-ready. Each vehicle
            undergoes 140 quality checks and is refurbished with care at our
            state-of-the-art Mega Refurbishment Labs (MRL).
          </li>
          <li className="mb-4 text-xl text-white-900 dark:text-white">
            Enjoy peace of mind with our 7 Day Returns policy: Love your car, or
            return it within 7 days for a full refund. No questions asked!
          </li>
          <li className="mb-4 text-xl text-white-900 dark:text-white">
            Finance your way with Electrify eV Opt for zero down payment and up
            to a 6-year loan tenure with the lowest interest rates, allowing you
            to save your savings for your next super-awesome road trip!
          </li>
        </ul>
        <h2 className="text-2xl font-bold mb-4 text-center text-white-900 dark:text-white">
          When you sell your car on Electrify eV, you benefit from
        </h2>
        <ul className="list-disc pl-8 mb-8 max-w-3xl mx-auto">
          <li className="mb-4 text-xl text-white-900 dark:text-white">
            Great Price Leveraging the largest dealer network and our Smart AI
            Pricing Engine, we ensure you get a great deal for your car.
          </li>
          <li className="mb-4 text-xl text-white-900 dark:text-white">
            Instant Payment Once you agree on the price, the amount is
            transferred to your bank account within minutes!
          </li>
          <li className="mb-4 text-xl text-white-900 dark:text-white">
            Sell From Anywhere From inspection to payment, right to your bank
            account—you don’t even have to leave your home.
          </li>
        </ul>
        <h2 className="text-2xl font-bold mb-4 text-center text-white-900 dark:text-white">
          When you rent your car on Electrify eV, you benefit from
        </h2>
        <ul className="list-disc pl-8 mb-8 max-w-3xl mx-auto">
          <li className="mb-4 text-xl text-white-900 dark:text-white">
          Choose from a variety of rental plans tailored to your needs, whether it is for a weekend getaway or a long-term commitment.
          </li>
          <li className="mb-4 text-xl text-white-900 dark:text-white">
          Our streamlined rental process ensures a smooth experience from booking to returning the vehicle, so you can focus on enjoying your trip.
          </li>
          <li className="mb-4 text-xl text-white-900 dark:text-white">
          Comprehensive Insurance Coverage Drive with peace of mind knowing that our rental cars come with comprehensive insurance coverage, keeping you protected on the road.
          </li>
        </ul>
      </section>

      <section
        style={{ backgroundImage: "url('/images/bg/b17.jpg')" }}
        className="relative py-24 bg-no-repeat bg-center bg-fixed bg-cover"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container">
          <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
            <div className="lg:col-start-2 lg:col-span-10">
              <div className="grid md:grid-cols-3 grid-cols-1 items-center">
                {counterData.map((item, index) => {
                  return (
                    <div className="counter-box text-center" key={index}>
                      <h1 className="text-white dark:text-white lg:text-5xl text-4xl font-semibold mb-2">
                        <Counter start={0} end={item.target}></Counter>+
                      </h1>
                      <h5 className="counter-head text-lg text-white dark:text-white font-medium">
                        {item.title}
                      </h5>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Team />
      </section>
      <section className="md:pb-24 pb-16">
        <GetInTuch />
      </section>

      <Footer />
      <Switcher />
    </>
  );
}
