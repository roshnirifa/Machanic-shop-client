import React from 'react';

import './Branding.css'
import img1 from '../../../../assests/clients/client-5.gif'
import img2 from '../../../../assests/clients/client-3.webp'
import img3 from '../../../../assests/clients/client-2.png'
import img4 from '../../../../assests/clients/toyota.png'
import img5 from '../../../../assests/clients/client-4.png'





const Branding = () => {
    return (
        <div className='flex justify-around items-center my-8 branding px-12'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img4} alt="" />
            <img src={img3} alt="" />
            <img src={img5} alt="" />
        </div>
    );
};

export default Branding;