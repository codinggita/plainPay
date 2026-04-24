import React from 'react';

const Input = ({ 
  label, 
  error, 
  icon: Icon, 
  className = '', 
  id, 
  ...props 
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium mb-1.5 text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon size={18} />
          </div>
        )}
        <input
          id={id}
          className={`w-full ${Icon ? 'pl-11' : 'px-4'} py-3 bg-white border rounded-xl text-sm outline-none transition-all duration-200 
            ${error 
              ? 'border-red-400 focus:ring-4 focus:ring-red-100' 
              : 'border-gray-200 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-50'
            }`}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-red-500 font-medium">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
