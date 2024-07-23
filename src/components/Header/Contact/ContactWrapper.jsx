import React, { useState, useContext, useEffect, createRef } from 'react';
import { ContactContext } from './Context';
import { motion, AnimatePresence } from 'framer-motion';
import { steps, fetchInfo } from './Steps';
import StepIndicator from './StepsComponents/StepIndicator';
import Step from './StepsComponents/Step';
import InputText from './StepsComponents/Inputs/InputText';
import ButtonSecondary from './StepsComponents/ButtonSecondary';
import ButtonPrimary from './StepsComponents/ButtonPrimary';
import Textarea from './StepsComponents/Inputs/Textarea';
import Select from './StepsComponents/Inputs/Select';
import StepResume from './StepsComponents/StepResume';
import StepValidation from './StepsComponents/Inputs/StepValidation';


const ContactWrapper = ({ closeContact }) => {
  const { formStep, formReferences, setFormStep } = useContext(ContactContext);
  const [localFormStep, setLocalFormStep] = useState(formStep);
  const [prevStep, setPrevStep] = useState(formStep);
  const [direction, setDirection] = useState(-1);
  const [currentFormIsValid, setCurrentFormIsValid] = useState(true);

  // UseEffect to control the direction of the animation and trigger the animation when the formStep changes
  useEffect(() => {
    if (formStep > prevStep) {
      setDirection(1);
    } else if (formStep < prevStep) {
      setDirection(-1);
    }
    setPrevStep(formStep);
    setCurrentFormIsValid(true);
    setLocalFormStep(formStep);
  }, [formStep, prevStep]);

  // Variants for the animation
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

  // Initialze dynamicly the step names for the step indicator
  const stepNames = [];
  steps.forEach((step) => {
    stepNames.push(step.name);
  });
  stepNames.push('Resume');

  // Initialize dynamicly the formReferences with default values
  steps.forEach((step) => {
    step.inputs.forEach((input) => {
      if (!formReferences[input.uniqueName]) {
        formReferences[input.uniqueName] = {
          value: '',
          isValid: null,
          inputRef: createRef(null),
          displayName: input.displayName
        };
        if (input.defaultValue) {
          formReferences[input.uniqueName].value = input.defaultValue;
        }
      }
    });
  });

  // Render the current step with exceptions for first step, resume and validation
  const renderStep = () => {
    var stepToRender = "";
    if (steps[localFormStep - 1]) {
      stepToRender = steps[localFormStep - 1];
    }

    return (
      <Step>
        {
          stepToRender !== "" && stepToRender.inputs.map((input, index) => (
            <React.Fragment key={index}>
              {input.type === 'inputText' && (
                <InputText
                  uniqueName={input.uniqueName}
                  displayName={input.displayName}
                  value={formReferences[input.uniqueName].value}
                  ref={formReferences[input.uniqueName].inputRef}
                  regex={input.regex}
                  errorMessage={input.errorMessage}
                />
              )}
              {input.type === 'textarea' && (
                <Textarea
                  uniqueName={input.uniqueName}
                  displayName={input.displayName}
                  value={formReferences[input.uniqueName].value}
                  ref={formReferences[input.uniqueName].inputRef}
                  maxLength={input.maxLength}
                  errorMessage={input.errorMessage}
                />
              )}
              {input.type === 'select' && (
                <Select
                  uniqueName={input.uniqueName}
                  displayName={input.displayName}
                  value={formReferences[input.uniqueName].value}
                  ref={formReferences[input.uniqueName].inputRef}
                  options={input.options}
                />
              )}
            </React.Fragment>
          ))
        }
        {
          localFormStep === steps.length + 1 &&
          <StepResume />
        }
        {
          localFormStep === steps.length + 2 &&
          <StepValidation />
        }
        <div className='w-full max-h-[200px] text-sm text-red-600 text-center flex justify-center items-center m-4 overflow-hidden'
          style={{
            height: currentFormIsValid ? '0' : 'auto',
            transition: 'all 0.3s ease',
          }}
        >
          Des champs obligatoire sont manquants ou incorrectes
        </div>
        <div className='w-full flex justify-end items-center gap-2'>
          {stepToRender.step > 1 && <ButtonSecondary text="Precedent" onClick={() => moveStepButtonClick(-1)} />}
          {localFormStep !== steps.length + 2  && <ButtonPrimary text="Suivant" onClick={() => moveStepButtonClick(1)} />}
        </div>
      </Step>
    )
  };

  // Function on next button click to go to the next step
  const moveStepButtonClick = (direction) => {
    var isValid = true;
    if (steps[localFormStep - 1]) {
      const stepToSave = steps[localFormStep - 1];


      stepToSave.inputs.forEach((input) => {
        formReferences[input.uniqueName].value = formReferences[input.uniqueName].inputRef.current.value;
        if (!formReferences[input.uniqueName].isValid && input.required) {
          isValid = false;
        }
      });

    }

    if (direction > 0) {
      if (isValid) {
        setFormStep(formStep + 1);
      } else {
        setCurrentFormIsValid(false);
      }
    } else {
      setFormStep(formStep - 1);
    }
  };

  return (
    <div className='w-full h-full absolute top-0 left-0 z-20 backdrop-blur-sm'>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='min-w-[300px] max-w-lg w-[95%] min-h-[480px] h-fit flex flex-col gap-4 justify-start items-start rounded-xl bg-slate-900 p-4 transition-all duration-300 ease-in-out'>
          <div className='w-full flex justify-between items-center transition-all duration-300 ease-in-out'>
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

export default ContactWrapper;
