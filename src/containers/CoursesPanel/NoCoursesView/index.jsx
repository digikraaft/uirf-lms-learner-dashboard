import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Button, Image } from '@openedx/paragon';
import { Search } from '@openedx/paragon/icons';
import { baseAppUrl } from 'data/services/lms/urls';

import emptyCourseSVG from 'assets/empty-course.svg';
import { reduxHooks } from 'hooks';

import messages from './messages';
import './index.scss';

export const NoCoursesView = () => {
  const { formatMessage } = useIntl();
  const { courseSearchUrl } = reduxHooks.usePlatformSettingsData();
  return (
    <> 
      {/* <div
        id="no-courses-content-view"
        className="d-flex align-items-center justify-content-center mb-4.5"
      >
        <Image src={emptyCourseSVG} alt={formatMessage(messages.bannerAlt)} />
        <h1>
          {formatMessage(messages.lookingForChallengePrompt)}
        </h1>
        <p>
          {formatMessage(messages.exploreCoursesPrompt)}
        </p>
        <Button
          variant="brand"
          as="a"
          href={baseAppUrl(courseSearchUrl)}
          iconBefore={Search}
        >
          {formatMessage(messages.exploreCoursesButton)}
        </Button>
      </div> */}
      <div className="w-full xl:min-h-[100vh] flex justify-center items-center border ">
        <div>
          <div className="w-full flex justify-center">
            <div className='flex justify-center items-center  border-[#E5E7EB] '>
              <img
                src="../asset/empty.svg"
                alt="illustration on learning"
                className='scale-50 border-2 border-[#E5E7EB]'
              />
            </div>       
          </div>
          <div className="flex justify-center">
            <div className="text-lg xl:text-xl font-poppins font-medium text-black  text-center">
              You currently do not have any course enrolled..... {' '}
              <a href={baseAppUrl(courseSearchUrl)} className="text-cFF0 whitespace-nowrap">
                Click here
              </a> <br /> to enrol to a new course.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoCoursesView;
