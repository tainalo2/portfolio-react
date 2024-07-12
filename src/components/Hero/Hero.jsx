import React from "react";
import AnimatedOutlets from "./AnimatedOutlets";

const Hero = () => {
    return (
        <div className="relative w-full h-fit transform-gpu">
            <div className="w-full flex justify-center">
                <div className="flex justify-between max-w-screen-lg w-full gap-4">
                    <div id="toChange" className="flex-1">
                        <AnimatedOutlets />
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Hero;