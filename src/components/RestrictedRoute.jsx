// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
const RestrictedRoute = ({ component: Component, redirectTo = '/calendar' }) => {
    const isLoggedIn = false;//useSelector(selectIsLoggedIn);
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;