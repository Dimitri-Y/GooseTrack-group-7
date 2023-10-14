import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout/MainLayout.jsx';
import FirstPage from './pages/FirstPage/FirstPage';
import SecondPage from './pages/SecondPage/SecondPage';
import HalfPage from './pages/HalfPage/HalfPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import MainPage from './pages/MainPage/MainPage';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <AppWrapper>
      <Routes>
        {/* <Route path="/" element={<MainPage />} /> */}
        <Route path="/user" element={<UserProfilePage />} />
        <Route path="/" element={<MainLayout />}>
          {/* <Route path="/first" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage />}>
            <Route path=":half" element={<HalfPage />} />
          </Route> */}

          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
