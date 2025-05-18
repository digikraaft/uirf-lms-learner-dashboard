// AccessMessage.jsx
import React from 'react';
import PropTypes from 'prop-types';
import useCardDetailsData from './hooks';

const AccessMessage = ({ cardId }) => {
  const { isEntitlement, isFulfilled, accessMessage } = useCardDetailsData({ cardId });

  const shouldShow = !(isEntitlement && !isFulfilled) && accessMessage;

  return ( 
    
    <div className=' mt-1'>
     { shouldShow ? <span className='text-xs xl:text-base font-medium text-[#787878]'>{accessMessage}</span> : null }
    </div>
   )
};

AccessMessage.propTypes = {
  cardId: PropTypes.string.isRequired,
};

export default AccessMessage;
