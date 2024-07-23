import React, { useContext } from 'react'
import { ContactContext } from '../Context';

function StepResume() {
    const { formReferences } = useContext(ContactContext);
  return (
    <div className='w-full'>
        {Object.keys(formReferences).map((key, index) => (
            <div className='w-full' key={index}>
                <p className='text-white text-xs font-semibold'>{formReferences[key].displayName}</p>
                <p className='text-white'>{formReferences[key].value}</p>
                <div className='w-full h-[1px] bg-white mb-4'></div>
            </div>
            
        ))}
    </div>
  )
}

export default StepResume
