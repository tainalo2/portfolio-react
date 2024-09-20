import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../../../../MyContext";
import CardTechno from "../../../GridCard/CustomCards/CardTechno";
import CardTitle from "../../../GridCard/CustomCards/CardTitle";
import Card from "../../../GridCard/Card";
import CardTarif from "../../../GridCard/CustomCards/CardTarif";
import CardDispo from "../../../GridCard/CustomCards/CardDispo";
import CardContact from "../../../GridCard/CustomCards/CardContact";

const Streaming = () => {
    const { setStreamingService } = useContext(MyContext);

    useEffect(() => {
        // Composant monté
        setStreamingService(true);

        // Cleanup function pour quand le composant est démonté
        return () => {
            setStreamingService(false);
        };
    }, [setStreamingService]);

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    const titles = ["IRL", "Multi-stream", "Widgets"];
    const svgs = ["/SVG/camera-10-svgrepo-com.svg", "/SVG/stream-display-svgrepo-com.svg", "/SVG/microphone-16-svgrepo-com.svg"];

    const technos = [
        { image: "/images/Open_Broadcaster_Software_Logo.png", title: "OBS", xp: "11" },
        { image: "/images/larix_logo.png", title: "Larix B.", xp: "5" },
        { image: "/images/elgato_logo.png", title: "Elgato", xp: "5" },
        { image: "/images/twitchat_logo.png", title: "Twitchat", xp: "2" },
        { image: "/images/streamerbot_logo.png", title: "Streamerbot", xp: "2" },
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
            <div className="w-full hidden sm:grid grid-rows-[1fr_auto_auto] grid-cols-6 gap-2">
                <CardTitle colSpan={2} position={position} titles={titles} svgs={svgs} />
                <div className="col-span-4 grid grid-rows-2 grid-cols-4 gap-2">
                    {technoList}
                </div>
                <Card colSpan={3} position={position} >
                    <video src="/videos/poc_OBS.mp4" type="video/mp4" autoPlay controls muted loop />
                </Card>

                <div className="grid col-span-3 grid-rows-2 grid-cols-2 gap-2" >
                    <Card colSpan={1} position={position} >
                    </Card>
                    <Card colSpan={1} position={position} >
                    </Card>
                    <Card colSpan={1} position={position} >
                    </Card>
                    <Card colSpan={1} position={position} >
                    </Card>
                </div>
                <CardTarif colSpan={2} position={position} tarifDay={300} tarifHour={40} />
                <CardDispo colSpan={2} position={position} />
                <CardContact colSpan={2} position={position} />
            </div>

            <div className="grid sm:hidden w-full grid-rows-[1fr_auto_auto] grid-cols-6 gap-2">
                <CardTitle colSpan={6} position={position} titles={titles} svgs={svgs} />
                <div className="col-span-6 grid grid-rows-2 grid-cols-4 gap-2">
                    {technoList}
                </div>
                <Card colSpan={6} position={position} >
                    <video src="/videos/poc_OBS.mp4" type="video/mp4" autoPlay controls muted loop />
                </Card>
                <CardTarif colSpan={3} position={position} tarifDay={300} tarifHour={40} />
                <CardDispo colSpan={3} position={position} />
            </div>

        </div>

    )


};

export default Streaming;