import React from 'react';
import './BusinessSummery.css'
import { FaBeer, FaPeopleArrows, FaFunnelDollar, FaStreetView } from 'react-icons/fa';

const BusinessSummery = () => {
    return (
        <div className='mb-5'>
            <h1 className='text-center text-4xl mt-10 text-primary font-bold'>Business Summery</h1>
            <div className='flex justify-around mt-4 py-8'>
                <div className='shadow flex items-center justify-center'>
                    <div >
                        <h1 className='text-8xl '> <FaPeopleArrows /></h1>

                        <h1 className='text-4xl'>100k+</h1>
                        <h3 className='text-xl'>Customers</h3>

                    </div>
                </div>
                <div className='shadow  flex items-center justify-center'>
                    <div>
                        <h1 className='text-8xl '> <FaFunnelDollar /></h1>

                        <h1 className='text-5xl'>72k+</h1>
                        <h3 className='text-xl'>Annual Reveneu</h3>

                    </div>
                </div>
                <div className='shadow  flex items-center justify-center'>
                    <div>
                        <h1 className='text-8xl '> <FaStreetView /></h1>

                        <h1 className='text-5xl'>80k+</h1>
                        <h3 className='text-xl'>Reviews</h3>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummery;