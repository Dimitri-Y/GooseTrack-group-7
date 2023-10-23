import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/authSelectors.js';

const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);

    const shouldRedirect = !isLoggedIn && !isRefreshing;
    return shouldRedirect ? <Navigate to={redirectTo}/>  : Component ;
};

PrivateRoute.propTypes = {
    component: PropTypes.any,
    redirectTo: PropTypes.string,
};
export default PrivateRoute;

