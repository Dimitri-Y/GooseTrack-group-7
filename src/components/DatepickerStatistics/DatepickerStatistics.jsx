import { forwardRef, useState } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import { CalendarGlobalStyles, TitleWrapper,ContainerBtn, BtnSwitch, SvgIcon, Path } from "./DatepickerStatistics.styled";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const DatepickerStatistics = ({setDate, themeColors}) => {
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
        
    

        <ContainerBtn themeColors={themeColors}>
          <BtnSwitch onClick={handlePrevDay} themeColors={themeColors} style={themeColors === 'dark' ? { borderRight: "solid #FFFFFF26 1px"} : { borderRight: "solid #DCE3E580 1px"}}>
            <SvgIcon  width="18" height="18" viewBox="0 0 18 18" fill="none">
              <Path themeColors={themeColors} d="M11.25 13.5L6.75 9L11.25 4.5" />
            </SvgIcon>
          </BtnSwitch>
          <BtnSwitch themeColors={themeColors} onClick={handleNextDay} >
            <SvgIcon width="18" height="18" viewBox="0 0 18 18" fill="none" >
              <Path themeColors={themeColors} d="M6.75 13.5L11.25 9L6.75 4.5" />
            </SvgIcon>
          </BtnSwitch>
        </ContainerBtn>
        <CalendarGlobalStyles />
      </>
    );
  };

export default DatepickerStatistics;