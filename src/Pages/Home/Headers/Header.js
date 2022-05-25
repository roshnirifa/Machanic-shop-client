import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase_init';
import './Header.css'


const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    return (
        <div className="navbar">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-3xl title">Machanic Shop</Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 uppercase font-bold">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/purchaes'>Purchase</Link></li>
                        {
                            user && <li><Link to='/dashboard'>Dashboard</Link></li>
                        }
                        <li><Link to='/portfolio'>My Portfolio</Link></li>
                        <li><Link to='/login'>Login</Link></li>

                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 uppercase font-bold">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/purchaes'>Purchase</Link></li>
                    {
                        user && <li><Link to='/dashboard'>Dashboard</Link></li>
                    }

                    <li><Link to='/portfolio'>My Portfolio</Link></li>
                    <li>
                        {user ? <button className='btn btn-ghost' onClick={logout}>Sign Out</button> :
                            <Link to='/login'>Login</Link>}
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Header;