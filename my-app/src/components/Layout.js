import { Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';
import React from 'react';

const setActive = ({isActive}) => isActive ? 'active-link': '';

const Layout = () => {
    return (
        <div>
            <header >
                <CustomLink to="/" >Home</CustomLink>
                <CustomLink to="/blog" >Blog</CustomLink>
                <CustomLink to="/about" >About</CustomLink>
            </header>
            <Outlet></Outlet>
            <footer>2023</footer>
        </div>
    )
}

export default Layout;