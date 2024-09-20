import React from "react";
import AnimatedOutlets from "./AnimatedOutlets";
import { Helmet } from 'react-helmet';



const Hero = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Alexandre RONGIER",
        "url": "https://www.alexandre-rongier.fr", 
        "image": "https://www.alexandre-rongier.fr/images/Alexandre_RONGIER.png", 
        "jobTitle": "Développeur Web / Technicien streaming / Animateur",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance"
        },
        "sameAs": [
          "https://www.twitch.tv/tainalo2",
          "https://twitter.com/tainalo2",
          "https://github.com/tainalo2",
          "https://www.linkedin.com/in/rongier-alexandre/",
          "https://www.youtube.com/@tainalo2"
        ],
        "description": "Développeur web expérimenté et streamer sur Twitch. Passionné par les technologies web et le streaming.",
        "knowsAbout": ["JavaScript", "React", "Node.js", "Streaming", "Twitch", "YouTube"],
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "IUT Saint-Malo"
        }
    };

    return (
        <div className="relative w-full h-fit">
            <Helmet>
                {/* Ajouter le schéma dans le <head> */}
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@tainalo2" />
                <meta name="twitter:creator" content="@tainalo2" />
                <meta name="twitter:title" content="Alexandre RONGIER - Dev Web / Streaming Tech / Animateur" />
                <meta name="twitter:description" content="Développeur React/Node / Technicien streaming / Animateur" />
                <meta name="twitter:image" content="https://www.alexandre-rongier.fr/images/x_card_800_418.png" />
                <meta name="twitter:url" content="https://www.alexandre-rongier.fr" />
            </Helmet>
            <div className="w-full flex justify-center">
                <div className="flex justify-between max-w-screen-lg w-full gap-4">
                    <div id="toChange" className="flex-1">
                        <AnimatedOutlets />
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Hero;