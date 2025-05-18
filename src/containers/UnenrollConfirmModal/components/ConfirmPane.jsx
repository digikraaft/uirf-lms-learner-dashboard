import React from 'react';
import PropTypes from 'prop-types';

import { useIntl } from '@edx/frontend-platform/i18n';
import {
  ActionRow,
  Button,
} from '@openedx/paragon';

import messages from './messages';

export const ConfirmPane = ({
  handleClose,
  handleConfirm,
}) => {
  const { formatMessage } = useIntl();
  return (
    <>
      <h4>{formatMessage(messages.confirmHeader)}</h4>
      <div className='flex items-center space-x-4 mt-3'>
        <button className='border px-3 py-1.5 rounded-md border-grey text-black'  onClick={handleClose}>
          {formatMessage(messages.confirmCancel)}
        </button>
        <button className='bg-cFF0 text-white px-3 py-1.5 rounded-md' onClick={handleConfirm}>
          {formatMessage(messages.confirmUnenroll)}
        </button>
      </div>
    </>
  );
};
ConfirmPane.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
};

export default ConfirmPane;
