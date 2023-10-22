import { createGlobalStyle, styled } from "styled-components";
export const DataBtn = styled.div`
  padding: 6px 12px;
  color: #ffffff;
  background: #3e85f3;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    margin-top: 33px;
    margin-bottom: 33px;
    padding: 8px 12px;
    font-size: 16px;
  }
`;
export const CalendarGlobalStyles = createGlobalStyle`
.react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 327px;
    height: 354px;
    padding: 9px 18px;
    background-color: rgb(62, 133, 243);
    font-family: Inter;
    border-radius: 16px;
    color: #000;
    border: 1px solid #aeaeae;
    z-index: 9999;
}
.react-datepicker__triangle {
    visibility: hidden;
    position: absolute;
    left: 50px;
}
.react-datepicker__aria-live {
    position: absolute;
    clip-path: circle(0);
    border: 0;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    width: 1px;
    white-space: nowrap;
}
.react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
}
.react-datepicker__navigation {
    margin-top: 24px;
    color: white;
    align-items: center;
    background: none;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 2px;
    padding: 0;
    border: none;
    z-index: 1;
    text-indent: -999em;
    overflow: hidden;
}
.react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
}
.react-datepicker__navigation-icon--previous {
    right: -2px;
}
.react-datepicker__navigation-icon {
    position: relative;
    top: -1px;
    font-size: 20px;
    width: 0;
}
.react-datepicker__navigation-icon--next {
    left: -2px;
}
.react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
}
.react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0px;
    border-top-right-radius: 0.3rem;
}
.react-datepicker__header {
    position: relative;
    background-color: rgb(62, 133, 243);
    text-align: center;
    border-bottom: 1px solid #aeaeae;
    border-top-left-radius: 0.3rem;
    padding: 8px 0;
    position: relative;
}
.react-datepicker__current-month {
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: white;
}
.react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    margin-bottom: -8px;
    white-space: nowrap;
}
.react-datepicker__day-name {
    margin: 0px;
    padding: 8px;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    text-align: center;
    color: white;
}
.react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0px;
    text-align: center;
}
.react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
}
.react-datepicker__day-names, .react-datepicker__week {
    white-space: nowrap;
}
.react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: white;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    cursor: pointer;
}
.react-datepicker__day--selected {
    background-color: white;
    color: rgb(62, 133, 243);
    font-size: 14px;
}
.react-datepicker__day--weekend {
    opacity: 0.5;
}
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
}
.react-datepicker__navigation-icon--previous:before {
    transform: rotate(225deg);
    right: -7px;
}
.react-datepicker__navigation-icon--next:before {
    transform: rotate(45deg);
    left: -7px;
}
.react-datepicker__year-read-view--down-arrow, .react-datepicker__month-read-view--down-arrow, .react-datepicker__month-year-read-view--down-arrow, .react-datepicker__navigation-icon:before {
    border-color: #ccc;
    border-style: solid;
    border-width: 3px 3px 0 0;
    content: "";
    display: block;
    height: 9px;
    position: absolute;
    top: 6px;
    width: 9px;
}
.react-datepicker__month-container {
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: white;
    width: 100%;
}
.react-datepicker__month-wrapper{
    display: flex;
    justify-content: space-around;
    align-items:center;
}
.react-datepicker__month-text{
    cursor: pointer;
}
`;

export const CalendarMonthStyles = createGlobalStyle`
.react-datepicker {
    height: 180px;
}
`

export const TitleWrapper = styled.button`
    width: 121px;
    color: #ffffff;
    background: #3e85f3;
    border-radius: 8px;
    font-weight: 700;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    padding: 8px 12px;
    font-size: 16px;
    justify-content: space-around;
    align-items: center;
`;

export const Container = styled.div`
    display: flex;
`

export const ButtonL = styled.button`
    margin-left: 8px;
    padding: 8px 10px;
    height: 34px;
    width: 38px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(220, 227, 229, 0.5);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`

export const ButtonR = styled.button`
    padding: 8px 10px;
    height: 34px;
    width: 38px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(220, 227, 229, 0.5);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-left: none;
`