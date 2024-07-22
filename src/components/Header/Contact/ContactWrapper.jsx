import React, { useState, useContext, useEffect } from 'react';
import { ContactContext } from './Context';
import { motion, AnimatePresence } from 'framer-motion';
import Step1Information from './Steps/Step1Information';
import Step2Subject from './Steps/Step2Subject';
import Step3Resume from './Steps/Step3Resume';
import Step4Validation from './Steps/Step4Validation';
import StepIndicator from './StepsComponents/StepIndicator';

const Contact = ({ closeContact }) => {
  const { formStep } = useContext(ContactContext);
  const [localFormStep, setLocalFormStep] = useState(formStep);
  const [prevStep, setPrevStep] = useState(formStep);
  const [direction, setDirection] = useState(-1);

  useEffect(() => {
    if (formStep > prevStep) {
      setDirection(1);
    } else if (formStep < prevStep) {
      setDirection(-1);
    }
    setPrevStep(formStep);
    setLocalFormStep(formStep);
  }, [formStep, prevStep]);

  const renderStep = () => {
    switch (localFormStep) {
      case 1:
        return <Step1Information />;
      case 2:
        return <Step2Subject />;
      case 3:
        return <Step3Resume />;
      case 4:
        return <Step4Validation />;
      default:
        return <Step1Information />;
    }
  };

  const stepNames = ["Information", "Sujet", "Resume"];

  const pageVariants = {
    initial: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    animate: { opacity: 1, x: 0 },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    }),
  };

  return (
    <div className='w-full h-full absolute top-0 left-0 z-20 backdrop-blur-sm'>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='min-w-[480px] max-w-lg w-[95%] min-h-[480px] h-fit flex flex-col gap-4 justify-start items-start rounded-xl bg-slate-900 p-4'>
          <div className='w-full flex justify-between items-center'>
            <h2>Me contacter</h2>
            <div className='w-4 h-4 cursor-pointer' onClick={closeContact}>
              <img src="/SVG/close-svgrepo-com.svg" alt="close" />
            </div>
          </div>
          <div className='w-full flex justify-evenly text-xs '>
              {
                stepNames.map((stepName, index) => {
                  return (
                    <StepIndicator key={index} stepNumber={index + 1} stepName={stepName} />
                  )
                })
              }
          </div>

          <AnimatePresence mode='wait' initial={false} custom={direction}>
            <motion.div
              key={localFormStep}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              custom={direction}
              transition={{
                x: { type: "tween", stiffness: 300, damping: 20, duration: 0.2 },
                opacity: { duration: 0.2 }
              }}
              className='w-full'
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
