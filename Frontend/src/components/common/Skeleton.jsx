import React from 'react';

const Skeleton = ({ 
  variant = 'text', 
  width, 
  height, 
  className = '' 
}) => {
  const baseStyles = "animate-pulse bg-gray-200";
  
  const variants = {
    text: "h-3 rounded-md mb-2",
    title: "h-6 rounded-lg mb-4",
    circle: "rounded-full",
    rect: "rounded-xl",
  };

  const style = {
    width: width || '100%',
    height: height,
  };

  return (
    <div 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={style}
    />
  );
};

export const SkeletonLoader = ({ type = 'card' }) => {
  if (type === 'card') {
    return (
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <Skeleton variant="title" width="60%" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width="90%" />
        <Skeleton variant="text" width="40%" />
      </div>
    );
  }
  return null;
};

export default Skeleton;
