import React, { useState, useContext, useRef } from 'react';
import { ContactContext } from '../Context';
import Step from '../StepsComponents/Step';
import InputText from '../StepsComponents/InputText';
import ButtonPrimary from '../StepsComponents/ButtonPrimary';

function Step1Information() {
  const { formStep, setFormStep, userName, setUserName, userFirstName, setUserFirstName, userEmail, setUserEmail, userPhone, setUserPhone } = useContext(ContactContext);

  const inputRefs = {
    firstName: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    phone: useRef(null)
  };

  const [validationStates, setValidationStates] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false
  });

  const handleValidInput = (name, newState) => {
    setValidationStates((prevState) => ({ ...prevState, [name]: newState }));
  };

  const inputs = [
    {
      uniqueName: 'firstName',
      displayName: 'Prénom',
      value: userName,
      ref: inputRefs.firstName,
      regex: '^[a-zA-Z]+$',
      errorMessage: 'Veuillez entrer un prénom valide',
      handleValidInput: (newState) => handleValidInput('firstName', newState)
    },
    {
      uniqueName: 'lastName',
      displayName: 'Nom',
      value: userFirstName,
      ref: inputRefs.lastName
    },
    {
      uniqueName: 'email',
      displayName: 'Email',
      value: userEmail,
      ref: inputRefs.email,
      regex: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
      errorMessage: 'Veuillez entrer une adresse email valide',
      handleValidInput: (newState) => handleValidInput('email', newState)
    },
    {
      uniqueName: 'phone',
      displayName: 'Téléphone',
      value: userPhone,
      ref: inputRefs.phone
    }
  ];

  const handleButtonClick = () => {
    setUserName(inputRefs.firstName.current.value);
    setUserFirstName(inputRefs.lastName.current.value);
    setUserEmail(inputRefs.email.current.value);
    setUserPhone(inputRefs.phone.current.value);
    setFormStep(formStep + 1);
  };

  return (
    <Step>
      {inputs.map((input, index) => (
        <InputText
          key={index}
          uniqueName={input.uniqueName}
          displayName={input.displayName}
          value={input.value}
          ref={input.ref}
          regex={input.regex}
          errorMessage={input.errorMessage}
          handleValidInput={input.handleValidInput}
        />
      ))}
      <div className='w-full flex justify-end items-center gap-2'>
        <ButtonPrimary text="Suivant" onClick={handleButtonClick} />
      </div>
    </Step>
  );
}

export default Step1Information;
