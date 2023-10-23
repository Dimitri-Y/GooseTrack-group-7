import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/authSelectors.js';
import { Navigate } from 'react-router-dom';
const RestrictedRoute = ({ component: Component, redirectTo = '/calendar' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.propTypes = {
    component: PropTypes.any,
    redirectTo: PropTypes.string,
};

export default RestrictedRoute;