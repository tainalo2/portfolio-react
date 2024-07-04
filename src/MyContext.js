import React, { createContext, useState } from 'react';

// Créer le contexte
export const MyContext = createContext();

// Créer un fournisseur de contexte
export const MyProvider = ({ children }) => {
  const [streamingService, setStreamingService] = useState(false);

  return (
    <MyContext.Provider value={{ streamingService, setStreamingService }}>
      {children}
    </MyContext.Provider>
  );
};
