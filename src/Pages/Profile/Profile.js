import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase_init';

const Profile = () => {
    const [user] = useAuthState(auth);
    const handleSubmit = event => {
        event.preventDefault();
        const number = event.target.number.value;
        const city = event.target.city.value;
        const location = event.target.location.value;
        const linkdin = event.target.linkdin.value;
        console.log(city, number, location, linkdin);
    }
    return (
        <div>

            <div className="hero mb-10 mt-10">
                <div className=" text-center flex-col  shadow-2xl w-3/5 py-14">
                    <h1 className='text-center text-5xl text-primary font-bold mb-5'>My Profile</h1>
                    <form onSubmit={handleSubmit} >
                        <input type="text" disabled value={user?.displayName} class="input input-bordered w-full max-w-xs mb-3" /> <br />
                        <input type="email" disabled value={user?.email} class="input input-bordered w-full max-w-xs mb-3" /> <br />
                        <input type="text" placeholder="city" name='city' class="input input-bordered w-full max-w-xs mb-3" /> <br />
                        <input type="text" placeholder="location" name='location' class="input input-bordered w-full max-w-xs mb-3" /> <br />
                        <input type="text" placeholder="Linkdin" name='linkdin' class="input input-bordered w-full max-w-xs mb-3" /> <br />
                        <input type="Number" placeholder="Number" class="input input-bordered w-full max-w-xs mb-3" name='number' /> <br />
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;