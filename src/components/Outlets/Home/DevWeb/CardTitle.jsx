import React, { useState } from "react";
import Card from "../../../GridCard/Card";

const CardTitle = ({ colSpan, position }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Card colSpan={colSpan} position={position}>
            <div className="w-full h-full relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                <div className="w-full h-full flex flex-col items-start justify-end gap-2">
                    <div className="text-3xl font-bold">Intégrer</div>
                    <div className="text-3xl font-bold">Maintenir</div>
                    <div className="text-3xl font-bold">Développer</div>
                </div>
                <img className="absolute w-32" src="/SVG/keyboard-2-svgrepo-com.svg" alt=""
                    style={{
                        right: isHovered ? '-60px' : '-80px',
                        top: isHovered ? '-60px' : '-80px',
                        rotate: '-45deg',
                        transition: 'all 0.3s ease'
                        
                    }}
                />
                <img className="absolute w-32" src="/SVG/display-free-svgrepo-com.svg" alt=""
                    style={{
                        right: '0px',
                        bottom: isHovered ? '-40px' : '-80px',
                        rotate: '10deg',
                        transition: 'all 0.3s ease'
                        
                    }}
                />
                <img className="absolute w-24" src="/SVG/glasses-svgrepo-com.svg" alt=""
                    style={{
                        left: isHovered ? '110px' : '90px',
                        top: isHovered ? '-30px' : '-60px',
                        rotate: '30deg',
                        transition: 'all 0.3s ease'
                        
                    }}
                />
            </div>

        </Card>
    );
};

export default CardTitle;