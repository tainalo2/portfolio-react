import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import AnimatedOutlets from "./AnimatedOutlets";

const Hero = () => {
    const containerVariants = {
        hidden: {
            opacity: 1,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    const location = useLocation();

    return (
        <div className="relative w-full h-fit pt-20 transform-gpu">
            <div className="w-full flex justify-center">
                <div className="flex justify-between max-w-screen-xl w-full gap-4">
                    <motion.div
                        className="flex flex-col gap-4 justify-center items-center flex-2 self-start justify-self-start"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <Link to="/devweb">
                            <motion.div variants={cardVariants}>
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
                                    linkedCenter='node-center1'
                                />
                            </motion.div>
                        </Link>

                        <motion.div variants={cardVariants}>
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
                                linkedCenter='node-center2'
                            />
                        </motion.div>

                        <motion.div variants={cardVariants}>
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
                                linkedCenter='node-center3'
                            />
                        </motion.div>
                    </motion.div>
                    <div id="toChange" className="flex-1">
                        <AnimatedOutlets />
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Hero;