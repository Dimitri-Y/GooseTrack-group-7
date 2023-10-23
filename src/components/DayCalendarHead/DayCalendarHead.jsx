import { useSelector } from 'react-redux';
import { selectDate } from '../../redux/tasks/tasksSelectors';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DayWeek, List, ListItem, Number } from './DayCalendarHead.styled';
// import getCurrentWeek from '../../utils/getCurrentWeek';
import { useDispatch } from 'react-redux';
import { changeDate } from '../../redux/tasks/dateSlice';
import { changeParameterUrl } from '../../redux/tasks/parameterUrlSlice';
// import getDaysInMonth from '../../utils/getDaysInMonth';
import { useAdaptivePicture } from '../../hooks/useAdaptivePicture';

import { endOfWeek, eachDayOfInterval, startOfWeek } from 'date-fns';

const DayCalendarHead = ({ selectedDate = Date.now(), weekStartDay = 1 }) => {
  const mediaResponse = useAdaptivePicture();
  const isMobile = mediaResponse.isMobile;

  const dispatch = useDispatch();
  const date = useSelector(selectDate);
  // const { currentDay } = useParams();

  const formattedDate = date.split('-').slice(2).join('');
  const [selectedDay, setSelectedDay] = useState(formattedDate);
  const [currentWeek, setCurrentWeek] = useState([]);

  const weekStart = startOfWeek(selectedDate, { weekStartsOn: weekStartDay });
  const weekEnd = endOfWeek(selectedDate, { weekStartsOn: weekStartDay });
  const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd });

  const getFormattedDate = (event) => {
    const number = event.nativeEvent.target.lastElementChild.innerHTML;
    setSelectedDay(number);
    const array = date.split('-').splice(0, 2);
    array.push(number);
    const newDate = array.join('-');
    dispatch(changeDate(newDate));
  };

  const updateParameterUrl = (day) => {
    if (day.getUTCDay() === 0) {
      dispatch(changeParameterUrl('monday'));
    }
    if (day.getUTCDay() === 1) {
      dispatch(changeParameterUrl('tuesday'));
    }
    if (day.getUTCDay() === 2) {
      dispatch(changeParameterUrl('wednesday'));
    }
    if (day.getUTCDay() === 3) {
      dispatch(changeParameterUrl('thursday'));
    }
    if (day.getUTCDay() === 4) {
      dispatch(changeParameterUrl('friday'));
    }
    if (day.getUTCDay() === 5) {
      dispatch(changeParameterUrl('saturday'));
    }
    if (day.getUTCDay() === 6) {
      dispatch(changeParameterUrl('sunday'));
    }
  };

  return (
    <List>
      {weekDays.map((day) => {
        return (
          <ListItem
            key={day.toISOString()}
            onClick={(event) => {
              getFormattedDate(event);
              updateParameterUrl(day);
            }}
          >
            <DayWeek onClick={(event) => event.stopPropagation()}>
              {isMobile
                ? day
                    .toLocaleDateString('en-UA', { weekday: 'short' })
                    .slice(0, 1)
                : day
                    .toLocaleDateString('en-UA', { weekday: 'short' })
                    .toUpperCase()}
            </DayWeek>
            <Number
              $selected={selectedDay === day.getDate()}
              onClick={(event) => event.stopPropagation()}
            >
              {day.getDate()}
            </Number>
          </ListItem>
        );
      })}
    </List>
  );
};

// const DayCalendarHead = () => {
//   const mediaResponse = useAdaptivePicture();
//   const isMobile = mediaResponse.isMobile;

//   const dispatch = useDispatch();
//   const date = useSelector(selectDate);
//   const { currentDay } = useParams();
//   const formattedDate = date.split('-').slice(2).join('');
//   const [selectedDay, setSelectedDay] = useState(formattedDate);
//   const [currentWeek, setCurrentWeek] = useState([]);

//   // const daysInMonth = useMemo(() => getDaysInMonth(date), [date]);

//   // console.log(currentWeek);

