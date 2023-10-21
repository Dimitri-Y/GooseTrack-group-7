import { forwardRef, useState } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import { CalendarGlobalStyles, TitleWrapper } from "./DatepickerStatistics.styled";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const DatepickerStatistics = ({setDate}) => {
  const [selectedDate, setSelectedDate] = useState(Date.now());

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(selectedDate, "dd-MM-yyyy")}
      </TitleWrapper>
    );
  });

    const handlePrevDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 1);
    setSelectedDate(newDate);
    setDate(newDate); 
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    setSelectedDate(newDate);
    setDate(newDate); 
  };

    return (
      <>
        
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            setDate(selectedDate)
            setSelectedDate(date);
          }}
          customInput={<CustomInput />}
          dateFormat={"dd MM yyyy"}
          calendarStartDay={1}
          formatWeekDay={(day) => day.substr(0, 1)}
        />
        
        <div>
          <button onClick={handlePrevDay}>prev</button>
          <button onClick={handleNextDay}>next</button>
        </div>
        <CalendarGlobalStyles />
      </>
    );
  };

export default DatepickerStatistics;