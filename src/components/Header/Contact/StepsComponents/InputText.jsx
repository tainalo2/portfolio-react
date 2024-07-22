import React, { useState, forwardRef, useEffect } from 'react'

const InputText = forwardRef(function ({ uniqueName, displayName, value, regex, errorMessage, handleValidInput }, ref) {
    const [isFocused, setIsFocused] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const [isValidInput, setIsValidInput] = useState(true);
    const validationRegex = new RegExp(regex);;

    const checkInput = () => {
        const input = document.querySelector(`input[name="${uniqueName}"]`);
        if (input && input.value.length > 0 && isEmpty) {
            setIsEmpty(false);
        } else if (input && input.value.length === 0 && !isEmpty) {
            setIsEmpty(true);
        }
    }

    const checkValidity = () => {
        const input = document.querySelector(`input[name="${uniqueName}"]`);
        if (validationRegex.test(input.value)) {
            setIsValidInput(true);
            if (handleValidInput) {
                handleValidInput(true);
            }
        } else {
            setIsValidInput(false);
            if (handleValidInput) {
                handleValidInput(false);
            }
        }

    }

    useEffect(() => {
        checkInput();
    }, [])

    return (
        <div className='relative my-6'>
            <input type="text" defaultValue={value} name={uniqueName} className='w-full h-10 p-2 text-white border-2 outline-none bg-transparent'
                style={{
                    borderColor: isFocused ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.3s ease',
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => {
                    setIsFocused(false);
                    checkValidity();
                }}
                onInput={() => checkInput()}
                ref={ref}
            />
            <label htmlFor={uniqueName} className='absolute text-xs bg-slate-900 px-1'
                style={{
                    top: isFocused || !isEmpty ? '-16px' : '-10px',
                    fontWeight: isFocused || !isEmpty ? 'normal' : 'bold',
                    left: '10px',
                    transition: 'all 0.3s ease',
                }}
            >
                {displayName}
            </label>
            <div className='w-full flex justify-start items-center gap-2 overflow-hidden text-red-600 text-xs'
                style={{
                    height: isValidInput ? '0' : 'auto',
                }}
            >
                <img className='w-6 h-6' src="/SVG/warning-circle-svgrepo-com.svg" alt=""
                    style={{
                        filter: 'invert(34%) sepia(100%) saturate(6657%) hue-rotate(1deg) brightness(90%) contrast(86%)',
                        transition: 'all 0.3s ease',
                    }}
                />
                <p>{errorMessage}</p>
            </div>
        </div>
    )
})

export default InputText