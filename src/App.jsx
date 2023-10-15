import { Route, Routes } from 'react-router-dom';
// import MainLayout from './components/MainLayout/MainLayout/MainLayout.jsx';
// import ErrorPage from './pages/ErrorPage/ErrorPage';
import MainPage from './pages/MainPage/MainPage';
import AccountPage from './pages/AccountPage/AccountPage';
import CalendarPage from './pages/CalendarPage/CalendarPage';
import ChoosedDay from './components/ChoosedDay/ChoosedDay';
import StatisticsPage from './pages/StatisticsPage/StatisticsPage'

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/calendar" element={<CalendarPage />}>
        {/* <Route path="month/:currentDate" element={<ChoosedMonth />} /> */}
        <Route path="day/:currentDay" element={<ChoosedDay />} />
      </Route>
      <Route path="/statistics" element={<StatisticsPage />}></Route>
      {/* <Route path="/" element={<MainLayout />}> */}
      {/* <Route path="*" element={<ErrorPage />} /> */}
      {/* </Route> */}
    </Routes>
  );
}
export default App;
// <AppWrapper>
// </AppWrapper>
