import { Link, Outlet } from 'react-router-dom';

import React from 'react';

const Layout = () => {
    return (
        <div>
            <header >
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
            </header>
            <Outlet></Outlet>
            <footer>2023</footer>
        </div>
    )
}

export default Layout