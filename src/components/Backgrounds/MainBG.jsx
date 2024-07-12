import React from "react";

export default function MainBG() {
    const svgBackground = "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\"><circle cx=\"5\" cy=\"5\" r=\"2\" fill=\"white\"/></svg>')";
    return (
        <div
        className="absolute inset-0 top-0 w-full h-100 overflow-hidden opacity-50"
        style={
            {
                maskImage: 'radial-gradient(70% 100% at 50% -30%, hsl(207.9, 16.3%, 66.3%), rgba(185, 22, 22, 0))',
            }
        }
        >
            <div
                className="w-full h-full bg-[hsl(206,81.9%,65.3%,0.45)]"
            ></div>
            <div className="top-4 left-0 absolute w-full h-full"
            style={{
                backgroundImage: svgBackground
            }}
            ></div>
        </div>


    );
}

