import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CourseCardImage from './components/CourseCardImage';
import CourseCardTitle from './components/CourseCardTitle';
import CourseCardActions from './components/CourseCardActions';
import CourseCardMenu from './components/CourseCardMenu';
import CourseCardDetails from './components/CourseCardDetails';
import AccessMessage from './components/CourseCardDetails/AccessMessage';
import CourseCardBanners from './components/CourseCardBanners';

const CourseCardNew = ({cardId}) => {
  const [progress] = useState(70);

  return (
    <div className="shadow drop-shadow-sm">
      <div className="bg-white py-3 px-3 xl:px-8 rounded-t-lg rounded-b-lg">
        <div className="w-full flex flex-col lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/3">
            <div className="w-full h-[143px] lg:h-[200px] relative">
              <div className="size-full">
                {/* <img
                  src="../asset/course.png"
                  alt="course-image"
                  className="w-full h-full object-cover xl:bg-center"
                /> */}
                <CourseCardImage cardId={cardId} />
                <div className="absolute px-6 py-2 xl:py-3 xl:px-8 bg-white left-6 -bottom-6 xl:bottom-6 shadow">
                  <div className="size-[46px] lg:size-[65px]">
                    <img
                      src="../asset/logo.png"
                      alt="course logo"
                      className="object-cover bg-center size-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 flex items-center divide-x divide-[#787878] xl:h-[200px]">
            <div className="w-2/3 lg:w-1/2 h-full flex items-center px-3 lg:px-6">
              <div>
                {/* <a href='#' className="text-sm xl:text-xl font-medium text-black mt-3">
                  OpenedX Demo Course
                </a> */}
                <CourseCardTitle cardId={cardId}/>
                <div className="mt-3 lg:mt-6 block">
                  {/* <a
                    href="singleCourse.html"
                    className="bg-cFF0 px-3 text-sm py-2 rounded xl:px-6 font-medium xl:text-base text-white"
                  >
                    Continue Learning
                  </a> */}
                </div>
                <CourseCardActions cardId={cardId} />
              </div>
            </div>
            <div className="w-1/3 lg:w-1/2 mt-8 xl:mt-0">
              <div className="hidden w-full lg:flex justify-end py-3">
                <div className="flex flex-col items-center relative">
                 <CourseCardMenu cardId={cardId} />
                </div>
              </div>
              <div className="w-full flex justify-center">
                {/* Progress bar */}
                <div className="relative size-[80px] lg:size-[150px] xl:size-[180px]">
                  {/* Background Circle */}
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#eee"
                      strokeWidth="10"
                      fill="none"
                    ></circle>
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#ff7a00"
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - (progress / 100) * 251.2}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    ></circle>
                  </svg>

                  {/* Center Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-700">
                    <span className="text-[8px] xl:text-sm">Completed</span>
                    <span className="text-sm xl:text-lg font-bold">
                      {progress}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row xl:items-center justify-between lg:mt-4">
          <CourseCardDetails cardId={cardId} />
          <AccessMessage cardId={cardId} />  
        </div>
      </div>
      <div className="bg-main px-4 md:px-8 lg:px-10 xl:px-16 py-2 rounded-b-lg flex items-center space-x-1">
        <img src="../asset/info.svg" alt="info" />
        <CourseCardBanners cardId={cardId} />
      </div>
    </div>
  );
};

CourseCardNew.propTypes = {
  cardId: PropTypes.string.isRequired,
};

export default CourseCardNew;