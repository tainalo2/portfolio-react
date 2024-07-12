import React, { useState } from "react";
import Card from "../Card";

const CardTechno = ({ children, colSpan, position, image, title, xp }) => {
    const [isHovered, setIsHovered] = useState(false);


    return (
        <Card colSpan={colSpan} position={position}>
            <div
                className="w-full h-full flex justify-center items-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img className="max-w-[50px]" src={image} alt="" />
                <div
                    className={`overflow-hidden flex flex-col justify-end items-end text-nowrap`}
                    style={{
                        width: isHovered ? '100%' : '0%',
                        transition: 'width 0.3s ease'
                    }}
                >
                    <div className="text-xl font-bold">{title}</div>
                    <div>XP : {xp} ans</div>
                </div>
            </div>
        </Card>


    );
};

export default CardTechno;