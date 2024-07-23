import React, { useState, forwardRef } from 'react'

const Select = forwardRef(function ({ uniqueName, displayName, value, options }, ref) {

    return (
        <div className='relative my-6 flex flex-col'>
            <label htmlFor={uniqueName} className='text-xs px-1'>
                {displayName}
            </label>
            <select name={uniqueName} defaultValue={value} className='w-fit h-10 p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' ref={ref} >
                {options.map((option, index) => (
                    <option key={index} value={option.value} className='bg-transparent'>{option.label}</option>
                ))}
            </select>
        </div>
    )
})

export default Select