import { CalendarGlobalStyles, CustomDatePickerInput  } from './Calendar.styled';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import { useState} from 'react';
import { AiOutlineDown } from "react-icons/ai";


const StyledInput = ({onChange}) => {
   const [selectedDate, setSelectedDate] = useState(Date.now());

   const handleChange = async value => {
      await setSelectedDate(value)
      onChange(value)
   }
    return (
      <>
      <DatePicker
        showIcon
        selected={selectedDate}
        onChange={(date) => handleChange(date)}
        icon={<AiOutlineDown className="customDatePickerIcon"/>}
        calendarIconClassName='calendarIcon'
        dateFormat={"yyyy/MM/dd"}
      calendarStartDay={1}
      customInput={<CustomDatePickerInput />}
      />
      <CalendarGlobalStyles/>
      </>
    );
}

const Calendar = ({onChange}) => {
   return (
       <StyledInput onChange={onChange}/>
   )
}

export default Calendar;