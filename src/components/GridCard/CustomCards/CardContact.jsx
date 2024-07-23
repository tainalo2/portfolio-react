import React, { useState, useEffect, useContext } from "react";
import Card from "../Card";
import { motion, useAnimation } from "framer-motion";
import { MyContext } from "../../../MyContext";


const CardContact = ({ colSpan, position }) => {
    const [isHoveredContact, setIsHoveredContact] = useState(false);
    const { setIsContactOpen } = useContext(MyContext);

    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();

    useEffect(() => {
        async function sequence() {
            while (true) {
                await controls1.start({ y: 10, opacity: 1, transition: { delay: 1, duration: 0.5, ease: "easeInOut" } });
                await controls1.start({ y: 0, opacity: 0.7, transition: { delay: 1, duration: 1, ease: "easeInOut" } });
                await controls2.start({ y: 10, opacity: 1, transition: { delay: 1, duration: 0.5, ease: "easeInOut" } });
                await controls2.start({ y: 0, opacity: 0.7, transition: { delay: 1, duration: 1, ease: "easeInOut" } });
                await controls3.start({ y: 10, opacity: 1, transition: { delay: 1, duration: 0.5, ease: "easeInOut" } });
                await controls3.start({ y: 0, opacity: 0.7, transition: { delay: 1, duration: 1, ease: "easeInOut" } });
            }
        }
        sequence();
    }, [controls1, controls2, controls3]);
    return (
        <Card colSpan={colSpan} position={position}>
            <div className="relative w-full h-full cursor-pointer"
                onMouseEnter={() => setIsHoveredContact(true)}
                onMouseLeave={() => setIsHoveredContact(false)}
                onClick={() => setIsContactOpen(true)}
            >
                <div className="w-full h-full absolute top-0 left-0">
                    <div className="w-full h-full flex justify-center items-start gap-6">
                        <motion.img src="/SVG/lightbulb-alt-svgrepo-com.svg" alt=""
                            className="w-9 h-9 opacity-[0.7]"
                            animate={controls1}
                        />
                        <motion.img src="/SVG/phone-call-svgrepo-com.svg" alt=""
                            className="w-9 h-9 mt-1 opacity-[0.7]"
                            animate={controls2}
                        />
                        <motion.img src="/SVG/handshake-svgrepo-com.svg" alt=""
                            className="w-10 h-10 opacity-[0.7]"
                            animate={controls3}
                        />
                    </div>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                    <div className="text-sm opacity-70">
                        Travaillons ensemble !
                    </div>
                </div>

                <div className="absolute bottom-0">
                    <div className="w-full h-full flex justify-start items-end gap-2">
                        <div className="text-3xl font-bold">
                            Me contacter
                        </div>
                        <svg className="invert w-10 h-10 pt-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            style={{
                                transition: 'all 0.3s ease-out',
                                marginLeft: isHoveredContact ? '30px' : '0px',
                            }}
                        ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                </div>
                <div className="absolute"
                    style={{
                        bottom: isHoveredContact ? '0px' : '-50px',
                        right: '0px',
                        transition: 'all 0.3s ease-out',
                    }}
                >
                    <img src="/SVG/mail-svgrepo-com.svg" alt=""
                        className="w-12 h-12"
                    />

                </div>
            </div>
        </Card>
    )
}

export default CardContact