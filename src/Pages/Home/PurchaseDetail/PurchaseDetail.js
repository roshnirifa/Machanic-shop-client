import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useParams } from 'react-router-dom';
import auth from '../../firebase_init';


const PurchaseDetail = () => {

    const { purchaesId } = useParams();
    const [data, setData] = useState({});
    const [user] = useAuthState(auth);
    const [error, setError] = useState('');

    useEffect(() => {

        fetch(`http://localhost:5000/tools/${purchaesId}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, [purchaesId])

    // let { data, isLoading, refetch } = useQuery('data', () => fetch(`http://localhost:5000/tools/${purchaesId}`).then(res => res.json()))

    // if (isLoading) {
    //     return <Loading> </Loading>
    // }

    let price = data.price;
    console.log(price);


    const handleSubmit = event => {
        event.preventDefault();

        setError('');
        const address = event.target.address.value;
        const number = event.target.number.value;
        const quantity = event.target.quantity.value;
        console.log(quantity);
        // const productName = event.target.productName.value;

        let newPrice = quantity * parseInt(price);


        console.log(address, number, quantity);
        if (quantity < data.minQuantity) {
            setError(`You cant purchase less than ${data.minQuantity} `)

        }
        if (data.quantity < quantity) {
            setError('Sorry! We dont have your desired quantity available')
        }
        else {
            const postedData = {
                productId: data._id,
                quantity: quantity,
                email: user.email,
                address: address,
                productName: data.name,
                price: parseInt(newPrice),
                number: number
            }
            axios.post('http://localhost:5000/purchase', postedData)
                .then(res => {
                    console.log(res);
                })

        }


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


                    <form onSubmit={handleSubmit} >
                        <input type="text" disabled value={user?.displayName} class="input input-bordered w-full max-w-xs mb-3" /> <br />
                        <input type="email" disabled value={user?.email} class="input input-bordered w-full max-w-xs mb-3" /> <br />
                        {/* <input type="text" name='productName' value={data.name} class="input input-bordered w-full max-w-xs mb-3" /> <br />
                        <input type="text" name='productPrice' value={data.price} class="input input-bordered w-full max-w-xs mb-3" /> <br /> */}
                        <input type="text" placeholder="Address" name='address' class="input input-bordered w-full max-w-xs mb-3" /> <br />
                        <input type="Number" placeholder="Number" class="input input-bordered w-full max-w-xs mb-3" name='number' /> <br /><br />
                        <input type="number" placeholder="Quantity" name='quantity' class="input input-bordered input-warning w-1/6 mb-4  max-w-xs" /><br />
                        <div className='text-red-600'>
                            {error === '' ? '' : error} <br />
                        </div>
                        <input className='btn btn-primary w-full max-w-xs mt-2' type="submit" value='Place The Order' />
                    </form>
                </div>
            </div>
        </div>


    );
};

export default PurchaseDetail;