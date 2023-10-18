import {useState, useCallback } from "react";
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import  Header  from '../Header/Header.jsx';
import SideBar from '../SideBar/SideBar.jsx';
import Loader from "../../Loader/index.js";
import {MainLayoutStyled,
  MainContainer,
} from './MainLayout.styled.jsx';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback( open => {
    setIsSidebarOpen(open)
  },[] );
  return (
    <MainLayoutStyled>
      <SideBar
        toggleSidebar={toggleSidebar}
        isOpen={isSidebarOpen}/>
      <MainContainer>
        <Header toggleSidebar={toggleSidebar}/>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </MainLayoutStyled>
  );
};

export default MainLayout;
