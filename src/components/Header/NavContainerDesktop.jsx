import React from "react";
import NavButton from "./NavButton";



const NavContainerDesktop = ({ navTab, motionId }) => {
    const navList = navTab.map((tab) => {
        return (
            <NavButton key={tab.name} name={tab.name} url={tab.url} id={motionId} />
        )
    })
    return (
        <nav>
            <ul className='flex gap-6'>
                {navList}
            </ul>
        </nav>
    )
}

export default NavContainerDesktop