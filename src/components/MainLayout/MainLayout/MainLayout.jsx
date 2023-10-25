import { useState, useRef, useEffect } from "react";
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
  const [hideOrShow, setHideOrShow] = useState({});
  const mainLayoutRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
     if(isSidebarOpen) {
       setHideOrShow(() => {
         return {}
       })
     } else {
       setHideOrShow(() => {
         return {display: "flex"}
       })
     }
  }

  useEffect(() => {
    if(isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  },  [isSidebarOpen])

  return (
    <MainLayoutStyled
      ref={mainLayoutRef}
      tabIndex="0">
      <SideBar
        toggleSidebar={toggleSidebar}
        isOpen={isSidebarOpen}
        mainLayoutRef={mainLayoutRef}
        style={hideOrShow}/>
      <MainContainer>
        <Header
          toggleSidebar={toggleSidebar}
          isOpen={isSidebarOpen}/>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </MainLayoutStyled>
  );
};

export default MainLayout;
