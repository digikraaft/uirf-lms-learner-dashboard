import React, { useState } from 'react';
import { AppContext } from '@edx/frontend-platform/react';

export default function Content({ isInstructor, menuOpen, setMenuOpen }) {
  const [showBookmark, setShowBookmark] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [tooltip, setTooltip] = useState(false);
  const progress = 70;
  const { authenticatedUser } = React.useContext(AppContext);

  return (
    <div className="w-full">
      <div className="bg-white pt-32 pb-10 px-4 xl:px-[6%]">
        {!isInstructor ? (
          <div> 
            <div>
              <div className="flex items-center space-x-4 font-inter">
                <a
                  href="discover.html"
                  className="bg-cFF0 text-white font-medium py-2 px-6 rounded"
                >Discover New Course</a>
              </div>

              <div className="w-full mt-7 xl:mt-10 2xl:w-[90%]">
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
                      <h2 className="text-lg xl:text-xl font-semibold">
                        Course in Progress
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white shadow drop-shadow rounded-lg divide-y transition-all duration-500 ease-in divide-gray-300 h-max">
                    <div className="w-full flex justify-between px-4 pt-4 pb-2 xl:px-8 xl:pt-8 xl:pb-4">
                      <div className="flex items-center space-x-3">
                        <img src="../asset/bookmarkb.svg" alt="bookmark icon" />
                        <span className="font-medium text-base xl:text-lg text-black">Bookmarks</span>
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
                        <a href="" className="underline underline-offset-1">Welcome to the Open edX Platform</a>
                      </div>
                      {showBookmark && (
                        <div className="w-full mt-3 space-y-3">
                          <div className="flex items-center space-x-3">
                            <img src="../asset/bookmarks.svg" alt="bookmark icon" />
                            <a href="" className="underline underline-offset-1">Welcome to the Open edX Platform</a>
                          </div>
                          <div className="flex items-center space-x-3">
                            <img src="../asset/bookmarks.svg" alt="bookmark icon" />
                            <a href="" className="underline underline-offset-1">Welcome to the Open edX Platform</a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-white shadow drop-shadow rounded-lg divide-y divide-gray-300 h-max">
                    <div className="w-full flex justify-between px-4 pt-4 pb-2 xl:px-8 xl:pt-8 xl:pb-4">
                      <div className="flex items-center space-x-3">
                        <img src="../asset/certificateb.svg" alt="bookmark icon" />
                        <span className="font-medium text-base xl:text-lg text-black">Certificates</span>
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
                        <a href="" className="underline underline-offset-1">OpenedX Demo Certificate</a>
                      </div>
                      {showCertificate && (
                        <div className="w-full mt-3 space-y-3">
                          <div className="flex items-center space-x-3">
                            <img src="../asset/certificate.svg" alt="bookmark icon" />
                            <a href="" className="underline underline-offset-1">OpenedX Demo Certificate</a>
                          </div>
                          <div className="flex items-center space-x-3">
                            <img src="../asset/certificate.svg" alt="bookmark icon" />
                            <a href="" className="underline underline-offset-1">OpenedX Demo Certificate</a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7 xl:mt-12 2xl:w-[90%]">
                <div className="mb-3.5">
                  <a
                    href="mycourse.html"
                    className="text-cFF0 text-base xl:text-lg 2xl:text-xl underline font-inter"
                  >View All</a>
                </div>

                <div className="shadow drop-shadow-sm">
                  <div className="bg-white py-6 px-3 xl:px-8 xl:py-5 rounded-t-lg">
                    <div className="w-full flex flex-col lg:flex-row lg:items-center">
                      <div className="w-full lg:w-1/3">
                        <div className="w-full h-[143px] lg:h-[200px] relative">
                          <img
                            src="../asset/course.png"
                            alt="course-image"
                            className="w-full h-full object-cover xl:bg-center"
                          />
                          <div className="absolute px-6 py-2 xl:py-3 xl:px-8 bg-white left-6 -bottom-6 xl:bottom-6 shadow">
                            <div className="size-[46px] lg:size-[65px]">
                              <img
                                src="../asset/logo.png"
                                alt=""
                                className="object-cover bg-center size-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full lg:w-2/3 flex items-center divide-x divide-[#787878] xl:h-[200px]">
                        <div className="w-2/3 lg:w-1/2 h-full flex items-center px-3 lg:px-6">
                          <div>
                            <h3 className="text-sm xl:text-xl font-medium text-black mt-3">
                              OpenedX Demo Course
                            </h3>
                            <div className="mt-3 lg:mt-6 block">
                              <a
                                href="singleCourse.html"
                                className="bg-cFF0 px-3 text-sm py-2 rounded xl:px-6 font-medium xl:text-base text-white"
                              >
                                Continue Learning</a>
                            </div>
                          </div>
                        </div>
                        <div className="w-1/3 lg:w-1/2 mt-8 xl:mt-0">
                          <div className="hidden w-full lg:flex justify-end py-3">
                            <div className="flex flex-col items-center relative">
                              <button
                                onClick={() => setTooltip(!tooltip)}
                                className="border border-cFF0 cursor-pointer rounded-full flex items-center justify-center size-8 p-3"
                              >
                                <img src="../asset/icon.svg" alt="" />
                              </button>
                              {tooltip && (
                                <div className="absolute -bottom-12">
                                  <button className="px-4 py-2 bg-main text-black text-sm rounded cursor-pointer">
                                    Unenroll
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="w-full flex justify-center">
                            <div className="relative size-[80px] lg:size-[150px] xl:size-[180px]">
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
                              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-700">
                                <span className="text-[8px] xl:text-sm">Completed</span>
                                <span className="text-sm xl:text-lg font-bold">{progress}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between lg:mt-4">
                      <h3 className="text-xs xl:text-lg font-medium text-black">
                        University of Ibadan Research Fund
                      </h3>
                      <h3 className="text-xs xl:text-base font-medium text-[#787878] mt-1">
                        Access Expires May 13 2025
                      </h3>
                    </div>
                  </div>
                  <div className="bg-main px-4 md:px-8 lg:px-10 xl:px-16 py-2.5 rounded-b-lg">
                    <div className="flex items-center space-x-2">
                      <img src="../asset/info.svg" alt="" />
                      <span className="text-sm text-[#737373]">
                        Grade required to pass the course: 70%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="xl:min-h-[70vh] hidden">
              <div className="flex justify-center">
                <img src="../asset/empty.svg" alt="illustration on learning" />
              </div>
              <div className="mt-5 xl:mt-6 flex justify-center">
                <div className="text-lg xl:text-xl font-poppins font-medium text-black w-2/3 text-center">
                  You currently do not have any course created.....
                  <a href="discover.html" className="text-cFF0">Click here</a>
                  <br />
                  to create a new Course
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-4 font-inter">
                <a
                  href="discover.html"
                  className="bg-cFF0 text-white font-medium py-2 px-6 rounded"
                >Create New Course</a>
              </div>

              <div className="w-full mt-7 xl:mt-10">
                <div className="w-full 2xl:w-[90%]">
                  <div className="w-full text-white gap-6 grid grid-cols-1 lg:grid-cols-3">
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
                        <h2 className="text-lg xl:text-xl font-semibold">
                          Course Created
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
                              d="M16 17v2H2v-2s0-4 7-4s7 4 7 4m-3.5-9.5A3.5 3.5 0 1 0 9 11a3.5 3.5 0 0 0 3.5-3.5m3.44 5.5A5.32 5.32 0 0 1 18 17v2h4v-2s0-3.63-6.06-4M15 4a3.4 3.4 0 0 0-1.93.59a5 5 0 0 1 0 5.82A3.4 3.4 0 0 0 15 11a3.5 3.5 0 0 0 0-7M1.497 11L4 8.497L6.503 11L4 13.503zM20 9l-2.5 4h5z"
                            />
                          </svg>
                          <span className="font-bold text-2xl xl:text-5xl">2</span>
                        </div>
                        <h2 className="text-lg xl:text-xl font-semibold">
                          Enrollees
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
                        <h2 className="text-lg xl:text-xl font-semibold">
                          Cohorts
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="w-full mt-10">
                    <div className="xl:col-span-2 flex flex-col space-y-6">
                      <div className="bg-cF4 shadow drop-shadow rounded-lg p-4 md:p-6">
                        <form className="text-black font-inter">
                          <label htmlFor="enrollmentStatus" className="text-base font-semibold">
                            View a specific learner's enrolment status
                          </label>
                          <div className="mt-6 flex space-y-3 xl:space-y-0 flex-col md:flex-row md:justify-between md:space-x-6">
                            <input
                              type="text"
                              placeholder="|Enter Username or email"
                              className="py-2.5 px-6 outline-none bg-white border border-cFF0 ring-0 rounded-lg w-full md:w-1/2 xl:w-1/3"
                            />
                            <button className="bg-cFF0 text-white py-2.5 px-6 rounded-lg">
                              Check Status
                            </button>
                          </div>
                          <div className="mt-3">
                            <span className="text-sm font-inter font-medium">
                              Enrolment status for korede01: active
                            </span>
                          </div>
                        </form>
                      </div>

                      <div className="bg-cF4 shadow drop-shadow rounded-lg p-4 md:p-6">
                        <form className="text-black font-inter">
                          <label htmlFor="enrollmentStatus" className="text-base font-semibold">
                            View a specific learner's progress status
                          </label>
                          <div className="mt-6 flex flex-col space-y-3 xl:space-y-0 md:flex-row md:justify-between md:space-x-6">
                            <input
                              type="text"
                              placeholder="|Enter Username or email"
                              className="py-2.5 px-6 outline-none bg-white border border-cFF0 ring-0 rounded-lg w-full md:w-1/2 xl:w-1/3"
                            />
                            <button className="bg-cFF0 text-white py-2.5 px-6 rounded-lg">
                              View Progress Page
                            </button>
                          </div>
                          <div className="mt-3">
                            <span className="text-sm font-inter font-medium">
                              Enrolment status for korede01: active
                            </span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}