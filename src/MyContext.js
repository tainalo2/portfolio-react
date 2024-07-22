import React, { createContext, useState } from 'react';

// Créer le contexte
export const MyContext = createContext();

// Créer un fournisseur de contexte
export const MyProvider = ({ children }) => {
  const [streamingService, setStreamingService] = useState(false);
  const [ selectedTab, setSelectedTab ] = useState('Home');
  const [isMobile, setIsMobile] = useState(true);

  return (
    <MyContext.Provider value={{ streamingService, setStreamingService, selectedTab, setSelectedTab, isMobile, setIsMobile }}>
      {children}
    </MyContext.Provider>
  );
};
