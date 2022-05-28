import React from 'react';
import useTools from '../../useTools/useTools';
import UseAllProruct from '../UseAllProduct.js/UseAllProruct';

const ManageProduct = () => {
    const { tools } = useTools();
    return (
        <div >
            <h1 className='text-2xl text-center font-bold mb-5'>Manage product</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Img</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>

                        </tr>
                    </thead>

                    {
                        tools.map((tool) => <UseAllProruct
                            key={tool._id}

                            tool={tool}

                        ></UseAllProruct>)
                    }

                </table>
            </div>
        </div>
    );
};

export default ManageProduct;