// BatterySwapDetails.js

import React from "react";

const BatterySwapDetails = ({ data }) => {
  const { name, openingHours, contact } = data;
  
  return (
    <div className="flex-1 ">
      <p className=" text-2xl font-semibold text-green-950 dark:text-gray-950 text-center">{name}</p>
      <p className="mt-2 ml-4 text-gray-950 dark:text-gray-950 text-center"><strong>Opening Hours <br /></strong> {openingHours} </p>
      <p className="mt-2 mr-9 text-gray-950 dark:text-gray-950 text-center"><strong>Contact <br /></strong> {contact} </p>
    </div>
  );
};

export default BatterySwapDetails;
