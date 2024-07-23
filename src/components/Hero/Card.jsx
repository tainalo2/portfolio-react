import React, { useState, useEffect } from "react";
import InfiniteCarousel from "./InfiniteCarousel";
import { motion } from "framer-motion";

const Card = ({ svg, title, description, images, linkedCenter }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
        if (document.getElementById(linkedCenter)) {
            document.getElementById(linkedCenter).style.filter = "drop-shadow( 0px 0px 20px rgba(255, 255, 255, 1))";

        }
    };

    const handleNotHover = () => {
        setIsHovered(false);
        if (document.getElementById(linkedCenter)) {
            document.getElementById(linkedCenter).style.filter = "drop-shadow( 0px 0px 0px rgba(255, 255, 255, 0))";
        }
    };

    return (
        <div
            className="flex justify-center items-center flex-col gap-2 max-w-[250px] rounded-lg overflow-hidden bg-gray-900 opacity-90 transition-all duration-200 ease-in-out hover:cursor-pointer border-opacity-10 border-[1px] border-gray-400"
            style={{
                //transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                boxShadow: isHovered ? '0px 0px 20px 2px rgba(255,255,255,0.1)' : '0px 0px 0px 0px rgba(255,255,255,0.0)',
                zIndex: isHovered ? '10' : '0',
            }}
            onMouseEnter={handleHover}
            onMouseLeave={handleNotHover}>
            <div className="text-white font-bold bg-gray-800 px-4 py-2 w-full text-center flex justify-center items-center gap-2">
                <img className="w-[25px] h-[25px]" src={svg} alt="" />
                <h2 className="text-white text-center">
                    {title}
                </h2>
            </div>

            <p className="text-gray-300 text-sm px-2 text-center">
                {description}
            </p>
            <InfiniteCarousel
                images={images}
            />
            <button
                className="flex justify-center items-center mb-2 text-white gap-2 hover:gap-4 opacity-90 hover:opacity-100 transition-all duration-200 ease-in-out overflow-hidden h-fit"
                style={
                    isHovered ? { maxHeight: '50px' } : { maxHeight: '0px' }
                }
            >
                <span>Voir plus</span>
                <svg className="invert w-6 h-6 pt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
        </div>
    );
};

export default Card;