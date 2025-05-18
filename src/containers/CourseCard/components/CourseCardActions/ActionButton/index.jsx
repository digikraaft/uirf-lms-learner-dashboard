import React from 'react';
import useIsCollapsed from './hooks';

export const ActionButton = ({ className = '', children, ...rest }) => {
  const isSmall = useIsCollapsed();
  const sizeClasses = isSmall ? 'text-sm py-1 px-3' : 'py-2 px-4';

  return (
    <button
      className={`bg-cFF0 px-3 text-sm py-2 rounded xl:px-6 font-medium xl:text-base text-white ${sizeClasses} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ActionButton;
