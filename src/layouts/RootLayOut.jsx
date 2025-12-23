import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pege/home/shared/Navbar';
import Footer from '../pege/home/shared/Footer';

const RootLayOut = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayOut;