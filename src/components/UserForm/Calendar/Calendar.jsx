import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import { useState} from 'react';
import { AiOutlineDown } from "react-icons/ai";
import { CalendarGlobalStyles, CustomDatePickerInput  } from './Calendar.styled';


const Calendar = ({onChange}) => {
   const [selectedDate, setSelectedDate] = useState(Date.now());

   const handleChange = async value => {
      await setSelectedDate(value)
      onChange(value)
   }
    return (
      <>
      <CalendarGlobalStyles/>
      <DatePicker
        showIcon
        selected={selectedDate}
        onChange={(date) => handleChange(date)}
        icon={<AiOutlineDown className="customDatePickerIcon"/>}
        calendarIconClassName='calendarIcon'
        dateFormat={"yyyy/MM/dd"}
      calendarStartDay={1}
      customInput={<CustomDatePickerInput />}
      maxDate={new Date()}
      />
      </>
    );
}

export default Calendar;