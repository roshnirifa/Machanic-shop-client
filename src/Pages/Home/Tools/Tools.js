import React from 'react';

const Tools = ({ tool }) => {
    const { name, img, price, description, quantity } = tool;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='font-bold'>Price:{price}</p>
                <p className='font-bold'>Quantity:{quantity}</p>
                <p>{description}</p>


                <button class="btn btn-warning">Purchase</button>

            </div>
        </div>
    );
};

export default Tools;