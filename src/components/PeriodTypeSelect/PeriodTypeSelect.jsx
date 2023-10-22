import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ButtonM, ButtonD, PeriodTypeSelectStyles } from './PeriodTypeSelect.styled';
import { selectParameter } from '../../redux/tasks/tasksSelectors';
import { useSelector } from 'react-redux';
/* import StyledDatepicker from '../PeriodPaginator/PeriodPaginator';
import StyledMonthpicker from '../PeriodPaginator/PeriodPaginator'; */

const PeriodTypeMonth = () => {
    const navigate = useNavigate();
    const month = useSelector(selectParameter);

    useEffect(() => {
        navigate(`/calendar/month/${month}`);
    }, [navigate]);
    /* StyledMonthpicker(); */
}

const PeriodTypeDay = () => {
    const navigate = useNavigate();
    const day = useSelector(selectParameter);

    useEffect(() => {
        navigate(`/calendar/day/${day}`);
    }, [navigate]);
    /* StyledDatepicker(); */
}

const PeriodTypeSelect = () => {
    return (
        <PeriodTypeSelectStyles>
                <ButtonM type="button" onClick={PeriodTypeMonth()}>Month</ButtonM>
                <ButtonD type="button" onClick={PeriodTypeDay()}>Day</ButtonD>
        </PeriodTypeSelectStyles>
    )
}

export default PeriodTypeSelect;