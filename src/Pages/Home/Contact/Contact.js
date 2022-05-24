import React from 'react';
import img from '../../../assests/banner/img.jpg'

const Contact = () => {
    return (
        <div>

            <div className="hero min-h-screen  px-12">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="w-3/5 rounded-lg shadow-2xl" alt='' />
                    <div className='w-1/2 ml-10 text-center'>
                        <h1 className='text-center text-4xl mt-10 text-primary mb-3 font-bold'>Stay Conneted With Us</h1>

                        <form className='text-center'>
                            <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs mb-3" />
                            <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs mb-3" />
                            <input type="number" placeholder="Phone" className="input input-bordered w-full max-w-xs mb-3" />
                            <textarea className="textarea textarea-bordered mb-3 w-full max-w-xs" placeholder="Bio"></textarea>

                        </form>
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;