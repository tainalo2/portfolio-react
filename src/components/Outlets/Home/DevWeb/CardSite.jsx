import React, { useState } from "react";
import Card from "../../../GridCard/Card";

const CardSite = ({ colSpan, position, description, url, emote }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Card colSpan={colSpan} position={position}>
            <a className="w-full h-full relative" href={`https://${url}`} target="_blank" rel="noreferrer"
            onMouseEnter={ () => setIsHovered(true) }
            onMouseLeave={ () => setIsHovered(false) }
            >
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <div className="flex justify-center items-center gap-2">
                        <div className="text-2xl font-semibold">
                            {description}
                        </div>
                        <img className="w-10" src={emote} alt="" />
                    </div>
                    <div className="text-lg font-medium overflow-hidden text-nowrap max-h-[30px]"
                    style={{
                        transition: "all 0.4s ease",
                        height: isHovered ? "100%" : "0%"
                    }}
                    >
                        {url}
                    </div>
                </div>
            </a>
        </Card>
    )

}

export default CardSite