import { lazy } from 'react';
// import {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import Loader from '../src/components/Loader';
import PrivateRoute from './components/PrivateRoute.jsx';
import RestrictedRoute from './components/RestrictedRoute.jsx';
import MainLayout from './components/MainLayout/MainLayout/MainLayout.jsx';
// import {refreshUser} from './redux/auth/authOperations.js';
// import { selectIsLoggedIn, selectIsRefreshing, selectToken } from './redux/auth/authSelectors.js';

import LoginPage from './pages/LoginPage/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
const AccountPage = lazy(() => import('./pages/AccountPage/AccountPage'));
const CalendarPage = lazy(() => import('./pages/CalendarPage/CalendarPage'));
import ChoosedDay from './components/ChoosedDay/ChoosedDay';
// import ChoosedMonth from './components/ChoosedMonth/ChoosedMonth';
const StatisticsPage = lazy(() =>
  import('./pages/StatisticsPage/StatisticsPage'),
);

const App = () => {
  // const dispatch = useDispatch();
  // const token = useSelector(selectToken);
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = false; //useSelector(selectIsRefreshing);
  // //
  // useEffect(() => {
  //     if (!token || isLoggedIn) return;
  //
  //     dispatch(refreshUser());
  // }, [token, dispatch, isLoggedIn]);

  return isRefreshing ? (<Loader />) : (
  // return (
    <Routes>
      <Route path="/" index element={<RestrictedRoute redirectTo="/calendar" component={<MainPage />} />} />
      {/* <Route path="/login" element={<RestrictedRoute redirectTo="/calendar" component={<LoginPage />} />} /> */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/" element={<PrivateRoute redirectTo="/login" component={<MainLayout />} />} >
        <Route path="account" element={<AccountPage />} />
        <Route path="calendar" element={<CalendarPage />} >
          {/*<Route path="month/:currentDate" element={<ChoosedMonth />} />*/}
          <Route path="day/:currentDay" element={<ChoosedDay />} />
        </Route>
        <Route path="/statistics" element={<StatisticsPage />} >
            <Route path=":currentDate" element={<StatisticsPage />} />
        </Route>
       </Route>
      <Route path="/statistics" element={<StatisticsPage />}></Route>

        <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default App;
// <AppWrapper>
// </AppWrapper>
