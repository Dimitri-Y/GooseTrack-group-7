import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeTogglerBtn, ThemeIcon } from './ThemeToggler.styled.jsx';
import icon from '../../Icons/symbol-defs.svg';
import { toggleTheme, selectTheme } from '../../../redux/theme/themeSlice.js';
const ThemeToggler = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      dispatch(toggleTheme(savedTheme));
    }
  }, [dispatch]);

  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    dispatch(toggleTheme(newTheme));
  };
  return (
    <ThemeTogglerBtn onClick={handleToggleTheme}>
      <ThemeIcon width="32" height="32">
        <use
          href={icon + (theme === 'light' ? '#icon-moon' : '#icon-sun')}
        ></use>
      </ThemeIcon>
    </ThemeTogglerBtn>
  );
};

export default ThemeToggler;
