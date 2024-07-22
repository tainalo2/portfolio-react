import React, { useContext } from 'react'
import { ContactContext } from '../Context'

function StepIndicator({ stepNumber, stepName }) {
    const { formStep } = useContext(ContactContext)
    return (
        <div className='flex flex-col justify-center items-center gap-1'
            style={
                { opacity: formStep === stepNumber ? '1' : '0.5', transition: 'opacity 0.2s' }
            }>
            <div className='w-4 h-4 rounded-full bg-white text-slate-900 overflow-hidden flex justify-center items-center font-bold'>
                {stepNumber}
            </div>
            <div className='text-white '>
                {stepName}
            </div>
        </div>
    )
}

export default StepIndicator