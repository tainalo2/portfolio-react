import React from 'react'

function ButtonPrimary({ text, onClick }) {
    return (
        <button className='text-base font-bold text-white px-4 py-2 border-2 border-white'
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default ButtonPrimary
