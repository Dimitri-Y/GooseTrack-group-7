import { useSelector } from 'react-redux';
import { selectDate } from '../../redux/tasks/tasksSelectors';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DayWeek, List, ListItem, Number } from './DayCalendarHead.styled';
import getCurrentWeek from '../../utils/getCurrentWeek';
import { useDispatch } from 'react-redux';
import { changeDate } from '../../redux/tasks/dateSlice';
import { changeParameterUrl } from '../../redux/tasks/parameterUrlSlice';

const DayCalendarHead = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  const dispatch = useDispatch();
  const date = useSelector(selectDate);
  const { currentDay } = useParams();
  const formattedDate = date.split('-').splice(2).join('');
  const [selectedDay, setSelectedDay] = useState(formattedDate);
  const [currentWeek, setCurrentWeek] = useState([]);

  useEffect(
    () => setCurrentWeek(getCurrentWeek(currentDay, formattedDate)),
    [currentDay, formattedDate],
  );

  const getFormattedDate = (event) => {
    const number = event.nativeEvent.target.lastElementChild.innerHTML;
    setSelectedDay(number);
    const array = date.split('-').splice(0, 2);
    array.push(number);
    const newDate = array.join('-');
    dispatch(changeDate(newDate));
  };

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener('resize', updateDimension);

    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, [screenSize]);

  return (
    <List>
      <ListItem
        onClick={(event) => {
          getFormattedDate(event);
          dispatch(changeParameterUrl('monday'));
        }}
      >
        <DayWeek onClick={(event) => event.stopPropagation()}>
          {screenSize.width < 375 ? 'M' : 'MON'}
        </DayWeek>
        <Number
          $selected={selectedDay === currentWeek[0]}
          onClick={(event) => event.stopPropagation()}
        >
          {currentWeek[0]}
        </Number>
      </ListItem>
      <ListItem
        onClick={(event) => {
          getFormattedDate(event);
          dispatch(changeParameterUrl('tuesday'));
        }}
      >
        <DayWeek onClick={(event) => event.stopPropagation()}>
          {screenSize.width < 375 ? 'T' : 'TUE'}
        </DayWeek>
        <Number
          $selected={selectedDay === currentWeek[1]}
          onClick={(event) => event.stopPropagation()}
        >
          {currentWeek[1]}
        </Number>
      </ListItem>
      <ListItem
        onClick={(event) => {
          getFormattedDate(event);
          dispatch(changeParameterUrl('wednesday'));
        }}
      >
        <DayWeek onClick={(event) => event.stopPropagation()}>
          {screenSize.width < 375 ? 'W' : 'WED'}
        </DayWeek>
        <Number
          $selected={selectedDay === currentWeek[2]}
          onClick={(event) => event.stopPropagation()}
        >
          {currentWeek[2]}
        </Number>
      </ListItem>
      <ListItem
        onClick={(event) => {
          getFormattedDate(event);
          dispatch(changeParameterUrl('thursday'));
        }}
      >
        <DayWeek onClick={(event) => event.stopPropagation()}>
          {screenSize.width < 375 ? 'T' : 'THU'}
        </DayWeek>
        <Number
          $selected={selectedDay === currentWeek[3]}
          onClick={(event) => event.stopPropagation()}
        >
          {currentWeek[3]}
        </Number>
      </ListItem>
      <ListItem
        onClick={(event) => {
          getFormattedDate(event);
          dispatch(changeParameterUrl('friday'));
        }}
      >
        <DayWeek onClick={(event) => event.stopPropagation()}>
          {screenSize.width < 375 ? 'F' : 'FRI'}
        </DayWeek>
        <Number
          $selected={selectedDay === currentWeek[4]}
          onClick={(event) => event.stopPropagation()}
        >
          {currentWeek[4]}
        </Number>
      </ListItem>
      <ListItem
        onClick={(event) => {
          getFormattedDate(event);
          dispatch(changeParameterUrl('saturday'));
        }}
      >
        <DayWeek onClick={(event) => event.stopPropagation()}>
          {screenSize.width < 375 ? 'S' : 'SAT'}
        </DayWeek>
        <Number
          $selected={selectedDay === currentWeek[5]}
          onClick={(event) => event.stopPropagation()}
        >
          {currentWeek[5]}
        </Number>
      </ListItem>
      <ListItem
        onClick={(event) => {
          getFormattedDate(event);
          dispatch(changeParameterUrl('sunday'));
        }}
      >
        <DayWeek onClick={(event) => event.stopPropagation()}>
          {screenSize.width < 375 ? 'S' : 'SUN'}
        </DayWeek>
        <Number
          $selected={selectedDay === currentWeek[6]}
          onClick={(event) => event.stopPropagation()}
        >
          {currentWeek[6]}
        </Number>
      </ListItem>
    </List>
  );
};
export default DayCalendarHead;
