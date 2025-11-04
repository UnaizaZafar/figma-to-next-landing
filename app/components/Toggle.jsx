'use client'
import { useState } from "react";
const Toggle = () => {
    const [isOn, setIsOn] = useState(true);
    const handleToggle = () => {
        setIsOn(!isOn);
    };
    return (

        <button
            type="button"
            onClick={handleToggle}
            className={`relative inline-flex items-center w-5.5 h-3.5 rounded-full transition-colors duration-300 ease-in-out ${isOn ? 'bg-green-500' : 'bg-gray-300'}
        `}
            aria-checked={isOn}
        >
            <span
                aria-hidden="true"
                className={` pointer-events-none inline-block w-2.5 h-2.5 rounded-full bg-white shadow-lg transform ring-0 transition duration-300 ease-in-out
            ${isOn ? 'translate-x-2.5' : 'translate-x-1'}
          `}
            />
        </button>
    )
}

export default Toggle