import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase_init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">

                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    {admin && <li><Link to='/dashboard/allUsers'>All Users</Link></li>}
                    {admin && <li><Link to='/dashboard/addProduct'>Add Product</Link></li>}
                    {admin && <li><Link to='/dashboard/manageProduct'>Manage Product</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;