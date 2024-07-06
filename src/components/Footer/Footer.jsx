import React from "react";
import Icon from "./Icon";


const Footer = () => {
    return (
        <footer className="w-full h-20 text-white flex justify-center items-center text-xs absolute bottom-0">
            <div className="w-full max-w-screen-xl  flex items-center h-full gap-8 justify-between">
                <div className="text-start">
                    <div>Alexandre RONGIER</div>
                    <div>Tous droits réservés © 2024</div>
                </div>

                <div className="flex items-center justify-center gap-2">
                    <Icon
                        svg="/SVG/github-svgrepo-com.svg"
                        url="https://github.com/tainalo2"
                    />
                    <Icon
                        svg="/SVG/linkedin-svgrepo-com.svg"
                        url="https://www.linkedin.com/in/rongier-alexandre/"
                    />
                    <Icon
                        svg="/SVG/twitter-svgrepo-com.svg"
                        url="https://twitter.com/tainalo2"
                    />
                    <Icon
                        svg="/SVG/youtube-svgrepo-com.svg"
                        url="https://www.youtube.com/@tainalo2"
                    />
                    <Icon
                        svg="/SVG/twitch-svgrepo-com.svg"
                        url="https://www.twitch.com/tainalo2"
                    />
                </div>
            </div>

        </footer>
    );
};

export default Footer;

