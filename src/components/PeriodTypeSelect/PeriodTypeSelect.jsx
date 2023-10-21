import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ButtonM, ButtonD, PeriodTypeSelectStyles } from './PeriodTypeSelect.styled';

const PeriodTypeMonth = () => {
    const navigate = useNavigate();
    const month = 'january';

    useEffect(() => {
        navigate(`/calendar/month/${month}`);
    }, [navigate]);
}

const PeriodTypeDay = () => {
    const navigate = useNavigate();
    const day = 'monday';

    useEffect(() => {
        navigate(`/calendar/day/${day}`);
    }, [navigate]);
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