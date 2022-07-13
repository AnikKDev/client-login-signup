import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div class="navbar bg-base-100 lg:px-6 my-4">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                    <li><a>Home</a></li>
                    <Link to="/login" className="btn btn-outline mx-2">Login</Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;