import React, { use } from 'react';
import PricingCard from '../pricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {
  const pricingData = use(pricingPromise);

  return (
    <div>
     <h1 className='text-4xl text-center font-bold my-10'>Get Our Membership</h1>
     <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 mx-auto'>
       {
        pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
      }
     </div>
    </div>
  );
};

export default PricingOptions;