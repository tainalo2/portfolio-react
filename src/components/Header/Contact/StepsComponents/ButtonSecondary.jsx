import React from 'react'

function ButtonSecondary({ text, onClick }) {
    return (
        <button className='text-base text-white px-4 py-2 border-2 border-white opacity-70'
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default ButtonSecondary
