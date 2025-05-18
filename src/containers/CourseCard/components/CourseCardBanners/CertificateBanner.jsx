/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import { MailtoLink, Hyperlink } from '@openedx/paragon';
import { CheckCircle } from '@openedx/paragon/icons';
import { useIntl } from '@edx/frontend-platform/i18n';

import { utilHooks, reduxHooks } from 'hooks';
// import div from 'components/div';

import messages from './messages';

const { useFormatDate } = utilHooks;

export const Certificatediv = ({ cardId }) => {
  const certificate = reduxHooks.useCardCertificateData(cardId);
  const {
    isAudit,
    isVerified,
  } = reduxHooks.useCardEnrollmentData(cardId);
  const { isPassing } = reduxHooks.useCardGradeData(cardId);
  const { isArchived } = reduxHooks.useCardCourseRunData(cardId);
  const { minPassingGrade, progressUrl } = reduxHooks.useCardCourseRunData(cardId);
  const { supportEmail, billingEmail } = reduxHooks.usePlatformSettingsData();
  const { formatMessage } = useIntl();
  const formatDate = useFormatDate();

  const emailLink = address => <MailtoLink to={address}>{address}</MailtoLink>;

  if (certificate.isRestricted) {
    return (
      <div variant="danger">
        { supportEmail ? formatMessage(messages.certRestricted, { supportEmail: emailLink(supportEmail) }) : formatMessage(messages.certRestrictedNoEmail)}
        {isVerified && '  '}
        {isVerified && (billingEmail ? formatMessage(messages.certRefundContactBilling, { billingEmail: emailLink(billingEmail) }) : formatMessage(messages.certRefundContactBillingNoEmail))}
      </div>
    );
  }
  if (certificate.isDownloadable) {
    return (
      <div variant="success" icon={CheckCircle}>
        {formatMessage(messages.certReady)}
        {certificate.certPreviewUrl && (
          <>
            {'  '}
            <Hyperlink isInline destination={certificate.certPreviewUrl}>
              {formatMessage(messages.viewCertificate)}
            </Hyperlink>
          </>
        )}
      </div>
    );
  }
  if (!isPassing) {
    if (isAudit) {
      return (
        <div>
          {formatMessage(messages.passingGrade, { minPassingGrade })}
        </div>
      );
    }
    if (isArchived) {
      return (
        <div variant="warning">
          {formatMessage(messages.notEligibleForCert)}
          {'  '}
          <Hyperlink isInline destination={progressUrl}>{formatMessage(messages.viewGrades)}</Hyperlink>
        </div>
      );
    }
    return (
      <div variant="warning">
        {formatMessage(messages.certMinGrade, { minPassingGrade })}
      </div>
    );
  }
  if (certificate.isEarnedButUnavailable) {
    return (
      <div>
        {formatMessage(
          messages.gradeAndCertReadyAfter,
          { availableDate: formatDate(certificate.availableDate) },
        )}
      </div>
    );
  }

  return null;
};
Certificatediv.propTypes = {
  cardId: PropTypes.string.isRequired,
};

export default Certificatediv;
