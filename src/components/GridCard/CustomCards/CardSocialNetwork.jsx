import React, { useState } from "react";
import Card from "../Card";

const CardSocialNetwork = ({ colSpan, position, image, description, reverseImage, reverse, url, color }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Card
            colSpan={colSpan}
            position={position}
        >
            <div
                className="w-full h-full flex justify-center items-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <a href={url} target="_blank" rel="noreferrer" className="w-full h-full relative">
                    <div className="absolute"
                        style={{
                            boxShadow: `0px 0px 150px ${isHovered ? 200 : 150}px rgba(${color}, 0.9)`,
                            top: "0px",
                            width: "0px",
                            height: "0px",
                            transition: "all 0.3s ease-in-out",
                            ...(reverse ? { left: '0px' } : { right: '0px' }),
                            ...(reverseImage ? { transform: 'scaleX(-1)' } : { transform: 'scaleX(1)' }),
                        }}
                    ></div>
                    <img className="absolute" src={image} alt=""
                        style={{
                            top: isHovered ? '-5px' : '-20px',
                            width: "70px",
                            rotate: reverse ? "-30deg" : "30deg",
                            transition: "all 0.3s ease-in-out",
                            ...((reverse && isHovered) ? { right: '-5px' } :
                                (reverse && !isHovered) ? { right: '-20px' } :
                                    (!reverse && isHovered) ? { left: '0px' } : { left: '-20px' }),
                            ...(reverseImage ? { transform: 'scaleX(-1)' } : { transform: 'scaleX(1)' }),

                        }}
                    />
                    <div className="w-full h-full absolute top-0 left-0">
                        <div className="w-full h-full flex justify-start items-end">
                            <div className="text-2xl font-bold">
                                {description}
                            </div>
                        </div>
                    </div>
                </a>
            </div>

        </Card>
    )
}

export default CardSocialNetwork