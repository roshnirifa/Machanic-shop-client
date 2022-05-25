import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase_init';

const PurchaseDetail = () => {

    const { purchaesId } = useParams();
    const [data, setData] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/tools/${purchaesId}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, [purchaesId])
    const handleSubmit = event => {
        event.preventDefault();


        const address = event.target.address.value;
        const number = event.target.number.value;
        console.log(address, number);
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row shadow-2xl w-3/5">
                    <img src={data.img} className="w-1/2 rounded-lg shadow-2xl " alt='' />
                    <div className='ml-5'>
                        <h1 className="text-5xl font-bold mb-5">{data.name}</h1>
                        <p>{data.description}</p>
                        <p>Price:{data.price}/pcs</p>
                        <p>Availability: <span className='text-primary font-bold'>Available</span></p>
                        <p>Available Quantity: {data.quantity}</p>
                        <p>Minimum Order Quantity: {data.minQuantity}</p>

                    </div>
                </div>
            </div>
            <div className="hero mb-10 ">
                <div className=" text-center flex-col  shadow-2xl w-3/5 py-14">
                    <h1 className='text-center text-5xl text-primary font-bold mb-5'>Purchase</h1>
                    <input type="number" placeholder="Quantity" class="input input-bordered input-warning w-1/6 mb-4  max-w-xs" />

                    <form onSubmit={handleSubmit} >
                        <input type="text" disabled value={user?.displayName} class="input input-bordered w-full max-w-xs mb-3" /> <br />
                        <input type="email" disabled value={user?.email} class="input input-bordered w-full max-w-xs mb-3" /> <br />
                        <input type="text" placeholder="Address" name='address' class="input input-bordered w-full max-w-xs mb-3" /> <br />
                        <input type="Number" placeholder="Number" class="input input-bordered w-full max-w-xs mb-3" name='number' /> <br />
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </div>


    );
};

export default PurchaseDetail;