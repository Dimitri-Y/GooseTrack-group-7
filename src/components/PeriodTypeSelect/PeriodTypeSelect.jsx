import { useEffect } from 'react';
import { useNavigate } from 'react-router';

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
        <div>
        <button type="button" onClick={PeriodTypeMonth()}>Month</button>
        <button type="button" onClick={PeriodTypeDay()}>Day</button>
        </div>
    )
}

export default PeriodTypeSelect;