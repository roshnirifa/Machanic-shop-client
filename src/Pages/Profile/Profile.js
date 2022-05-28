import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase_init';

const Profile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const handleSubmit = event => {
        event.preventDefault();
        const number = event.target.number.value;
        const city = event.target.city.value;
        const location = event.target.location.value;
        const linkedin = event.target.linkedin.value;
        let data = {
            name: user?.displayName,
            email: user?.email,

            city: city,
            number: number,
            location: location,
            linkedin: linkedin
        }
        console.log(data);

        fetch('https://young-springs-64446.herokuapp.com/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Profile Updated Done');
                event.target.reset();

            });

    }
    return (


        <div >
            <h1 className='text-center text-3xl  font-bold my-6'>Add Profile Information</h1>
            <form onSubmit={handleSubmit} className="px-48 mb-10">
                <label >Name:</label>
                <input type="text" disabled value={user?.displayName} class="input input-bordered w-full  mb-3" /> <br />
                <label >Email:</label>
                <input type="email" disabled value={user?.email} class="input input-bordered w-full mb-3" /> <br />
                <label >City:</label>
                <input type="text" placeholder="city" name='city' class="input input-bordered w-full mb-3" /> <br />
                <label >Location:</label>
                <input type="text" placeholder="location" name='location' class="input input-bordered w-full  mb-3" /> <br />
                <label >Linkedin:</label>
                <input type="text" placeholder="Linkedin" name='linkedin' class="input input-bordered w-full  mb-3" /> <br />
                <label >Number:</label>
                <input type="Number" placeholder="Number" class="input input-bordered w-full  mb-3" name='number' /> <br />
                <input className='btn btn-primary w-full ' type="submit" value='Update Profile' />
            </form>
        </div>


    );
};

export default Profile;