// import { useSelector } from 'react-redux';
// import { selectDate } from '../../redux/tasks/tasksSelectors';
import { List, ListItem } from './DayCalendarHead.styled';


const DayCalendarHead = () => {
  // const date = useSelector(selectDate);

  return (
    <List>
      <ListItem>
        <span>Mon</span>
        <span>6</span>
      </ListItem>
      <ListItem>
        <span>Tue</span>
        <span>7</span>
      </ListItem>
      <ListItem>
        <span>Wed</span>
        <span>8</span>
      </ListItem>
      <ListItem>
        <span>Thu</span>
        <span>9</span>
      </ListItem>
      <ListItem>
        <span>Fri</span>
        <span>10</span>
      </ListItem>
      <ListItem>
        <span>Sat</span>
        <span>11</span>
      </ListItem>
      <ListItem>
        <span>Sun</span>
        <span>12</span>
      </ListItem>
    </List>
  );
};
export default DayCalendarHead;
