import { createGlobalStyle, styled } from 'styled-components';

export const AccountForm = styled.form`
background-color: #fff;
border-radius: 16px;
padding-bottom: 40px;
display: flex;
flex-direction: column;
align-items: center;
padding-left: 18px;
padding-right: 18px;
text-align: center;
background-color: ${p => p.theme.secondaryBgColor};


@media (min-width: 768px) {
   padding-top: 40px;
padding-bottom: 40px;
 }

 @media (min-width: 1440px) {
   padding-top: 60px;
padding-bottom: 60px;
padding-left: 164px;
padding-right: 165px;
 }
`

export const UserName = styled.h1`
font-family: 'Inter-Bold', sans-serif;
font-size: 14px;
font-weight: 700;
line-height: 18px;
margin-bottom: 4px;
color: ${p => p.theme.secondaryTextColor};


@media (min-width: 768px) {
   font-size: 18px;
margin-bottom: 8px;
 }
`

export const User = styled.p`
font-family: 'Inter-SemiBold', sans-serif;
font-size: 12px;
font-weight: 600;
line-height: 18px;
color: ${p => p.theme.colorHeaderCalendar};

margin-bottom: 40px;


@media (min-width: 768px) {
   font-size: 14px;
 }

 @media (min-width: 1440px) {
   margin-bottom: 44px;
 }
`

export const InputBox = styled.div`
display: flex;
flex-direction: column;
gap: 18px;
margin-bottom: 40px;

@media (min-width: 768px) {
   gap: 24px;
 }

@media (min-width: 1440px) {
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-between;
   row-gap: 24px;
   column-gap: 50px;
   margin-bottom: 88px;
 }
`

export const InputFile = styled.input`
display: none;
`

export const Input = styled.input`
font-family: 'Inter-SemiBold', sans-serif;
font-size: 16px;
font-weight: 600;
line-height: 18px;
width: 299px;
border-radius: 8px;
border: 1px solid ${p => p.theme.borderInputForm};
padding-top: 14px;
padding-bottom: 14px;
padding-left: 18px;
background-color: ${p => p.theme.secondaryBgColor};
color: ${p => p.theme.mainTextColor};

${(props) =>
    props.hasError &&
    `
      border: 2px solid red; 
    `}

@media (min-width: 768px) {
   width: 354px;
 }

 @media (min-width: 1440px) {
   width: 354px;
 }
`

Input.shouldForwardProp = (prop) => prop !== 'hasError';

export const Label = styled.label`
display: flex;
flex-direction: column;
align-items: flex-start;
font-size: 14px;
font-weight: 400;
line-height: 18px;
gap: 8px;
color: ${p => p.theme.labelsColor};


${(props) =>
    props.hasError &&
    `
      color: red; 
    `}

.calendar {
   width: 299px;
}

@media (min-width: 768px) {
   .calendar {
      width: 354px;
   }
  
 }

 @media (min-width: 1440px) {
   .calendar {
      width: 354px;
   }
 }
`

Label.shouldForwardProp = (prop) => prop !== 'hasError';

export const ButtonSubmit = styled.button`
font-family: 'Inter-SemiBold', sans-serif;
font-size: 14px;
font-weight: 600;
line-height: 18px;
border: none;
padding: 14px 50px;
border-radius: 16px;
background: #3E85F3;
color: #FFF;

@media (min-width: 768px) {
   padding: 15px 83px;
 }

 &:disabled {
    background-color: rgba(62, 133, 243, 0.5);
 }
 
`

export const CalendarGlobalStyles = createGlobalStyle`
.react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 9px 18px;
    background-color: rgb(62, 133, 243);
    font-family: Inter;
    border-radius: 16px;
    color: #000;
    border: 1px solid #aeaeae;

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

.react-datepicker__input-container {
    position: relative;
    
  }

.react-datepicker__input-container .react-datepicker__calendar-icon {
    position: absolute;
    top: 17px;
    left: 275px;

    @media (min-width: 768px) {
        left: 325px;
      }
     
      @media (min-width: 1440px) {
        left: 325px;
      }

  }

.react-datepicker__current-month {
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: white;

    @media (min-width: 768px) {
        font-size: 24px;
      }
     
     @media (min-width: 1440px) {
        font-size: 24px;
      }
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

    @media (min-width: 768px) {
        font-size: 18px;
      }
     
     @media (min-width: 1440px) {
        font-size: 18px;
      }
}
.react-datepicker__month {
    display: flex;
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

    @media (min-width: 768px) {
        font-size: 18px;
        width: 48px;
    height: 48px;
      }
     
     @media (min-width: 1440px) {
        font-size: 18px;
        width: 48px;
    height: 48px;
      }
}
.react-datepicker__day--selected {
    background-color: white;
    color: rgb(62, 133, 243);
    font-size: 14px;
    border-radius: 24px;

    @media (min-width: 768px) {
        font-size: 18px;
      }
     
     @media (min-width: 1440px) {
        font-size: 18px;
      }
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

    .react-datepicker__calendar-icon {
        position: absolute;
        left: 100px;
    }
}
`;