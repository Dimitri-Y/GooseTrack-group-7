import { forwardRef, useState} from 'react';
import {format} from 'date-fns';
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, TitleWrapper, Container, ButtonL, ButtonR } from "./PeriodPaginator.styled";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const StyledDatepicker = () => {
    const [selectedDate, setSelectedDate] = useState(Date.now());
  
    const CustomInput = forwardRef(({ value, onClick }, ref) => {
      return (
        <TitleWrapper onClick={onClick} ref={ref}>
          {format(selectedDate, "dd MMM yyyy")}
        </TitleWrapper>
      );
    });
  
    return (
      <>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);
          }}
          customInput={<CustomInput />}
          dateFormat={"dd MM yyyy"}
          calendarStartDay={1}
          formatWeekDay={(day) => day.substr(0, 1)}
        />
        <CalendarGlobalStyles />
      </>
    );
  };

const PeriodPaginator = () => {
    return (
        <Container>
          <StyledDatepicker/>
          <ButtonL type="button">L</ButtonL>
          <ButtonR type="button">R</ButtonR>
        </Container>
    )
}

export default PeriodPaginator;