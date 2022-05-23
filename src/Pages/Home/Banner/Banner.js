import React from 'react';
import banner from '../../../assests/banner/banner2.jpg'

const Banner = () => {
    return (
        <section style={{
            background: `url(${banner})`,
            minHeight: ' 500px',
            backgroundattachment: 'fixed',
            backgroundSize: 'cover',


        }} className='flex justify-center items-center'>

            <div className='text-center'>
                <h3 className='text-white font-bold text-6xl mb-4'>Find Your Auto Parts</h3>
                <h4 className='text-white font-bold text-2xl mb-4 mt-3'>Over 100,000 Auto and Truck Parts</h4>

                <button className="btn btn-primary uppercase font-bold  text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </section>
    );
};

export default Banner;