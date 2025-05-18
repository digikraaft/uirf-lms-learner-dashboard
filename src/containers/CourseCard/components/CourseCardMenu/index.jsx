import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { useIntl } from '@edx/frontend-platform/i18n';
import { StrictDict } from '@edx/react-unit-test-utils';

import EmailSettingsModal from 'containers/EmailSettingsModal';
import UnenrollConfirmModal from 'containers/UnenrollConfirmModal';
import { reduxHooks } from 'hooks';
import SocialShareMenu from './SocialShareMenu';
import {
  useEmailSettings,
  useUnenrollData,
  useOptionVisibility,
} from './hooks';
import track from 'tracking';


import toggleIcon from 'assets/dots-circle.svg';
import messages from './messages';
import DropdownIconButton from '../Button';

export const testIds = StrictDict({
  unenrollModalToggle: 'unenrollModalToggle',
});

export const CourseCardMenu = ({ cardId }) => {
  const { formatMessage } = useIntl();

  const emailSettings = useEmailSettings();
  const unenrollModal = useUnenrollData();
  // const handleToggleDropdown = useHandleToggleDropdown(cardId);
  const { shouldShowUnenrollItem, shouldShowDropdown } = useOptionVisibility(cardId);
  const { isMasquerading } = reduxHooks.useMasqueradeData();
  const { isEmailEnabled } = reduxHooks.useCardEnrollmentData(cardId);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const trackCourseEvent = reduxHooks.useTrackCourseEvent(
    track.course.courseOptionsDropdownClicked,
    cardId,
  );

  const handleToggleDropdown = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState) {
      trackCourseEvent();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!shouldShowDropdown) {
    return null;
  }

  return (
    <>
      <div ref={dropdownRef} className='relative'>
       <DropdownIconButton
          id={`course-actions-dropdown-${cardId}`}
          onClick={handleToggleDropdown}
          icon={toggleIcon}
          alt={formatMessage(messages.dropdownAlt)}
        />
        {isOpen && (
          <div className="-left-28 top-1 absolute z-20  bg-white shadow-lg px-3 py-1 font-inter rounded border">
            {shouldShowUnenrollItem && (
              <button
                disabled={isMasquerading}
                onClick={unenrollModal.show}
                data-testid={testIds.unenrollModalToggle}
                className='text-sm text-black'
              >
                {formatMessage(messages.unenroll)}
              </button>
            )}
            <SocialShareMenu cardId={cardId} emailSettings={emailSettings} />
          </div>
        )}
      </div>
      <UnenrollConfirmModal
        show={unenrollModal.isVisible}
        closeModal={unenrollModal.hide}
        cardId={cardId}
      />
      {isEmailEnabled && (
        <EmailSettingsModal
          show={emailSettings.isVisible}
          closeModal={emailSettings.hide}
          cardId={cardId}
        />
      )}
    </>
  );
};
CourseCardMenu.propTypes = {
  cardId: PropTypes.string.isRequired,
};

export default CourseCardMenu; 
