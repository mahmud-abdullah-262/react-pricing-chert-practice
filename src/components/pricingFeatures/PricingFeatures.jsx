import { CircleCheck } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {
  return (
    <p className='flex gap-2'><CircleCheck className='text-primary'></CircleCheck> {feature}</p>
  );
};

export default PricingFeatures;