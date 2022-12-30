import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-between mx-auto">
                <div className='w-[25%]'>

                </div>
                <Outlet></Outlet>
                <div className='w-[25%]'>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;