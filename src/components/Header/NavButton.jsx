import React, { useState, useContext } from "react";
import { MyContext } from "../../MyContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



const NavButton = ({ name, url, id }) => {
    const { selectedTab } = useContext(MyContext);
    const [ isHovered, setIsHovered ] = useState(false);
    return (
        <li key={name} className='font-semibold relative text-xs lg:text-sm'
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
                    className="absolute w-[5px] h-[5px] rounded-full bg-white left-[-10px] bottom-[30%] sm:left-0 sm:bottom-[-5px]  sm:mx-[50%]"
                    layoutId={"navButtonId"+id}
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