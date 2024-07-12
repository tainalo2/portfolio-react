import React, { useState } from "react";
import Card from "../Card";

const CardTarif = ({ colSpan, position, tarifYear, tarifDay, tarifHour }) => {
    
    const [isHoveredTarif, setIsHoveredTarif] = useState(false);
    return (
        <Card colSpan={colSpan} position={position}>
            <div className="w-full h-full flex justify-between items-end"
                onMouseEnter={() => setIsHoveredTarif(true)}
                onMouseLeave={() => setIsHoveredTarif(false)}
            >
                <div className="relative top-0 left-4">
                    <img className="relative w-14 mt-[-50%]" src="/SVG/money-euro-banknote-svgrepo-com.svg" alt=""
                        style={{
                            transform: isHoveredTarif ? 'rotate(60deg)' : 'rotate(0deg)',
                            left: isHoveredTarif ? '50px' : '0px',
                            bottom: isHoveredTarif ? '50px' : '0px',
                            transition: 'all 0.3s ease-out',

                        }}
                    />
                    <img className="relative w-14 mt-[-50%]" src="/SVG/money-euro-banknote-svgrepo-com.svg" alt=""
                        style={{
                            transform: isHoveredTarif ? 'rotate(-80deg)' : 'rotate(0deg)',
                            left: isHoveredTarif ? '60px' : '0px',
                            bottom: isHoveredTarif ? '20px' : '0px',
                            transition: 'all 0.3s ease-out',

                        }}
                    />
                    <img className="relative w-14 mt-[-50%]" src="/SVG/money-euro-banknote-svgrepo-com.svg" alt=""
                        style={{
                            transform: isHoveredTarif ? 'rotate(-20deg)' : 'rotate(0deg)',
                            left: isHoveredTarif ? '10px' : '0px',
                            bottom: isHoveredTarif ? '40px' : '0px',
                            transition: 'all 0.3s ease-out',

                        }}
                    />
                    <img className="absolute w-14 mt-[-50%]" src="/SVG/money-euro-banknote-svgrepo-com.svg" alt=""
                        style={{
                            transform: isHoveredTarif ? 'rotate(30deg)' : 'rotate(0deg)',
                            left: isHoveredTarif ? '0px' : '-50px',
                            bottom: isHoveredTarif ? '90px' : '-50px',
                            transition: 'all 0.3s ease-out',

                        }}
                    />
                    <img className="absolute w-14 mt-[-50%]" src="/SVG/money-euro-banknote-svgrepo-com.svg" alt=""
                        style={{
                            transform: isHoveredTarif ? 'rotate(-50deg)' : 'rotate(0deg)',
                            left: isHoveredTarif ? '20px' : '-100px',
                            bottom: isHoveredTarif ? '0px' : '0px',
                            transition: 'all 0.3s ease-out',

                        }}
                    />
                </div>

                <div className="flex flex-col justify-end items-end">
                    {tarifYear && <div>
                        <span className="text-6xl font-bold">{tarifYear}K€</span>
                        <span className="text-sm">/an</span>
                    </div>}
                    {tarifDay && <div>
                        <span className="text-6xl font-bold">{tarifDay}€</span>
                        <span className="text-sm">/jour</span>
                    </div>}
                    {tarifHour && <div>
                        <span className="text-6xl font-bold">{tarifHour}€</span>
                        <span className="text-sm">/heure</span>
                    </div>}
                </div>

            </div>
        </Card>
    )


}

export default CardTarif