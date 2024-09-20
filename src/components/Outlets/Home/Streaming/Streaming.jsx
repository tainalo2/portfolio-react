import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../../../../MyContext";
import CardTechno from "../../../GridCard/CustomCards/CardTechno";
import CardTitle from "../../../GridCard/CustomCards/CardTitle";
import Card from "../../../GridCard/Card";
import CardTarif from "../../../GridCard/CustomCards/CardTarif";
import CardDispo from "../../../GridCard/CustomCards/CardDispo";
import CardContact from "../../../GridCard/CustomCards/CardContact";

const Streaming = () => {
    const { setStreamingService, winSize } = useContext(MyContext);

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
        { image: "/images/streamerbot_logo.png", title: "Str.bot", xp: "2" },
        { image: "/images/liveu_logo.png", title: "Live U", xp: "1" },
        { image: "/images/belabox_logo.webp", title: "Belabox", xp: "2" },
        { image: "/images/react_logo.png", title: "React", xp: "2" }
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
            <div className="w-full grid grid-rows-[1fr_auto_auto] grid-cols-6 gap-2">
                <CardTitle colSpan={winSize > 640 ? 2 : 6} position={position} titles={titles} svgs={svgs} />
                <div className="col-span-6 sm:col-span-4 grid grid-rows-2 grid-cols-4 gap-2">
                    {technoList}
                </div>
                <Card colSpan={winSize > 640 ? 3 : 6} position={position} >
                    <video src="/videos/poc_OBS.mp4" type="video/mp4" autoPlay controls muted loop />
                </Card>
                {winSize >= 640 && <Card colSpan={winSize > 640 ? 3 : 6} position={position} >
                    <iframe src="https://www.behance.net/embed/project/206517563?ilo0=1" height="280" width="100%" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
                </Card>}
                <CardTarif colSpan={winSize > 640 ? 2 : 3} position={position} tarifDay={300} tarifHour={40} />
                <CardDispo colSpan={winSize > 640 ? 2 : 3} position={position} />
                {winSize >= 640 && <CardContact colSpan={2} position={position} />}
            </div>

        </div>

    )


};

export default Streaming;