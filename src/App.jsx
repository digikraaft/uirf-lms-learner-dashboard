import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { useIntl } from '@edx/frontend-platform/i18n';
import { logError } from '@edx/frontend-platform/logging';
import { initializeHotjar } from '@edx/frontend-enterprise-hotjar';

import { ErrorPage, AppContext } from '@edx/frontend-platform/react';
// import { FooterSlot } from '@edx/frontend-component-footer';
import { Alert } from '@openedx/paragon';

import { RequestKeys } from 'data/constants/requests';
import store from 'data/store';
import {
  selectors,
  actions,
} from 'data/redux';
import { reduxHooks } from 'hooks';
import Dashboard from 'containers/Dashboard';

import track from 'tracking';

import fakeData from 'data/services/lms/fakeData/courses';

import AppWrapper from 'containers/WidgetContainers/AppWrapper';
// import LearnerDashboardHeader from 'containers/LearnerDashboardHeader';

import { getConfig } from '@edx/frontend-platform';
import messages from './messages';
import './App.scss';
import Sidebar from './containers/Sidebar/Sidebar';
import Header from './containers/Header/Header';

export const App = () => {
  const { authenticatedUser } = React.useContext(AppContext);
  const { formatMessage } = useIntl();
  const isFailed = {
    initialize: reduxHooks.useRequestIsFailed(RequestKeys.initialize),
    refreshList: reduxHooks.useRequestIsFailed(RequestKeys.refreshList),
  };
  const hasNetworkFailure = isFailed.initialize || isFailed.refreshList;
  const { supportEmail } = reduxHooks.usePlatformSettingsData();
  const loadData = reduxHooks.useLoadData();

  React.useEffect(() => {
    if (authenticatedUser?.administrator || getConfig().NODE_ENV === 'development') {
      window.loadEmptyData = () => {
        loadData({ ...fakeData.globalData, courses: [] });
      };
      window.loadMockData = () => {
        loadData({
          ...fakeData.globalData,
          courses: [
            ...fakeData.courseRunData,
            ...fakeData.entitlementData,
          ],
        });
      };
      window.store = store;
      window.selectors = selectors;
      window.actions = actions;
      window.track = track;
    }
    if (getConfig().HOTJAR_APP_ID) {
      try {
        initializeHotjar({
          hotjarId: getConfig().HOTJAR_APP_ID,
          hotjarVersion: getConfig().HOTJAR_VERSION,
          hotjarDebug: !!getConfig().HOTJAR_DEBUG,
        });
      } catch (error) {
        logError(error);
      }
    }
  }, [authenticatedUser, loadData]);

  const [isInstructor, setIsInstructor] = useState(false);
  const [isAdmin] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('dashboard');

  return (
    <>
      <Helmet>
        <title>{formatMessage(messages.pageTitle)}</title>
        <link rel="shortcut icon" href={getConfig().FAVICON_URL} type="image/x-icon" />
      </Helmet>
      <main className="bg-white w-full h-auto min-h-screen relative">
        <AppWrapper>
          {/* <LearnerDashboardHeader /> */}
          <Sidebar 
            isInstructor={isInstructor} 
            isAdmin={isAdmin} 
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            menuOpen={menuOpen}
            setIsInstructor={setIsInstructor}
          />
          <main id="main" className="w-full xl:w-auto xl:min-w-[calc(100%-256px)] xl:ml-[256px] h-auto xl:min-h-screen">
            {hasNetworkFailure
              ? (
                <Alert variant="danger">
                  <ErrorPage message={formatMessage(messages.errorMessage, { supportEmail })} />
                </Alert>
              ) : (
                <>
                  <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                  <Dashboard />
                </>
              )}
          </main>
        </AppWrapper>
        {/* <FooterSlot /> */}
      </main>
    </>
  );
};

export default App;
