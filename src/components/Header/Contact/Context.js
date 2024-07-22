import React, { createContext, useState, useRef } from 'react';

// Créer le contexte
export const ContactContext = createContext();

// Créer un fournisseur de contexte
export const ContactContextProvider = ({ children }) => {
    const formReferences = useRef({});
    const [formStep, setFormStep] = useState(1);
    const [userName, setUserName] = useState("");
    const [userFirstName, setUserFirstName] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [messageCategory, setmessageCategory] = useState("");
    const [messageTitle, setmessageTitle] = useState("");
    const [messageContent, setmessageContent] = useState("");

    return (
        <ContactContext.Provider value={{formReferences, formStep, setFormStep, userName, setUserName, userFirstName, setUserFirstName, userPhone, setUserPhone, userEmail, setUserEmail, messageCategory, setmessageCategory, messageTitle, setmessageTitle, messageContent, setmessageContent }}>
            {children}
        </ContactContext.Provider>
    );
};