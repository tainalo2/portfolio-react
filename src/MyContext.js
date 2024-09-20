import React, { createContext, useState, useEffect } from 'react';

// Créer le contexte
export const MyContext = createContext();

// Créer un fournisseur de contexte
export const MyProvider = ({ children }) => {
  const [streamingService, setStreamingService] = useState(false);
  const [ selectedTab, setSelectedTab ] = useState('Home');
  const [isMobile, setIsMobile] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [winSize, setWinSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWinSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MyContext.Provider value={{ streamingService, setStreamingService, selectedTab, setSelectedTab, isMobile, setIsMobile, isContactOpen, setIsContactOpen, winSize, setWinSize }}>
      {children}
    </MyContext.Provider>
  );
};
