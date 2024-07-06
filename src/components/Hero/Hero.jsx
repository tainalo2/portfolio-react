import React from "react";
import Card from "./Card";
import D3ForceDirectedTree from "./D3JS/D3ForceDirectedTree";

const Hero = () => {
    return (
        <div className="relative w-full h-fit pt-20 transform-gpu">
            <div className="w-full flex justify-center">
                <div className="flex justify-between max-w-screen-xl w-full">
                    <div className="flex flex-col gap-4 justify-center items-center flex-1">
                        <Card
                            svg={"/SVG/web-svgrepo-com.svg"}
                            title={"Développeur web"}
                            description={"Intégrer vos projets web de A à Z"}
                            images={[
                                "logo192.png",
                                "/images/HTML5_logo.png",
                                "/images/node-red_logo.png",
                                "/images/nodeJS_logo.png",
                                "/images/JavaScript_logo.png",
                                "/images/mySQL_logo.jpg",
                                "/images/git_logo.png"
                            ]}
                            linkedCenter = 'node-center1'
                        />
                        <Card
                            svg={"/SVG/streaming-svgrepo-com.svg"}
                            title={"Intégrateur streaming"}
                            description={"Développement d'overlays et d'interaction viewers complexes"}
                            images={[
                                "/images/Open_Broadcaster_Software_Logo.png",
                                "/images/elgato_logo.png",
                                "/images/twitchat_logo.png",
                                "/images/larix_logo.png"
                            ]}
                            linkedCenter = 'node-center2'
                        />
                        <Card
                            svg={"/SVG/microphone-4-svgrepo-com.svg"}
                            title={"Animateur"}
                            description={"Animation d'émission et création de contenu"}
                            images={[
                                "/images/logo_youtube.png",
                                "/images/twitch_logo.png",
                                "/images/logo_instagram.png",
                                "/images/logo_twitter.png",
                                "/images/tiktok_logo.png",
                                "/images/streamerbot_logo.png"
                            ]}
                            linkedCenter = 'node-center3'
                        />
                    </div>
                    <div className="flex-1">
                        <D3ForceDirectedTree data={{
                            nodes: [
                                { id: 'root', group: 'root', img: '/images/Alexandre_RONGIER.png' },
                                { id: 'center1', group: 'center', img: '/SVG/web-svgrepo-com.svg' },
                                { id: 'center2', group: 'center', img: '/SVG/streaming-svgrepo-com.svg' },
                                { id: 'center3', group: 'center', img: '/SVG/microphone-4-svgrepo-com.svg' },
                                { id: 'node1', group: 'child', img: 'logo192.png', parent: 'center1' },
                                { id: 'node2', group: 'child', img: '/images/HTML5_logo.png', parent: 'center1' },
                                { id: 'node3', group: 'child', img: '/images/node-red_logo.png', parent: 'center1' },
                                { id: 'node4', group: 'child', img: '/images/nodeJS_logo.png', parent: 'center1' },
                                { id: 'node5', group: 'child', img: '/images/mySQL_logo.jpg', parent: 'center1' },
                                { id: 'node6', group: 'child', img: '/images/git_logo.png', parent: 'center1' },
                                { id: 'node7', group: 'child', img: '/images/Open_Broadcaster_Software_Logo.png', parent: 'center2' },
                                { id: 'node8', group: 'child', img: '/images/streamerbot_logo.png', parent: 'center2' },
                                { id: 'node9', group: 'child', img: '/images/elgato_logo.png', parent: 'center2' },
                                { id: 'node10', group: 'child', img: '/images/twitchat_logo.png', parent: 'center2' },
                                { id: 'node11', group: 'child', img: '/images/larix_logo.png', parent: 'center2' },
                                { id: 'node12', group: 'child', img: '/images/logo_youtube.png', parent: 'center3' },
                                { id: 'node13', group: 'child', img: '/images/twitch_logo.png', parent: 'center3' },
                                { id: 'node14', group: 'child', img: '/images/logo_instagram.png', parent: 'center3' },
                                { id: 'node15', group: 'child', img: '/images/logo_twitter.png', parent: 'center3' },
                                { id: 'node16', group: 'child', img: '/images/tiktok_logo.png', parent: 'center3' }
                            ],
                            links: [
                                { source: 'root', target: 'center1', value: 1 },
                                { source: 'root', target: 'center2', value: 1 },
                                { source: 'root', target: 'center3', value: 1 },
                                { source: 'center1', target: 'node1', value: 1 },
                                { source: 'center1', target: 'node2', value: 1 },
                                { source: 'center1', target: 'node3', value: 1 },
                                { source: 'center1', target: 'node4', value: 1 },
                                { source: 'center1', target: 'node5', value: 1 },
                                { source: 'center1', target: 'node6', value: 1 },
                                { source: 'center2', target: 'node7', value: 1 },
                                { source: 'center2', target: 'node8', value: 1 },
                                { source: 'center2', target: 'node9', value: 1 },
                                { source: 'center2', target: 'node10', value: 1 },
                                { source: 'center2', target: 'node11', value: 1 },
                                { source: 'center3', target: 'node12', value: 1 },
                                { source: 'center3', target: 'node13', value: 1 },
                                { source: 'center3', target: 'node14', value: 1 },
                                { source: 'center3', target: 'node15', value: 1 },
                                { source: 'center3', target: 'node16', value: 1 },
                            ]
                        }
                        } mouseStrength={0.03} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;