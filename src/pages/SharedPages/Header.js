import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div class="navbar bg-base-100 lg:px-6 my-4">
            <div class="flex-1">
                <Link to="/home" class="btn btn-ghost normal-case text-xl">VITARA ENTERPRISE</Link>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to="/home">Home</Link></li>
                    <Link to="/login" className="btn btn-outline mx-2">Login</Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;