import React, { useState, useContext } from "react";
import CardTechno from "../../../GridCard/CustomCards/CardTechno";
import CardContact from "../../../GridCard/CustomCards/CardContact";
import CardDispo from "../../../GridCard/CustomCards/CardDispo";
import CardTarif from "../../../GridCard/CustomCards/CardTarif";
import CardSite from "../../../GridCard/CustomCards/CardSite";
import CardTitle from "../../../GridCard/CustomCards/CardTitle";
import { MyContext } from "../../../../MyContext";

const DevWeb = () => {
    const { winSize } = useContext(MyContext);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    const titles = ["Intégrer", "Maintenir", "Développer"];
    const svgs = ["/SVG/keyboard-2-svgrepo-com.svg", "/SVG/display-free-svgrepo-com.svg", "/SVG/glasses-svgrepo-com.svg"];
    
    const technos = [
        { image: "/images/HTML5_logo.png", title: "HTML5", xp: "4" },
        { image: "/images/nodeJS_logo.png", title: "NodeJS", xp: "4" },
        { image: "/images/react_logo.png", title: "React", xp: "2" },
        { image: "/images/mySQL_logo.jpg", title: "MySQL", xp: "3" },
        { image: "/images/JavaScript_logo.png", title: "JavaScript", xp: "5" },
        { image: "/images/node-red_logo.png", title: "Node-Red", xp: "5" },
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
            className="w-full h-full flex-col justify-start gap-2 text-white"
            onMouseMove={handleMouseMove}
        >
            <div className="grid w-full grid-rows-[1fr_auto_auto] grid-cols-6 gap-2">
                <CardTitle colSpan={winSize > 640 ? 2 : 6} position={position} titles={titles} svgs={svgs} />
                <div className="col-span-6 sm:col-span-4 grid grid-rows-2 grid-cols-4 gap-2">
                    {technoList}
                </div>
                <CardSite colSpan={winSize > 640 ? 3 : 6} position={position} description="Widgets twitch originaux" url="www.purpletwit.com" emote="/images/twitch_logo.png" />
                <CardSite colSpan={winSize > 640 ? 3 : 6} position={position} description="Editer un devis facile et gratuit" url="www.devisgenerator.fr" emote="/images/animate_writing.png" />
                <CardTarif colSpan={winSize > 640 ? 2 : 3} position={position} tarifYear={38} tarifDay={400} />
                <CardDispo colSpan={winSize > 640 ? 2 : 3} position={position} />
                {winSize >= 640 && <CardContact colSpan={2} position={position} />}
            </div>
        </div>
    );
};

export default DevWeb;
