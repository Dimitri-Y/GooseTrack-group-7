import {MainTitleStyled} from './MainTitle.styled.jsx';
import PropTypes from 'prop-types';

const MainTitle = ({ title }) => {
    return (
        <MainTitleStyled>{ title }</MainTitleStyled>
    );
};

MainTitle.prototype = {
    title: PropTypes.string.isRequired,
}

export default MainTitle;