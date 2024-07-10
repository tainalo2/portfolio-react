import React, { useState } from "react";
import Card from "../../../GridCard/Card";
import { motion } from "framer-motion";

const CardDispo = ({colSpan, position}) => {
    const [isHoveredDispo, setIsHoveredDispo] = useState(false);

    return (
        <Card colSpan={colSpan} position={position}>
            <div className="w-full h-full relative text-green-400"
                onMouseEnter={() => setIsHoveredDispo(true)}
                onMouseLeave={() => setIsHoveredDispo(false)}
            >
                <div className="w-full h-full flex justify-between">
                    <div className="text-3xl font-bold">
                        Disponibilité
                    </div>
                    <div className="w-[0px] h-[0px] rounded-full bg-green-400 shadow-current" style={{ boxShadow: "0px 0px 105px 70px rgba(66,200,115,0.9)" }}></div>
                </div>
                <div className="absolute overflow-hidden"
                    style={{
                        width: "calc(100% + 200px)",
                        height: "calc(100% + 100px)",
                        left: "-100px",
                        top: isHoveredDispo ? "28%" : "60%",
                        transition: "top 0.3s ease-in-out",
                    }}
                >
                    <div className="w-full h-full flex flex-col justify-center items-center gap-1">
                        <motion.div
                            key={isHoveredDispo ? 'hovered' : 'not-hovered'}
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                                duration: 2,
                                repeat: isHoveredDispo ? 0 : Infinity,
                                repeatType: 'loop' // Options: 'loop', 'mirror', 'reverse'
                            }}
                        >
                            <svg className="invert w-6 h-6 rotate-[-90deg]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                        </motion.div>
                        <div className="w-full h-full overflow-hidden  flex justify-center rounded-[100%]"
                            style={{
                                boxShadow: "inset 0px 0px 30px 10px rgba(66,200,115,0.5)",
                            }}
                        >
                            <div className="text-2xl font-bold mt-8">Immédiate</div>
                        </div>

                    </div>
                </div>
            </div>
        </Card>
    )
}

export default CardDispo