//   const getFormattedDate = (event) => {
//     const number = event.nativeEvent.target.lastElementChild.innerHTML;
//     setSelectedDay(number);
//     const array = date.split('-').splice(0, 2);
//     array.push(number);
//     const newDate = array.join('-');
//     dispatch(changeDate(newDate));
//   };

//   useEffect(
//     () => setCurrentWeek(getCurrentWeek(currentDay, formattedDate)),
//     [currentDay, formattedDate],
//   );

//   return (
//     <List>
//       <ListItem
//         onClick={(event) => {
//           getFormattedDate(event);
//           dispatch(changeParameterUrl('monday'));
//         }}
//       >
//         <DayWeek onClick={(event) => event.stopPropagation()}>
//           {isMobile ? 'M' : 'MON'}
//         </DayWeek>
//         <Number
//           $selected={selectedDay === currentWeek[0]}
//           onClick={(event) => event.stopPropagation()}
//         >
//           {currentWeek[0].getDate().slice(8,10)}
//         </Number>
//       </ListItem>
//       <ListItem
//         onClick={(event) => {
//           getFormattedDate(event);
//           dispatch(changeParameterUrl('tuesday'));
//         }}
//       >
//         <DayWeek onClick={(event) => event.stopPropagation()}>
//           {isMobile ? 'T' : 'TUE'}
//         </DayWeek>
//         <Number
//           $selected={selectedDay === currentWeek[1]}
//           onClick={(event) => event.stopPropagation()}
//         >
//           {currentWeek[1]}
//         </Number>
//       </ListItem>
//       <ListItem
//         onClick={(event) => {
//           getFormattedDate(event);
//           dispatch(changeParameterUrl('wednesday'));
//         }}
//       >
//         <DayWeek onClick={(event) => event.stopPropagation()}>
//           {isMobile ? 'W' : 'WED'}
//         </DayWeek>
//         <Number
//           $selected={selectedDay === currentWeek[2]}
//           onClick={(event) => event.stopPropagation()}
//         >
//           {currentWeek[2]}
//         </Number>
//       </ListItem>
//       <ListItem
//         onClick={(event) => {
//           getFormattedDate(event);
//           dispatch(changeParameterUrl('thursday'));
//         }}
//       >
//         <DayWeek onClick={(event) => event.stopPropagation()}>
//           {isMobile ? 'T' : 'THU'}
//         </DayWeek>
//         <Number
//           $selected={selectedDay === currentWeek[3]}
//           onClick={(event) => event.stopPropagation()}
//         >
//           {currentWeek[3]}
//         </Number>
//       </ListItem>
//       <ListItem
//         onClick={(event) => {
//           getFormattedDate(event);
//           dispatch(changeParameterUrl('friday'));
//         }}
//       >
//         <DayWeek onClick={(event) => event.stopPropagation()}>
//           {isMobile ? 'F' : 'FRI'}
//         </DayWeek>
//         <Number
//           $selected={selectedDay === currentWeek[4]}
//           onClick={(event) => event.stopPropagation()}
//         >
//           {currentWeek[4]}
//         </Number>
//       </ListItem>
//       <ListItem
//         onClick={(event) => {
//           getFormattedDate(event);
//           dispatch(changeParameterUrl('saturday'));
//         }}
//       >
//         <DayWeek onClick={(event) => event.stopPropagation()}>
//           {isMobile ? 'S' : 'SAT'}
//         </DayWeek>
//         <Number
//           $selected={selectedDay === currentWeek[5]}
//           onClick={(event) => event.stopPropagation()}
//         >
//           {currentWeek[5]}
//         </Number>
//       </ListItem>
//       <ListItem
//         onClick={(event) => {
//           getFormattedDate(event);
//           dispatch(changeParameterUrl('sunday'));
//         }}
//       >
//         <DayWeek onClick={(event) => event.stopPropagation()}>
//           {isMobile ? 'S' : 'SUN'}
//         </DayWeek>
//         <Number
//           $selected={selectedDay === currentWeek[6]}
//           onClick={(event) => event.stopPropagation()}
//         >
//           {currentWeek[6]}
//         </Number>
//       </ListItem>
//     </List>
//   );
// };
export default DayCalendarHead;
