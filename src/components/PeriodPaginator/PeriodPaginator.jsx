import { forwardRef, useState} from 'react';
import {format} from 'date-fns';
import DatePicker from 'react-datepicker';
import { CalendarGlobalStyles, TitleWrapper, Container, ButtonL, ButtonR, CalendarMonthStyles } from "./PeriodPaginator.styled";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
/* import { useDispatch } from 'react-redux';
import { changeParameterUrl } from '../../redux/tasks/parameterUrlSlice'; */

export const StyledDatepicker = () => {
    const [selectedDate, setSelectedDate] = useState(Date.now());
    /* const dispatch = useDispatch();
    dispatch(changeParameterUrl(selectedDate)); */
  
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

export const StyledMonthpicker = () => {
  const [selectedMonth, setSelectedDate] = useState(Date.now());
  /* const dispatch = useDispatch();
  dispatch(changeParameterUrl(selectedMonth)); */

    const CustomInput = forwardRef(({ value, onClick }, ref) => {
      return (
        <TitleWrapper onClick={onClick} ref={ref}>
          {format(selectedMonth, "MMM yyyy")}
        </TitleWrapper>
      );
    });
  
    return (
      <>
        <DatePicker
          selected={selectedMonth}
          onChange={(date) => {
            setSelectedDate(date);
          }}
          customInput={<CustomInput />}
          dateFormat={"MM yyyy"}
          showMonthYearPicker
        />
        <CalendarGlobalStyles />
        <CalendarMonthStyles />
      </>
    );
}

const PeriodPaginator = () => {
    return (
        <Container>
          <StyledDatepicker/>
          {/* <StyledMonthpicker/> */}
          <ButtonL type="button">L</ButtonL>
          <ButtonR type="button">R</ButtonR>
        </Container>
    )
}

export default PeriodPaginator;