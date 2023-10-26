import { lazy, Suspense, useEffect  } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../src/components/Loader';
import PrivateRoute from './components/PrivateRoute.jsx';
import RestrictedRoute from './components/RestrictedRoute.jsx';
import MainLayout from './components/MainLayout/MainLayout/MainLayout.jsx';
import {refreshUser} from './redux/auth/authOperations.js';
import { selectIsLoggedIn,  selectToken } from './redux/auth/authSelectors.js';
import SendEmailPage from './pages/SendEmailPage/SendEmailPage.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ResendEmailPage from './pages/ResendEmailPage/ResendEmailPage';
const AccountPage = lazy(() => import('./pages/AccountPage/AccountPage'));
const CalendarPage = lazy(() => import('./pages/CalendarPage/CalendarPage'));
import ChoosedDay from './components/ChoosedDay/ChoosedDay';
import ChoosedMonth from './components/ChoosedMonth/ChoosedMonth';
const StatisticsPage = lazy(() =>
  import('./pages/StatisticsPage/StatisticsPage'),
);

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    if (!token || isLoggedIn) return;

    dispatch(refreshUser());
  // })
  }, [token, dispatch, isLoggedIn])

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" index element={<RestrictedRoute redirectTo="/calendar" component={<MainPage />} />} />
        <Route path="/register" element={<RestrictedRoute redirectTo="/calendar" component={<RegisterPage />} />} />
        <Route path="/login" element={<RestrictedRoute redirectTo="/calendar" component={<LoginPage />} />} />
        <Route path="/sendemail" element={<RestrictedRoute redirectTo="/calendar" component={<SendEmailPage />} />} />
        <Route path="/sendemail/:verificationToken" element={<RestrictedRoute redirectTo="/calendar" component={<SendEmailPage />} />} />
        <Route path="/resendemail" element={<ResendEmailPage />} />

      <Route path="/" element={<PrivateRoute redirectTo="/login" component={<MainLayout />} />} >
        <Route path="account" element={<AccountPage />} />
        <Route path="calendar" element={<CalendarPage />} >
          <Route path="month/:currentDate" element={<ChoosedMonth />} />
          <Route path="day/:currentDay" element={<ChoosedDay />} />
        </Route>
        <Route path="/statistics" element={<StatisticsPage />} >
            <Route path=":currentDate" element={<StatisticsPage />} />
        </Route>
       </Route>

          <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
export default App;
// <AppWrapper>
// </AppWrapper>
