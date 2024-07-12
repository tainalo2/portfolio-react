import React, { useState, useContext } from "react";
import { MyContext } from "../../MyContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const NavButton = ({ name, url }) => {
    const { selectedTab } = useContext(MyContext);
    const [ isHovered, setIsHovered ] = useState(false);

    return (
        <li key={name} className='text-sm font-semibold relative'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                opacity: selectedTab === url ? '1' : isHovered ? '1' : '0.5',
                transition: 'opacity 0.2s'
            }}

        >
            <Link to={url}>
                {name}
            </Link>
            {url === selectedTab ? (
                <motion.div
                    className="absolute bottom-[-5px] w-[5px] h-[5px] mx-[50%] rounded-full bg-white"
                    layoutId="navIndicator"
                    transition={{
                        type: 'spring',
                        bounce: 0.4
                    }}

                />
            ) : null}
        </li>
    )
}

export default NavButton