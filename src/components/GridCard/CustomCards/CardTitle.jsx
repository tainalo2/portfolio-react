import React, { useState, useContext } from "react";
import { MyContext } from "../../../MyContext";
import Card from "../Card";

const CardTitle = ({ colSpan, position, titles, svgs }) => {
    const { isMobile } = useContext(MyContext);
    const [isHovered, setIsHovered] = useState(false);

    const titlesList = titles.map((title, index) => {
        return (
            <div className="text-2xl sm:text-3xl font-bold" key={index}>
                {title}
            </div>
        );
    });

    const svgsList = svgs.map((svg, index) => {
        if (index == 0) {
            return (
                <img key={index} className="absolute w-28 sm:w-32" src={svg} alt=""
                    style={{
                        right: isHovered || isMobile ? '-60px' : '-80px',
                        top: isHovered || isMobile ? '-60px' : '-80px',
                        rotate: '-45deg',
                        transition: 'all 0.3s ease'

                    }}
                />
            );
        }

        if (index == 1) {
            return (
                <img key={index} className="absolute w-28 sm:w-32" src={svg} alt=""
                    style={{
                        right: '0px',
                        bottom: isHovered ? '-40px' : isMobile ? '-60px' : '-80px',
                        rotate: '10deg',
                        transition: 'all 0.3s ease'

                    }}
                />
            );
        }

        if (index == 2) {
            return (
                <img key={index} className="absolute w-24" src={svg} alt=""
                    style={{
                        left: isHovered || isMobile ? '110px' : '90px',
                        top: isHovered || isMobile ? '-30px' : '-60px',
                        rotate: '30deg',
                        transition: 'all 0.3s ease'

                    }}
                />
            );
        }
    });

    return (
        <Card colSpan={colSpan} position={position}>
            <div className="w-full h-full relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="w-full h-full flex flex-col items-start justify-end sm:gap-2">
                    {titlesList}
                </div>
                {svgsList}
            </div>

        </Card>
    );
};

export default CardTitle;