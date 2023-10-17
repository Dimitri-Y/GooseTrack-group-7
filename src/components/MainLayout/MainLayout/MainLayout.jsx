import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import  Header  from '../Header/Header.jsx';
import SideBar from '../SideBar/SideBar.jsx';
import {MainLayoutStyled} from './MainLayout.styled.jsx';

const MainLayout = () => {
  return (
    <MainLayoutStyled>
      <SideBar/>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </MainLayoutStyled>
  );
};

export default MainLayout;
