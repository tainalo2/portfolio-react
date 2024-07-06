import React from "react";

const Icon = ({svg, url}) => {
    return (
        <a href={url} target="_blank" className="w-4 h-4">
            <img src={svg} alt="" />
        </a>
    );
};

export default Icon;