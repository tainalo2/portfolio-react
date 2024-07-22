import React from "react";
import NavButton from "./NavButton";
import ContactButton from "./ContactButton";

const NavContainerMobile = ({ navTab }) => {
    const navList = navTab.map((tab) => {
        return (
            <NavButton key={tab.name} name={tab.name} url={tab.url} id="mobile" />
        )
    })
    return (
        
        <div className="relative sm:hidden">
            <img src="/SVG/menu-svgrepo-com.svg" alt="" className="w-6 h-6"/>
            <ul className="w-[300px] h-fit flex flex-col justify-start items-end absolute text-center right-0 mt-[10px] p-2 backdrop-blur-sm bg-black/50">
                {navList}
                <ContactButton />
            </ul>
            
        </div>
    )
}

export default NavContainerMobile