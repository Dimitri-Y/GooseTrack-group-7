import {LogoutBtnStyled, LogoutIcon} from './LogoutBtn.styled.jsx';
import icon from '../../Icons/symbol-defs.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {logOut}  from '../../../redux/auth/authOperations.js';
const LogoutBtn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = async () => {
        await dispatch(logOut());
        navigate("/");
    };

    return (
        <LogoutBtnStyled onClick={handleLogout}>
           Log out
            <LogoutIcon width={18} height={18}>
                <use href={icon + "#icon-logout"}></use>
            </LogoutIcon>
        </LogoutBtnStyled>
    )
}

export default LogoutBtn;