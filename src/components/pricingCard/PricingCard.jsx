import React from "react";
import PricingFeatures from "../pricingFeatures/PricingFeatures";

const PricingCard = ({ pricing }) => {
  const { name, price, features } = pricing;
  return (
    <div className="card bg-gray-200 p-8 gap-2 transition-all duration-500 border border-transparent hover:border-gray-400 hover:shadow-xl ">
      <h1 className="text-4xl text-center">{name}</h1>
      <h4 className="text-xl text-center">{price} bdt/per month</h4>
      <hr className="border-gray-400" />
      <div className="mt-4">
        {features.map((feature, index) => (
          <PricingFeatures key={index} feature={feature}></PricingFeatures>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
