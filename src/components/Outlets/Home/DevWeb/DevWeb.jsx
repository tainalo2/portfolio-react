import React, { useState, useRef, useEffect } from "react";
import Card from "./Card";

const DevWeb = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    const technos = [
        "/images/HTML5_logo.png",
        "/images/node-red_logo.png",
        "/images/JavaScript_logo.png",
        "/logo192.png",
        "/images/NodeJS_logo.png",
        "/images/mySQL_logo.jpg",
        "/images/git_logo.png",
        "/images/MySQL_logo.png",
    ];

    const technoList = technos.map((techno, index) => {
        return (
            <Card key={index} colSpan={'1'} position={position}>
                <div className="w-full h-full flex justify-center items-center">
                    <img className="w-[50px]" src={techno} alt="" />
                </div>
            </Card>
        );
    });

    return (
        <div
            className="w-full h-full flex flex-col justify-start gap-2 text-white"
            onMouseMove={handleMouseMove}
        >
            <div className="w-full grid grid-rows-[1fr_auto_1fr] grid-cols-6 gap-2">
                <Card colSpan={'2'} position={position}>
                    <div className="w-full h-full flex flex-col items-start justify-end gap-2">
                        <div className="text-3xl font-bold">Intégrer</div>
                        <div className="text-3xl font-bold">Maintenir</div>
                        <div className="text-3xl font-bold">Développer</div>
                    </div>
                </Card>
                <div className="col-span-4 grid grid-rows-2 grid-cols-4 gap-2">
                    {technoList}
                </div>
                <Card colSpan={'3'} position={position}>
                    <a className="w-full flex justify-center items-center p-6" href="http://www.devisgenerator.fr" target="_blank">
                        <img src="/images/devisGenerator_logo.png" alt="" />
                    </a>
                </Card>
                <Card colSpan={'3'} position={position}>
                    <a className="w-full flex justify-center items-center p-6" href="http://www.devisgenerator.fr" target="_blank">
                        <img src="/images/devisGenerator_logo.png" alt="" />
                    </a>
                </Card>
                <Card colSpan={'2'} position={position}>
                    <div className="w-full h-full flex flex-col justify-end items-end">
                        <div>
                            <span className="text-6xl font-bold">38K€</span>
                            <span className="text-sm">/an</span>
                        </div>
                        <div>
                            <span className="text-6xl font-bold">400€</span>
                            <span className="text-sm">/jour</span>
                        </div>
                    </div>

                </Card>
                <Card colSpan={'2'} position={position}>
                    <div className="w-full h-full flex justify-between">
                        <div className="text-3xl font-bold text-green-400">
                            Disponibilité
                        </div>
                        <div className="w-[0px] h-[0px] rounded-full bg-green-400 shadow-current" style={{ boxShadow: "0px 0px 105px 70px rgba(66,200,115,0.9)" }}></div>

                    </div>

                </Card>

                <Card colSpan={'2'} position={position}>
                    <div className="w-full h-full flex justify-start items-end gap-2">
                        <div className="text-3xl font-bold">
                            Me contacter
                        </div>
                        <svg className="invert w-10 h-10 pt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>

                </Card>
            </div>
        </div>
    );
};

export default DevWeb;
