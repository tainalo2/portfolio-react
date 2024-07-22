import React, { useState, useContext, useEffect } from 'react';
import ContactButton from './ContactButton';
import { MyContext } from '../../MyContext';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NavContainerDesktop from './NavContainerDesktop';
import Contact from './Contact/Contact';

const Header = () => {
    const { setIsMobile, streamingService, setSelectedTab } = useContext(MyContext);
    const [isContactOpen, setIsContactOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsMobile]);

    const location = useLocation();
    useEffect(() => {
        setSelectedTab(location.pathname);
    }, [setSelectedTab, location.pathname]);

    const navTab = [
        { name: 'Dev Web', url: '/devweb' },
        { name: 'Streaming', url: '/streaming' },
        { name: 'Animateur', url: '/entertainer' }
    ];

    return (
        <header className='w-full text-white pt-4 flex flex-col justify-center items-center z-50 top-0 bg-opacity-0 mb-2'>
            <div className='w-full max-w-screen-lg h-full flex justify-between items-center text-sm sm:text-lg'>
                <Link to='/'>
                    <div className='flex items-center gap-2'>
                        <div className=''>
                            Alexandre
                        </div>
                        <div className='font-bold'>
                            RONGIER
                        </div>
                        <div className='flex items-center h-8 gap-2 overflow-hidden'>
                            <div className={`${streamingService ? '' : 'pt-16'} transition-all duration-300`}>
                                aka
                            </div>
                            <div className={`${streamingService ? '' : 'pt-16'} font-bold transition-all duration-500`}>
                                tainalo2
                            </div>
                        </div>

                    </div>
                </Link>
                <div className='flex justify-center items-center h-full gap-4'>
                    <div className='hidden sm:block'>
                        <NavContainerDesktop navTab={navTab} motionId="menuLg" />
                    </div>
                    <div
                        onClick={() => { console.log('click'); setIsContactOpen(true); }}
                    >
                        <ContactButton onClick={() => setIsContactOpen(true)} />
                    </div>
                </div>
            </div>
            <div className='sm:hidden my-2'>
                <NavContainerDesktop navTab={navTab} motionId="menuXs" />
            </div>
            <div
                style={{ display: isContactOpen ? 'block' : 'none' }}
            >
                <Contact closeContact={() => setIsContactOpen(false)} />
            </div>
        </header>
    );
};

export default Header;