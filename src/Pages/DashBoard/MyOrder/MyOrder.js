import React, { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase_init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    let email = user?.email;
    console.log(email);
    useEffect(() => {
        if (user) {
            fetch(`https://young-springs-64446.herokuapp.com/purchase/${email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])

    let orderDelete = (id) => {

        confirmAlert({
            title: 'Confirm For Delete',
            message: 'Are you sure ?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {


                        fetch(`https://young-springs-64446.herokuapp.com/purches/${id}`, {
                            method: 'DELETE',
                            headers: {
                                'content-type': 'application/json'
                            }
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                toast.error(' Parts Delete Successfully ');
                            })
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                        toast.warn(' Delete Cancel ');
                    }
                }
            ]
        });

    }


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

                                <th> {order.email} </th>
                                <th> <button onClick={() => orderDelete(order._id)} className='btn bg-red-500'> X </button> </th>
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