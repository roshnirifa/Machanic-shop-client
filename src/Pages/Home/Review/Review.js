import React from 'react';
import useTools from '../../useTools/useTools';

const Review = () => {
    const { tools } = useTools();
    return (
        <div className='px-20 mb-10'>
            <h1 className='text-5xl text-primary text-center font-bold my-7'>Customers Review</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    tools.slice(0, 3).map(tool => <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={tool.img} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{tool.name}</h2>

                            <div className="flex justify-center items-center">
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                                    </div>
                                </div>
                                <p className='ml-5'>{tool.review}</p>
                            </div>
                            <div className="rating text-center mt-5">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Review;