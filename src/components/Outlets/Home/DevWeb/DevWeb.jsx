import React, { useState} from "react";
import CardTechno from "./CardTechno";
import CardContact from "./CardContact";
import CardDispo from "./CardDispo";
import CardTarif from "./CardTarif";
import CardSite from "./CardSite";
import CardTitle from "./CardTitle";

const DevWeb = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };
    
    const technos = [
        { image: "/images/HTML5_logo.png", title: "HTML5", xp: "3" },
        { image: "/images/NodeJS_logo.png", title: "NodeJS", xp: "2" },
        { image: "/logo192.png", title: "React", xp: "2" },
        { image: "/images/mySQL_logo.jpg", title: "MySQL", xp: "2" },
        { image: "/images/JavaScript_logo.png", title: "JavaScript", xp: "2" },
        { image: "/images/node-red_logo.png", title: "Node-Red", xp: "2" },
        { image: "/images/framer-motion_logo.png", title: "Motion", xp: "1" },
        { image: "/images/git_logo.png", title: "Git", xp: "2" }
    ];

    const technoList = technos.map((techno) => {
        return (
            <CardTechno key={techno.title} colSpan={1} position={position} image={techno.image} title={techno.title} xp={techno.xp} />
        );
    });

    return (
        <div
            className="w-full h-full flex flex-col justify-start gap-2 text-white"
            onMouseMove={handleMouseMove}
        >
            <div className="w-full grid grid-rows-[1fr_auto_1fr] grid-cols-6 gap-2">
                <CardTitle colSpan={2} position={position} />
                <div className="col-span-4 grid grid-rows-2 grid-cols-4 gap-2">
                    {technoList}
                </div>
                <CardSite colSpan={3} position={position} description="Widgets twitch originaux" url="www.purpletwit.com" emote="/images/twitch_logo.png" />
                <CardSite colSpan={3} position={position} description="Editer un devis facile et gratuit" url="www.devisgenerator.fr" emote="/images/animate_writing.png" />
                <CardTarif colSpan={2} position={position} />
                <CardDispo colSpan={2} position={position} />
                <CardContact colSpan={2} position={position} />
            </div>
        </div>
    );
};

export default DevWeb;
