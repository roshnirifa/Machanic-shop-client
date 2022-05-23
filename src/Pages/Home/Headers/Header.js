import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <div className="navbar">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-3xl title">Machanic Shop</a>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 uppercase font-bold">
                        <li><a>Home</a></li>
                        <li><a>Contact</a></li>
                        <li><a>Blogs</a></li>
                        <li><a>Purchase</a></li>
                        <li><a>Login</a></li>

                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 uppercase font-bold">
                    <li><a>Home</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Blogs</a></li>
                    <li><a>Purchase</a></li>
                    <li><a>Login</a></li>

                </ul>
            </div>

        </div>
    );
};

export default Header;