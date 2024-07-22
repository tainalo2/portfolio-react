import React from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";



const AnimatedOutlets = () => {
    const location = useLocation();
    const element = useOutlet();
    const pageVariants = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    };
    return (
        <AnimatePresence mode="wait" initial={true}>
            <motion.div
                key={location.pathname} // Add this line
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: .3, ease: 'easeInOut' }}
            >
                {element && React.cloneElement(element, { key: location.pathname })}
            </motion.div>

        </AnimatePresence>
    );
};

export default AnimatedOutlets;