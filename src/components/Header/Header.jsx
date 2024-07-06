import React, { useState, useContext } from 'react';
import ContactButton from './ContactButton';
import { MyContext } from '../../MyContext';

const Header = () => {
    const { streamingService, setStreamingService } = useContext(MyContext);

    return (
        <header className='w-full h-14 text-white pr-10 pl-10 pt-4 flex justify-center items-center sticky z-50 top-0 bg-opacity-0'>
            <div className='w-full max-w-screen-xl h-full flex justify-between items-center overflow-hidden'>
                <div className='flex items-center gap-2'>
                    <div className=''>
                        Alexandre
                    </div>
                    <div className='font-bold'>
                        RONGIER
                    </div>
                    <div className={`${streamingService ? '' : 'pt-16'} transition-all duration-300`}>
                        aka
                    </div>
                    <div className={`${streamingService ? '' : 'pt-16'} font-bold transition-all duration-500`}>
                        tainalo2
                    </div>
                </div>
                <ContactButton />
            </div>
        </header>
    );
};

export default Header;