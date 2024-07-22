import React, { useContext } from 'react'
import { ContactContext } from '../Context'
import InputText from '../StepsComponents/InputText'
import Step from '../StepsComponents/Step'
import ButtonSecondary from '../StepsComponents/ButtonSecondary'
import ButtonPrimary from '../StepsComponents/ButtonPrimary'

function Step1Information() {
  const {  formStep, setFormStep } = useContext(ContactContext)
  return (
    <div>
      <Step>
        <InputText uniqueName="firstname" displayName="Prénom" />
        <InputText uniqueName="lastname" displayName="Nom" />
        <InputText uniqueName="email" displayName="Email" />
        <InputText uniqueName="phone" displayName="Téléphone" />
        <div className='w-full flex justify-end items-center gap-2'>
          <ButtonSecondary text="Précédent" onClick={() => setFormStep(formStep - 1)} />
          <ButtonPrimary text="Suivant" onClick={() => setFormStep(formStep + 1)} />
        </div>
      </Step>
    </div>
  )
}

export default Step1Information
