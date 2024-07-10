import React, { useState, useRef, useEffect } from "react";


const Card = ({ children, colSpan, position }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const elementToGetPosition = useRef(null);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    useEffect(() => {
        const handleResize = () => {
            if (elementToGetPosition.current) {
                setOffset({ x: elementToGetPosition.current.getBoundingClientRect().left, y: elementToGetPosition.current.getBoundingClientRect().top });
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (elementToGetPosition.current) {
            sleep(800).then(() => { setOffset({ x: elementToGetPosition.current.getBoundingClientRect().left, y: elementToGetPosition.current.getBoundingClientRect().top }); });
            
        }
    }, []);


    return (
        <div
            ref={elementToGetPosition}
            className={`relative overflow-hidden rounded-lg bg-gray-800 p-[1px]`}
            style={{
                gridColumn: `span ${colSpan}`,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div>
                <div className="absolute transition-opacity duration-500 ease-out opacity-40"
                    style={{
                        boxShadow: '0px 0px 105px 100px rgba(255,255,255,0.7)',
                        left: `${position.x - offset.x}px`,
                        top: `${position.y - offset.y}px`,
                    }}>
                </div>
            </div>
            <div className="relative w-full h-full p-2 bg-gray-900 rounded-lg">
                <div className="absolute transition-opacity duration-500 ease-out opacity-0"
                    style={{
                        boxShadow: '0px 0px 100px 70px rgba(255,255,255,0.3)',
                        opacity: isHovered ? 0.7 : 0,
                        left: `${position.x - offset.x}px`,
                        top: `${position.y - offset.y}px`,
                    }}>
                </div>
                {children}
            </div>

        </div>
    );
};

export default Card;