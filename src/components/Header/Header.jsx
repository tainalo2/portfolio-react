import React, { useContext, useEffect } from 'react';
import ContactButton from './ContactButton';
import { MyContext } from '../../MyContext';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NavButton from './NavButton';

const Header = () => {
    const { streamingService } = useContext(MyContext);
    const { setSelectedTab } = useContext(MyContext);

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
        <header className='w-full h-14 text-white pr-10 pl-10 pt-4 flex justify-center items-center sticky z-50 top-0 bg-opacity-0'>
            <div className='w-full max-w-screen-lg h-full flex justify-between items-center'>
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
                    <nav>
                        <ul className='flex gap-6'>
                            {navTab.map((tab) => {
                                return (
                                    <NavButton key={tab.name} name={tab.name} url={tab.url} />
                                )
                            })}
                        </ul>
                    </nav>
                    <ContactButton />
                </div>

            </div>
        </header>
    );
};

export default Header;