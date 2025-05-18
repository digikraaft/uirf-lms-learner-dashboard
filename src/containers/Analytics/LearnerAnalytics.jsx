import React, { useState } from 'react';
import { getConfig } from '@edx/frontend-platform';
import urls from 'data/services/lms/urls';
import { reduxHooks } from 'hooks';
import { useLearnerDashboardHeaderMenu, findCoursesNavClicked } from './hooks';
import { Link } from 'react-router-dom';

const LearnerAnalytics = () => {
  const [showBookmark, setShowBookmark] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  const { courseSearchUrl } = reduxHooks.usePlatformSettingsData();
    const exploreCoursesClick = () => {
      findCoursesNavClicked(urls.baseAppUrl(courseSearchUrl));
    };

  return (
    <div className="">
      {/* Discover New Course Link */}
      <div className="font-inter w-max">
        <Link
          to={urls.baseAppUrl(courseSearchUrl)}
          className="bg-cFF0 text-white hidden md:block font-medium py-2.5 px-4 whitespace-nowrap rounded no-underline  hover:bg-opacity-95 "
        >
          Discover New Course
        </Link>
      </div>

      {/* learning info */}
      <div className="w-full mt-7">
        <div className="">
          <div className="">
            {/* The Course Highlight Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="bg-cFF0 rounded-lg h-28 xl:h-[180px] p-4 xl:p-8">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex items-center space-x-6">
                    <svg
                      className="size-[40px] xl:size-[60px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5zM12.25 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-.75 1.75v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0"
                      />
                    </svg>
                    <span className="font-bold text-2xl xl:text-5xl">2</span>
                  </div>
                  <h2 className="text-lg xl:text-xl font-semibold text-white">
                    Course in Progress
                  </h2>
                </div>
              </div>

              <div className="bg-black rounded-lg h-28 xl:h-[180px] p-4 xl:p-8">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex items-center space-x-6">
                    <svg
                      className="size-[40px] xl:size-[60px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 .5c1.19 0 2.24.594 2.872 1.5H21.5v20h-19V2h6.628A3.5 3.5 0 0 1 12 .5m-1.414 16.157l7.071-7.071l-1.414-1.414l-5.657 5.656L7.758 11l-1.414 1.414z"
                      />
                    </svg>
                    <span className="font-bold text-2xl xl:text-5xl">2</span>
                  </div>
                  <h2 className="text-lg xl:text-xl font-semibold text-white">
                    Course Completed
                  </h2>
                </div>
              </div>

              <div className="bg-cFF0 rounded-lg h-28 xl:h-[180px] p-4 xl:p-8">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex items-center space-x-6">
                    <svg
                      className="size-[40px] xl:size-[60px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M16.24 13.65c-1.17-.52-2.61-.9-4.24-.9s-3.07.39-4.24.9A2.99 2.99 0 0 0 6 16.39V18h12v-1.61c0-1.18-.68-2.26-1.76-2.74m-15.02.93A2.01 2.01 0 0 0 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29c-.37-.06-.74-.1-1.13-.1c-.99 0-1.93.21-2.78.58m21.56 0A6.95 6.95 0 0 0 20 14c-.39 0-.76.04-1.13.1c.4.68.63 1.46.63 2.29V18H24v-1.57c0-.81-.48-1.53-1.22-1.85M12 12c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3M1.497 11L4 8.497L6.503 11L4 13.503zM20 9l-2.5 4h5z"
                      />
                    </svg>
                    <span className="font-bold text-2xl xl:text-5xl">7</span>
                  </div>
                  <h2 className="text-lg xl:text-xl font-semibold text-white">
                    Discussion
                  </h2>
                </div>
              </div>
            </div>
            {/* Bookmarks and Certificate */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
              <div className="bg-white shadow drop-shadow rounded-lg divide-y transition-all duration-500 ease-in divide-gray-300 h-max">
                <div className="w-full flex justify-between px-4 pt-4 pb-2 xl:px-8 xl:pt-8 xl:pb-4">
                  <div className="flex items-center space-x-3">
                    <img src="../asset/bookmarkb.svg" alt="bookmark icon" />
                    <span className="font-medium text-base xl:text-lg text-black">
                      Bookmarks
                    </span>
                  </div>
                  <div>
                    <button
                      onClick={() => setShowBookmark(!showBookmark)}
                      className="bg-cFF0 rounded text-white py-1.5 px-3 text-xs"
                    >
                      View list
                    </button>
                  </div>
                </div>
                <div className="px-4 pt-2 pb-2 xl:px-8 xl:pt-4 xl:pb-4">
                  <div className="flex items-center space-x-3">
                    <img src="../asset/bookmarks.svg" alt="bookmark icon" />
                    <a href="" className="underline underline-offset-1">
                      Welcome to the Open edX Platform
                    </a>
                  </div>
                  {showBookmark && (
                    <div className="w-full mt-3 space-y-3">
                      <div className="flex items-center space-x-3">
                        <img src="../asset/bookmarks.svg" alt="bookmark icon" />
                        <a href="" className="underline underline-offset-1">
                          Welcome to the Open edX Platform
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <img src="../asset/bookmarks.svg" alt="bookmark icon" />
                        <a href="" className="underline underline-offset-1">
                          Welcome to the Open edX Platform
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-white shadow drop-shadow rounded-lg divide-y divide-gray-300 h-max">
                <div className="w-full flex justify-between px-4 pt-4 pb-2 xl:px-8 xl:pt-8 xl:pb-4">
                  <div className="flex items-center space-x-3">
                    <img src="../asset/certificateb.svg" alt="bookmark icon" />
                    <span className="font-medium text-base xl:text-lg text-black">
                      Certificates
                    </span>
                  </div>
                  <div>
                    <button
                      onClick={() => setShowCertificate(!showCertificate)}
                      className="bg-cFF0 rounded text-white py-1.5 px-3 text-xs"
                    >
                      View list
                    </button>
                  </div>
                </div>
                <div className="px-4 pt-2 pb-2 xl:px-8 xl:pt-4 xl:pb-4">
                  <div className="flex items-center space-x-3">
                    <img src="../asset/certificate.svg" alt="bookmark icon" />
                    <a href="" className="underline underline-offset-1">
                      OpenedX Demo Certificate
                    </a>
                  </div>
                  {showCertificate && (
                    <div className="w-full mt-3 space-y-3">
                      <div className="flex items-center space-x-3">
                        <img src="../asset/certificate.svg" alt="bookmark icon" />
                        <a href="" className="underline underline-offset-1">
                          OpenedX Demo Certificate
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <img src="../asset/certificate.svg" alt="bookmark icon" />
                        <a href="" className="underline underline-offset-1">
                          OpenedX Demo Certificate
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnerAnalytics;