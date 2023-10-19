import { useDispatch, useSelector } from 'react-redux';
import {ThemeTogglerBtn, ThemeIcon} from './ThemeToggler.styled.jsx';
import icon from '../../Icons/symbol-defs.svg';
import { toggleTheme, selectTheme } from '../../../redux/theme/themeSlice.js'
const ThemeToggler = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
    return (
        <ThemeTogglerBtn onClick={handleToggleTheme}>
            <ThemeIcon width="32" height="32">
                {/*<use href={icon + "#icon-moon"}></use>*/}
                <use href={icon + (theme === 'light' ? '#icon-moon' : '#icon-sun')}></use>
            </ThemeIcon>
            {/*<svg></svg>*/}
        </ThemeTogglerBtn>
    )
}

export default ThemeToggler;