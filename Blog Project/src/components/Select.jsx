// 
import React, { useId } from 'react';

function Select({ options, label, className, ...props }, ref) {
    const id = useId();

    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className="inline-block mb-1 pl-1 text-white">
                    {label}
                </label>
            )}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-gray-800 text-white outline-none focus:bg-gray-600 duration-200 border border-gray-600 w-full ${className}`}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default React.forwardRef(Select);
