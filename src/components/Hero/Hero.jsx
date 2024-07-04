import React from "react";
import Card from "./Card";

const Hero = () => {
    return (
        <div className="relative w-full h-fit pt-20 transform-gpu">
            <div className="absolute inset-0 top-[-2.5rem] bg-[image:radial-gradient(100%_100%_at_50%_-25%,hsl(206,81.9%,65.3%,0.5),rgba(255,255,255,0))]"></div>
            <div className="w-full flex justify-center">
                <div className="flex justify-between max-w-screen-xl max-w-screen-xl w-full">
                    <div className="flex flex-col gap-4 justify-center items-center flex-1">
                        <Card
                            images={["/images/Open_Broadcaster_Software_Logo.png", "logo192.png", "/images/HTML5_logo.png", "/images/node-red_logo.png", "/images/JavaScript_logo.png"]}
                        />
                        <Card
                            images={["/images/Open_Broadcaster_Software_Logo.png", "logo192.png", "/images/HTML5_logo.png", "/images/node-red_logo.png", "/images/JavaScript_logo.png"]}

                        />
                    </div>
                    <div className="flex-1">

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;