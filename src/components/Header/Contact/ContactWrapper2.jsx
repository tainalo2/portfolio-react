import React, { useState, useContext, useEffect, useRef, createRef } from 'react';
import { ContactContext } from './Context';
import { motion, AnimatePresence } from 'framer-motion';
import steps from './Steps/Steps';
import StepIndicator from './StepsComponents/StepIndicator';
import Step from './StepsComponents/Step';
import InputText from './StepsComponents/InputText';
import ButtonSecondary from './StepsComponents/ButtonSecondary';
import ButtonPrimary from './StepsComponents/ButtonPrimary';


const Contact = ({ closeContact }) => {
  const { formStep, formReferences, setFormStep } = useContext(ContactContext);
  const [localFormStep, setLocalFormStep] = useState(formStep);
  const [prevStep, setPrevStep] = useState(formStep);
  const [direction, setDirection] = useState(-1);

  steps.forEach((step) => {
    step.inputs.forEach((input) => {
      if (!formReferences[input.uniqueName]) {
        formReferences[input.uniqueName] = {
          value: '',
          isValid: true,
          inputRef: createRef(null)
        };
        if (input.defaultValue) {
          formReferences[input.uniqueName].value = input.defaultValue;
        }
      }
    });
  });

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
    var stepToRender = null;
    if (steps[localFormStep - 1]) {
      stepToRender = steps[localFormStep - 1];
    } else if (localFormStep === steps.length + 1) {
      stepToRender = "Resume";
    } else if (localFormStep === steps.length + 2) {
      stepToRender = "Validation";
    }

    return (
      <Step>
        {
          stepToRender.step &&
          stepToRender.inputs.map((input, index) => (
            <InputText
              key={index}
              uniqueName={input.uniqueName}
              displayName={input.displayName}
              value={formReferences[input.uniqueName].value}
              ref={formReferences[input.uniqueName].inputRef}
              regex={input.regex}
              errorMessage={input.errorMessage}
            />
          ))
        }
        <div className='w-full flex justify-end items-center gap-2'>
          {stepToRender.step > 1 && <ButtonSecondary text="Precedent" onClick={() => setFormStep(formStep - 1)} />}
          <ButtonPrimary text="Suivant" onClick={nextButtonClick} />
        </div>
      </Step>
    )
  };

  const nextButtonClick = () => {

    const stepToSave = steps[localFormStep - 1];
    stepToSave.inputs.forEach((input) => {
      formReferences[input.uniqueName].value = formReferences[input.uniqueName].inputRef.current.value;
    });
    setFormStep(formStep + 1);
  };

  const stepNames = [];
  steps.forEach((step) => {
    stepNames.push(step.name);
  });
  stepNames.push('Resume');


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
