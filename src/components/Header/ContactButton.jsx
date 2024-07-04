import React, { useState, useEffect } from "react";

const ContactButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setPosition({ x: window.innerWidth - event.clientX - 25, y: event.clientY + 15 });
    };

    return (

        <div>
            <div className="flex justify-center items-center text-white rounded-full relative overflow-hidden"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <button className="text-white text-sm border-2 border-white box-border py-1 px-4 rounded-full">
                    Me contacter
                </button>
                <div className="flex justify-center items-center absolute top-0 right-0 w-full h-full bg-gray-900 opacity-100 bg-opacity-50 box-border">
                    <svg className="w-6 h-6 invert" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </svg>
                </div>
            </div>
            {isHovered && (
                <div className="absolute py-2 px-2 bg-gray-900 text-xs w-fit rounded-lg" style={{ right: `${position.x}px`, top: `${position.y}px` }}>
                    Prenez connaissance de mes services avant de prendre contact
                </div>
            )}
        </div>
    );
};

export default ContactButton;