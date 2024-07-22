import React, { useState, useEffect } from "react";

const ContactButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setPosition({ x: window.innerWidth - event.clientX - 25, y: event.clientY + 15 });
    };

    return (
        <div className="flex justify-center items-center text-white rounded-full relative overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button className="text-white text-xs sm:text-sm border-2 border-white box-border py-1 px-2 sm:px-4 rounded-full">
                Me contacter
            </button>
        </div>
    );
};

export default ContactButton;