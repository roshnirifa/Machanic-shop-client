import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import UseRow from '../UseRow/UseRow';


const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://young-springs-64446.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UseRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UseRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;