import React, { useState } from "react";
import Card from "../Card";

const CardSponsor = ({ colSpan, position, url, image }) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card colSpan={colSpan} position={position}>
            <div className="w-full h-full flex justify-center items-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <a href={url} target="_blank" rel="noreferrer" className="w-full h-full relative">
                    <div className="absolute text-sm opacity-70">
                        Sponsor
                    </div>
                    <div className="w-full h-full flex justify-center items-center text-xl font-bold text-center">
                        {image && <img className="my-[-5%]" src={image} alt="" />}
                        {!image &&
                            <span className="w-full h-full flex justify-center items-center">
                                Emplacement disponible
                                <span>
                                    <img className="antialiased max-w-[40px] ml-[5px]" src="/images/winking_face.png" alt="" />
                                </span>
                            </span>}
                    </div>
                    {image && <img className="w-[90px] absolute" src="/images/partying_face.png" alt=""
                        style={{
                            bottom: isHovered ? '-20px' : '-100px',
                            left: isHovered ? '-20px' : '-100px',
                            rotate: '-10deg',
                            transition: 'all 0.3s ease'
                        }}
                    />}
                    {image && <img className="w-[90px] absolute scale-x-[-1]" src="/images/partying_face.png" alt=""
                        style={{

                            bottom: isHovered ? '-20px' : '-100px',
                            right: isHovered ? '-20px' : '-100px',
                            rotate: '-10deg',
                            transition: 'all 0.3s ease'
                        }}
                    />}


                    {!image && <img className="w-[90px] absolute" src="/images/winking_face.png" alt=""
                        style={{
                            bottom: isHovered ? '-20px' : '-100px',
                            left: isHovered ? '-20px' : '-100px',
                            rotate: '-10deg',
                            transition: 'all 0.3s ease'
                        }}
                    />}
                    {!image && <img className="w-[90px] absolute scale-x-[-1]" src="/images/winking_face.png" alt=""
                        style={{

                            bottom: isHovered ? '-20px' : '-100px',
                            right: isHovered ? '-20px' : '-100px',
                            rotate: '-10deg',
                            transition: 'all 0.3s ease'
                        }}
                    />}
                    {!image && <img className="w-[90px] absolute scale-x-[-1]" src="/images/winking_face.png" alt=""
                        style={{

                            top: isHovered ? '-20px' : '-100px',
                            right: isHovered ? '-20px' : '-100px',
                            rotate: '10deg',
                            transition: 'all 0.3s ease'
                        }}
                    />}
                    {!image && <img className="w-[90px] absolute" src="/images/winking_face.png" alt=""
                        style={{
                            top: isHovered ? '-20px' : '-100px',
                            left: isHovered ? '-20px' : '-100px',
                            rotate: '10deg',
                            transition: 'all 0.3s ease'
                        }}
                    />}
                </a>
            </div>

        </Card>
    );
};

export default CardSponsor;