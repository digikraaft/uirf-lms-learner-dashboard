import React from 'react';
import PropTypes from 'prop-types';


const DropdownIconButton = ({
  id,
  onClick,
  icon,
  alt,
  className = '',
  ...rest
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={` ${className}`}
      aria-label={alt}
      {...rest}
    >
      <img src={icon} alt={alt} />
    </button>
  );
};

DropdownIconButton.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired, 
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default DropdownIconButton;
