import React, { useState, useContext, useEffect } from "react";
import { MyContext } from "../../../../MyContext";
import CardTitle from "../../../GridCard/CustomCards/CardTitle";
import Card from "../../../GridCard/Card";
import CardTarif from "../../../GridCard/CustomCards/CardTarif";
import CardDispo from "../../../GridCard/CustomCards/CardDispo";
import CardContact from "../../../GridCard/CustomCards/CardContact";
import CardSponsor from "../../../GridCard/CustomCards/CardSponsor";
import CardSocialNetwork from "../../../GridCard/CustomCards/CardSocialNetwork";

const Entertainer = () => {
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

    const titles = ["Divertir", "Vulgariser", "Promouvoir"];
    const svgs = ["/SVG/snes-svgrepo-com.svg", "/SVG/science-lecture-svgrepo-com.svg", "/SVG/talk-bubbles-svgrepo-com.svg"];

    return (
        <div
            className="w-full h-full flex flex-col justify-start gap-2 text-white"
            onMouseMove={handleMouseMove}
        >
            <div className="w-full grid grid-rows-[1fr_auto_auto] grid-cols-6 gap-2">
                <CardTitle colSpan={winSize > 640 ? 2 : 6} position={position} titles={titles} svgs={svgs} />
                <CardSponsor colSpan={winSize > 640 ? 2 : 3} position={position} url={"https://fr.weareholy.com/?ref=tainalo&utm_medium=creator&utm_source=creator"} image={"/images/holy_logo.png"} />
                <CardSponsor colSpan={winSize > 640 ? 2 : 3} position={position} />
                <div className="grid col-span-3 grid-rows-4 sm:col-span-2 sm:grid-rows-2 grid-cols-1 gap-2" >
                    <CardSocialNetwork colSpan={1} position={position} description={winSize > 640 ? "Revue de presse - Dev - JV" : "Dev - JV"} image={"/images/twitch_logo.png"} url={"https://www.twitch.tv/tainalo2"} color={"145, 70, 255"} />
                    <CardSocialNetwork colSpan={1} position={position} description={winSize > 640 ? "Vulgarisation stream et dev" : "Vulga stream et dev"} image={"/images/logo_youtube.png"} url={"https://www.youtube.com/@tainalo2"} color={"255, 3, 7"} />
                    {winSize < 640 && <CardSocialNetwork colSpan={1} position={position} description={"Veille streaming"} image={"/images/logo_twitter.png"} url={"https://www.twitter.com/tainalo2"} color={"1, 174, 239"} />}
                    {winSize < 640 && <CardSocialNetwork colSpan={1} position={position} description={"Tutos streaming"} reverseImage image={"/images/tiktok_logo.png"} url={"https://www.tiktok.com/@tainalo22"} color={"238, 29, 82"} />}
                </div>
                <Card colSpan={winSize > 640 ? 2 : 3} position={position}>
                    <div className="w-full h-[250px] relative">
                        <div className="absolute top-[-20px] left-[-55%] sm:left-[-20px] w-[350px] h-[340px]">
                            <img className="object-cover" src="/images/Alexandre_RONGIER.png" alt=""
                            />
                        </div>
                    </div>
                </Card>
                {winSize >= 640 && <div className="grid col-span-2 grid-rows-2 grid-cols-1 gap-2" >
                    <CardSocialNetwork colSpan={1} position={position} description={"Veille tech/business streaming"} reverse reverseImage image={"/images/logo_twitter.png"} url={"https://www.twitter.com/tainalo2"} color={"1, 174, 239"} />
                    <CardSocialNetwork colSpan={1} position={position} description={"Micro tutos streaming"} reverse image={"/images/tiktok_logo.png"} url={"https://www.tiktok.com/@tainalo22"} color={"238, 29, 82"} />
                </div>}
                {winSize >= 640 && <CardTarif colSpan={2} position={position} tarifDay={300} tarifHour={40} />}
                {winSize >= 640 && <CardDispo colSpan={2} position={position} />}
                {winSize >= 640 && <CardContact colSpan={2} position={position} />}
            </div>

        </div>
    )
};

export default Entertainer;