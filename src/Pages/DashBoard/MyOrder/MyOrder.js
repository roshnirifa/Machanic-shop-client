import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    let email = user?.email;
    console.log(email);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchase/${email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])
    return (
        <div>
            <h3>My Orders: {orders?.length}</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th> Price </th>
                            <th> Email </th>
                            <th> Action </th>
                            <th> Payment </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <th>{order.productName}</th>
                                <th> {order.quantity}</th>
                                <th> {order.price}</th>
                                <th> {order.email} </th>
                                <th> <button className='btn bg-red-500'> X </button> </th>
                                <th> <button className='btn'> Pay </button> </th>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;